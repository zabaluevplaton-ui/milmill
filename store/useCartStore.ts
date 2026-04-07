import { create } from 'zustand';
import { CartItem } from '@/types/models';
import { buildOptimizedBasket, compareProviderQuotes, mergeCartItems } from '@/utils/cart';
import { usePantryStore } from './usePantryStore';

type S = { items: CartItem[]; provider: string; addIngredients:(ings:any[])=>void; toggleCheck:(id:string)=>void; optimize:()=>void; quotes: ReturnType<typeof compareProviderQuotes>; selectProvider:(p:string)=>void };
export const useCartStore = create<S>((set,get)=>(
  { items:[], provider:'Best Value', quotes:[],
    addIngredients:(ings)=>set({items:[...get().items, ...mergeCartItems(ings)]}),
    toggleCheck:(id)=>set({items:get().items.map((i)=>i.id===id?{...i,checked:!i.checked}:i)}),
    optimize:()=>{
      const pantry = usePantryStore.getState().items;
      const optimized = buildOptimizedBasket(get().items, pantry);
      const sub = optimized.reduce((s,i)=>s+i.quantity*4,0);
      set({items:optimized,quotes:compareProviderQuotes(sub)});
    },
    selectProvider:(p)=>set({provider:p})
  }
));

import { create } from 'zustand';
import { pantrySeed } from '@/services/mockData';
import { PantryItem } from '@/types/models';

type S = { items: PantryItem[]; addOrUpdate:(name:string, qty:number, unit:string)=>void };
export const usePantryStore = create<S>((set,get)=>({
  items: pantrySeed,
  addOrUpdate:(name,qty,unit)=>{
    const ex = get().items.find((i)=>i.name.toLowerCase()===name.toLowerCase());
    if(ex) set({items:get().items.map((i)=>i.id===ex.id?{...i,quantity:i.quantity+qty}:i)});
    else set({items:[...get().items,{id:Math.random().toString(),name,quantity:qty,unit,expiresAt:'2026-04-20',storageState:'fridge'}]});
  }
}));

import { create } from 'zustand';
import { SearchResult } from '@/types/models';

type S = { query: string; recent: string[]; results: SearchResult[]; setQuery:(q:string)=>void; setResults:(r:SearchResult[])=>void; pushRecent:(q:string)=>void };
export const useSearchStore = create<S>((set,get)=>({ query:'', recent:[], results:[], setQuery:(q)=>set({query:q}), setResults:(r)=>set({results:r}), pushRecent:(q)=>set({recent:[q,...get().recent.filter((x)=>x!==q)].slice(0,8)}) }));

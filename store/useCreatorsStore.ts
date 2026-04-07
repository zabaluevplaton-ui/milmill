import { create } from 'zustand';

type S = { followedIds: string[]; toggleFollow:(id:string)=>void };
export const useCreatorsStore = create<S>((set, get) => ({ followedIds: [], toggleFollow: (id)=>set({ followedIds: get().followedIds.includes(id) ? get().followedIds.filter((x)=>x!==id) : [...get().followedIds, id] }) }));

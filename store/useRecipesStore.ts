import { create } from 'zustand';
import { recipes } from '@/services/mockData';

type S = { savedIds: string[]; recentIds: string[]; toggleSave:(id:string)=>void; addRecent:(id:string)=>void };
export const useRecipesStore = create<S>((set, get) => ({
  savedIds: [], recentIds: [],
  toggleSave: (id) => set({ savedIds: get().savedIds.includes(id) ? get().savedIds.filter((x)=>x!==id) : [...get().savedIds, id] }),
  addRecent: (id) => set({ recentIds: [id, ...get().recentIds.filter((x)=>x!==id)].slice(0,20) })
}));
export { recipes };

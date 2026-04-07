import { creators, recipes } from './mockData';
const wait = (ms:number)=>new Promise(r=>setTimeout(r,ms));
export const searchService = { search: async (q:string)=>{ await wait(220); const qq=q.toLowerCase(); return [
  ...recipes.filter(r=>r.title.toLowerCase().includes(qq)).map(r=>({id:r.id,type:'recipe' as const,title:r.title,route:`/recipe/${r.id}`})),
  ...creators.filter(c=>c.nickname.includes(qq)||c.name.toLowerCase().includes(qq)).map(c=>({id:c.id,type:'creator' as const,title:c.name,subtitle:`@${c.nickname}`,route:`/creator/${c.id}`}))
 ];}, trending: async()=>['Wagyu','Persian Saffron','Oyster Season'] };

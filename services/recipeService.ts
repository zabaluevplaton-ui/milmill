import { recipes } from './mockData';
const wait = (ms:number)=>new Promise(r=>setTimeout(r,ms));
export const recipeService = { list: async()=>{ await wait(250); return recipes; }, getById: async(id:string)=>{ await wait(180); return recipes.find((r)=>r.id===id); } };

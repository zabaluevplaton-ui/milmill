import { creators, recipes, videos } from './mockData';
const wait=(ms:number)=>new Promise(r=>setTimeout(r,ms));
export const creatorService={ get: async(id:string)=>{await wait(150); return creators.find(c=>c.id===id);}, recipes: async(id:string)=>{await wait(180); return recipes.filter(r=>r.creatorId===id);}, videos: async(id:string)=>{await wait(180); return videos.filter(v=>v.creatorId===id);} };

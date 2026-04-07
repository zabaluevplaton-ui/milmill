import { compareProviderQuotes } from '@/utils/cart';
const wait=(ms:number)=>new Promise(r=>setTimeout(r,ms));
export const deliveryComparisonService={ compare: async(sub:number)=>{await wait(300); return compareProviderQuotes(sub);} };

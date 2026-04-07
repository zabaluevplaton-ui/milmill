const wait=(ms:number)=>new Promise(r=>setTimeout(r,ms));
export const pantryService={ insights: async()=>{await wait(160); return 'You already have 3/5 ingredients for salmon bowl.';} };

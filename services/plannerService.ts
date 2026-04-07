const wait=(ms:number)=>new Promise(r=>setTimeout(r,ms));
export const plannerService={ suggest: async()=>{await wait(160); return ['Miso-Glazed Salmon','Garden Omelette'];} };

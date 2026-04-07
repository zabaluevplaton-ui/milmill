const wait=(ms:number)=>new Promise(r=>setTimeout(r,ms));
export const cartService={ checkout: async()=>{await wait(250); return {ok:true};} };

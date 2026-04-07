const wait=(ms:number)=>new Promise(r=>setTimeout(r,ms));
export const aiChefService={ ask: async(input:string)=>{ await wait(500); return `Chef tip: ${input.includes('substitute') ? 'try Greek yogurt or tahini for creaminess.' : 'keep pan medium-high and rest protein for 2 minutes.'}`; } };

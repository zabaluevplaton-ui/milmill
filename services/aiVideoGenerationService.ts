const wait=(ms:number)=>new Promise(r=>setTimeout(r,ms));
export const aiVideoGenerationService={ generate: async(prompt:string)=>{ await wait(700); return {status:'queued', jobId:`job_${prompt.length}_${Date.now()}`}; } };

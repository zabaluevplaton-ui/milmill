import { create } from 'zustand';
import { PlannerWeek } from '@/types/models';

type S = { week: PlannerWeek; selectedDate: string; setSelectedDate:(d:string)=>void; addMeal:(date:string, slotId:string, recipeId:string)=>void };
const day = (date:string)=>({ date, slots:[{id:'dinner',mealType:'Dinner' as const}]});
const today = '2026-04-07';
export const usePlannerStore = create<S>((set,get)=>({
  week: { id:'w1', startDate:'2026-04-06', days:[day('2026-04-06'),day('2026-04-07'),day('2026-04-08'),day('2026-04-09'),day('2026-04-10'),day('2026-04-11'),day('2026-04-12')] },
  selectedDate: today,
  setSelectedDate:(d)=>set({selectedDate:d}),
  addMeal:(date,slotId,recipeId)=>set({ week: { ...get().week, days: get().week.days.map((dd)=>dd.date===date ? ({...dd,slots:dd.slots.map((s)=>s.id===slotId?{...s,recipeId}:s)}) : dd ) } })
}));

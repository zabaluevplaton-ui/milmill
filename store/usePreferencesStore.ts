import { create } from 'zustand';
import { UserPreferences } from '@/types/models';

const initial: UserPreferences = { diets: [], cuisines: [], allergens: [], dislikes: [], maxCookTime: 30, spice: 2, treatDay: true, reduceMotion: false, haptics: true, sounds: false };
export const usePreferencesStore = create<{prefs:UserPreferences; update:(patch:Partial<UserPreferences>)=>void}>((set,get)=>({ prefs: initial, update:(patch)=>set({prefs:{...get().prefs,...patch}}) }));

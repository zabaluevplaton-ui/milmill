import { create } from 'zustand';

type UiState = { activeDiscoverFilter: string; setActiveDiscoverFilter: (v: string)=>void; videoIndex: number; setVideoIndex:(n:number)=>void };
export const useUiStore = create<UiState>((set) => ({ activeDiscoverFilter: 'Popular', setActiveDiscoverFilter: (v)=>set({activeDiscoverFilter:v}), videoIndex: 0, setVideoIndex: (n)=>set({videoIndex:n}) }));

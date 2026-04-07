import { create } from 'zustand';
import { NotificationItem } from '@/types/models';

export const useNotificationsStore = create<{items:NotificationItem[]; push:(n:NotificationItem)=>void}>((set,get)=>({ items:[], push:(n)=>set({items:[n,...get().items]}) }));

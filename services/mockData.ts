import { Creator, PantryItem, Recipe, VideoPost } from '@/types/models';

export const creators: Creator[] = [
  { id: 'c1', name: 'Chef Julian', nickname: 'julianv', avatar: '', bio: 'Fire + finesse.', stats: { followers: 12400, likes: 88000, recipes: 52 } },
  { id: 'c2', name: 'Maya Stone', nickname: 'platebymaya', avatar: '', bio: 'Healthy comfort.', stats: { followers: 9200, likes: 41000, recipes: 34 } },
];

export const recipes: Recipe[] = [
  { id: 'r1', title: 'Miso-Glazed Salmon', image: '', kcal: 480, protein: 34, fat: 12, carbs: 8, time: 25, difficulty: 'Medium', creatorId: 'c1', tags: ['Popular','Seafood'], ingredients: [
    { id: 'i1', name: 'Salmon Fillet', quantity: 2, unit: 'pcs', category: 'Protein' },
    { id: 'i2', name: 'Miso Paste', quantity: 2, unit: 'tbsp', category: 'Sauce' },
  ], steps: ['Marinate fish', 'Sear skin-side down', 'Glaze and finish'] },
  { id: 'r2', title: 'Artisan Salmon Bowl', image: '', kcal: 420, protein: 32, fat: 18, carbs: 24, time: 18, difficulty: 'Easy', creatorId: 'c2', tags: ['Viral'], ingredients: [
    { id: 'i3', name: 'Rice', quantity: 1, unit: 'cup', category: 'Grain' },
    { id: 'i1b', name: 'Fresh Atlantic Salmon', quantity: 200, unit: 'g', category: 'Protein' },
  ], steps: ['Cook rice', 'Cube salmon', 'Assemble bowl'] }
];

export const videos: VideoPost[] = [
  { id: 'v1', recipeId: 'r1', creatorId: 'c1', title: 'Pan-Seared Wagyu vibes', thumbnail: '', durationSec: 25 },
  { id: 'v2', recipeId: 'r2', creatorId: 'c2', title: 'Salmon bowl 5-min prep', thumbnail: '', durationSec: 12 },
];

export const pantrySeed: PantryItem[] = [
  { id: 'p1', name: 'Miso Paste', quantity: 1, unit: 'jar', expiresAt: '2026-05-10', storageState: 'fridge' },
  { id: 'p2', name: 'Rice', quantity: 2, unit: 'kg', expiresAt: '2026-09-10', storageState: 'unopened' },
];

# EPICUREAN (Expo + React Native)

Production-grade scaffold implementing all required EPICUREAN flows from the stitched screen set.

## Implemented route map
- Tabs: Discover, Planner, Video, Kitchen, Profile
- Top-level: Search, Cart, Recipe Detail, Creator Profile, Chef Chat, Preferences, Settings, Shopping List, My Recipes, Menu Drawer, Collection, Planner Day

## Run
```bash
npm install
npm run start
```

## Architecture
- Expo Router + typed route-ready structure
- Zustand domain stores in `/store`
- Async mock services in `/services`
- Type-safe product models in `/types/models.ts`
- Smart cart optimization utilities in `/utils/cart.ts`

## Backend integration notes
1. Replace mock services with API clients keeping same signatures.
2. Persist stores with AsyncStorage/MMKV middleware.
3. Move cart optimization to edge function for provider-specific pricing.
4. Connect AI Chef + AI video generation services to LLM + media pipeline.

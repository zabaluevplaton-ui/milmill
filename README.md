# EPICUREAN (Expo + React Native)

Готовый scaffold мобильного приложения EPICUREAN на Expo Router + TypeScript.

## Как быстро посмотреть приложение

### Вариант 1 (самый быстрый, Web Preview)
```bash
npm install
npm run web
# если сеть режет запросы Expo API:
# npm run web:offline
```
После запуска открой URL из терминала (обычно `http://localhost:8081`).

### Вариант 2 (одной командой)
```bash
./scripts/bootstrap.sh
```
Скрипт установит зависимости и запустит web preview.

### Вариант 3 (на телефоне через Expo Go)
```bash
npm install
npm run start
```
- Установи Expo Go на iOS/Android.
- Отсканируй QR-код из терминала.

## Implemented route map
- Tabs: Discover, Planner, Video, Kitchen, Profile
- Top-level: Search, Cart, Recipe Detail, Creator Profile, Chef Chat, Preferences, Settings, Shopping List, My Recipes, Menu Drawer, Collection, Planner Day

## Scripts
- `npm run start` — Expo dev server
- `npm run web` — web preview
- `npm run ios` / `npm run android` — native run
- `npm run typecheck` — TypeScript check

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


## Важно для web
В `dependencies` уже добавлены `react-dom` и `react-native-web`, чтобы web-раннер Expo стартовал без ручной установки.


### Вариант 4 (offline fallback без npm install)
```bash
npm run preview:static
```
Открой `http://localhost:4173` для офлайн-демо превью интерфейса.

export interface RecipeIngredient { id: string; name: string; quantity: number; unit: string; category: string }
export interface IngredientStorageInfo { ingredientId: string; unopenedDays: number; openedDays: number; fridgeDays: number; freezerDays: number }
export interface Recipe { id: string; title: string; image: string; kcal: number; protein: number; fat: number; carbs: number; time: number; difficulty: 'Easy'|'Medium'|'Hard'; creatorId: string; tags: string[]; ingredients: RecipeIngredient[]; steps: string[] }
export interface CreatorStats { followers: number; likes: number; recipes: number }
export interface Creator { id: string; name: string; nickname: string; avatar: string; bio: string; stats: CreatorStats }
export interface VideoPost { id: string; recipeId: string; creatorId: string; title: string; thumbnail: string; durationSec: number }
export interface PlannerMealSlot { id: string; mealType: 'Breakfast'|'Lunch'|'Dinner'|'Snack'; recipeId?: string; treatDay?: boolean }
export interface PlannerDay { date: string; slots: PlannerMealSlot[] }
export interface PlannerWeek { id: string; startDate: string; days: PlannerDay[] }
export interface PantryItem { id: string; name: string; quantity: number; unit: string; expiresAt: string; storageState: 'unopened'|'opened'|'fridge'|'freezer' }
export interface CartItem { id: string; ingredientName: string; quantity: number; unit: string; pantryMatchQty: number; checked?: boolean }
export interface DeliveryProviderQuote { provider: 'Cheapest'|'Fastest'|'Best Value'|string; etaMin: number; total: number; fee: number; savings: number }
export interface SearchResult { id: string; type: 'recipe'|'creator'|'ingredient'|'cuisine'|'tag'; title: string; subtitle?: string; route: string }
export interface UserPreferences { diets: string[]; cuisines: string[]; allergens: string[]; dislikes: string[]; maxCookTime: number; spice: number; treatDay: boolean; reduceMotion: boolean; haptics: boolean; sounds: boolean }
export interface SavedCollection { id: string; name: string; recipeIds: string[] }
export interface StreakState { planningDays: number; savingDays: number; cookingDays: number; lastActionDate?: string }
export interface NotificationItem { id: string; title: string; body: string; createdAt: string; read: boolean }

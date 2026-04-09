import { CartItem, DeliveryProviderQuote, PantryItem, RecipeIngredient } from '@/types/models';

export const normalizeIngredientName = (name: string) => name.toLowerCase().trim().replace(/\s+/g, ' ');

export const convertUnitsIfPossible = (qty: number, unit: string) => ({ quantity: qty, unit });

export const mergeCartItems = (ingredients: RecipeIngredient[]): CartItem[] => {
  const map = new Map<string, CartItem>();
  ingredients.forEach((i) => {
    const converted = convertUnitsIfPossible(i.quantity, i.unit);
    const key = `${normalizeIngredientName(i.name)}:${converted.unit}`;
    const existing = map.get(key);
    if (existing) existing.quantity += converted.quantity;
    else map.set(key, { id: key, ingredientName: i.name, quantity: converted.quantity, unit: converted.unit, pantryMatchQty: 0 });
  });
  return [...map.values()];
};

export const mergeCartItemLists = (existing: CartItem[], incoming: CartItem[]): CartItem[] => {
  const map = new Map<string, CartItem>();
  [...existing, ...incoming].forEach((item) => {
    const key = `${normalizeIngredientName(item.ingredientName)}:${item.unit}`;
    const prev = map.get(key);
    if (prev) {
      prev.quantity += item.quantity;
      prev.checked = prev.checked && item.checked;
    } else {
      map.set(key, { ...item, id: key });
    }
  });
  return [...map.values()];
};

export const getPantryCoverage = (items: CartItem[], pantry: PantryItem[]) => items.map((item) => {
  const match = pantry.find((p) => normalizeIngredientName(p.name) === normalizeIngredientName(item.ingredientName));
  return { ...item, pantryMatchQty: match ? Math.min(item.quantity, match.quantity) : 0 };
});

export const estimateFreshnessWindow = (name: string) => name.includes('Salmon') ? '1-2 days chilled' : '3-7 days';

export const compareProviderQuotes = (subTotal: number): DeliveryProviderQuote[] => [
  { provider: 'Cheapest', etaMin: 120, total: subTotal * 0.93, fee: 4.99, savings: subTotal * 0.07 },
  { provider: 'Fastest', etaMin: 35, total: subTotal * 1.02, fee: 8.99, savings: 0 },
  { provider: 'Best Value', etaMin: 55, total: subTotal * 0.96, fee: 5.99, savings: subTotal * 0.04 },
];

export const buildOptimizedBasket = (items: CartItem[], pantry: PantryItem[]) => getPantryCoverage(items, pantry).map((i) => ({ ...i, quantity: Math.max(0, i.quantity - i.pantryMatchQty) }));

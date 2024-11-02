import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartState {
  cart: any[];
}

interface CartStoreActions {
  addToCart: (item: any) => void;
  removeFromCart: (itemId: any) => void;
  deleteProductFromCart: (itemId: any) => void;
  getItemQuantity: (itemId: any) => (state: CartState) => number;
}

type CartStore = CartState & CartStoreActions;

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (item) =>
        set((state) => {
          const itemInCart = state.cart.find((cartItem) => cartItem.id === item.id);

          if (itemInCart) {
            return {
              cart: state.cart.map((cartItem) =>
                cartItem.id === item.id
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem,
              ),
            };
          } else {
            return { cart: [ ...state.cart, { ...item, quantity: 1 } ] };
          }
        }),

      removeFromCart: (itemId) =>
        set((state) => ({
          cart: state.cart
            .map((cartItem) =>
              cartItem.id === itemId
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem,
            )
            .filter((cartItem) => cartItem.quantity > 0),
        })),

      deleteProductFromCart: (itemId) => {
        return set((state) => ({
          cart: state.cart.filter((cartItem) => cartItem.id !== itemId),
        }));
      },

      getItemQuantity: (itemId) => {
        const item = get().cart.find((cartItem) => cartItem.id === +itemId);
        console.log("item", item);
        return item ? item.quantity : 0;
      },
    }),
    {
      name: "zustand-cart",
    },
  ),
);


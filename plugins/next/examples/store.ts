import type { AccountSubscriptionItem } from '@/app/(login)/account/billing/_components/invoice-list';
import { createStore } from '@/lib/store';

interface ProductState {
  selectedProduct: AccountSubscriptionItem | null;
  actions: {
    setSelectedProduct: (data: AccountSubscriptionItem | null) => void;
    reset: () => void;
  };
}

export const useProductStore = createStore<ProductState>(
  (set) => ({
    selectedProduct: null,
    actions: {
      setSelectedProduct: (data) =>
        set((state) => {
          state.selectedProduct = data;
        }),
      reset: () =>
        set((state) => {
          state.selectedProduct = null;
        }),
    },
  }),
  {
    name: 'product',
  }
);

export const useSelectedProduct = () =>
  useProductStore((state) => state.selectedProduct);
export const useProductActions = () =>
  useProductStore((state) => state.actions);

// store/useHotelModal.ts
import { create } from "zustand";

type Hotel = any;

type Store = {
  isOpen: boolean;
  hotel: Hotel | null;
  open: (hotel: Hotel) => void;
  close: () => void;
};

export const useHotelModal = create<Store>((set) => ({
  isOpen: false,
  hotel: null,
  open: (hotel) => set({ isOpen: true, hotel }),
  close: () => set({ isOpen: false, hotel: null }),
}));

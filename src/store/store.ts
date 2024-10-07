import { create } from "zustand";

interface FlightDetailState {
  from: string;
  to: string;
  fromDate: Date | undefined;
  returnDate: Date | undefined;
  setFrom: (from: string) => void;
  setTo: (to: string) => void;
  setFromDate: (d: Date | undefined) => void;
  setReturnDate: (d: Date | undefined) => void;
}

export const useStore = create<FlightDetailState>((set) => ({
  from: "",
  to: "",
  fromDate: undefined,
  returnDate: undefined,
  setFrom: (from: string) => set((prev) => ({ ...prev, from: from })),
  setTo: (to: string) => set((prev) => ({ ...prev, to: to })),
  setFromDate: (d: Date | undefined) =>
    set((prev) => ({ ...prev, fromDate: d })),
  setReturnDate: (d: Date | undefined) =>
    set((prev) => ({ ...prev, returnDate: d })),
}));

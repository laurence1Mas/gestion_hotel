import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Hotel, Reservation, User } from "@/types/types";
import { mockHotels, mockReservations, mockUsers } from "@/data/mockData";

interface AppContextValue {
  user: User;
  setUser: (u: User) => void;
  hotels: Hotel[];
  reservations: Reservation[];
  selectedHotel: Hotel | null;
  openHotel: (h: Hotel) => void;
  closeHotel: () => void;
  addReservation: (r: Omit<Reservation, "id" | "createdAt">) => void;
  cancelReservation: (id: string) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(mockUsers[0]);
  const [hotels] = useState<Hotel[]>(mockHotels);
  const [reservations, setReservations] =
    useState<Reservation[]>(mockReservations);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);

  const openHotel = useCallback((h: Hotel) => setSelectedHotel(h), []);
  const closeHotel = useCallback(() => setSelectedHotel(null), []);

  const addReservation = useCallback(
    (r: Omit<Reservation, "id" | "createdAt">) => {
      setReservations((prev) => [
        {
          ...r,
          id: `r${Date.now()}`,
          createdAt: new Date().toISOString().slice(0, 10),
        },
        ...prev,
      ]);
    },
    [],
  );

  const cancelReservation = useCallback((id: string) => {
    setReservations((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "cancelled" } : r)),
    );
  }, []);

  const value = useMemo(
    () => ({
      user,
      setUser,
      hotels,
      reservations,
      selectedHotel,
      openHotel,
      closeHotel,
      addReservation,
      cancelReservation,
    }),
    [
      user,
      hotels,
      reservations,
      selectedHotel,
      openHotel,
      closeHotel,
      addReservation,
      cancelReservation,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
};

import { Hotel } from "@/types/types";
import { useApp } from "@/context/AppContext";
import { Star } from "lucide-react";

export const HotelCard = ({ hotel }: { hotel: Hotel }) => {
  const { openHotel } = useApp();
  return (
    <article
      onClick={() => openHotel(hotel)}
      className="card-luxe group cursor-pointer flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={hotel.image[0]}
          alt={hotel.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold">
          <Star className="w-3 h-3 fill-current text-accent" />
          {hotel.rating}
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-display text-xl text-foreground mb-2">
          {hotel.name}
        </h3>

        <div className="flex items-end justify-between pt-3 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground">À partir de</p>
            <p className="font-display text-2xl text-foreground">
              {hotel.price}$
              <span className="text-sm text-muted-foreground font-sans">
                {" "}
                / nuit
              </span>
            </p>
          </div>
          <span className="text-sm text-accent font-medium group-hover:translate-x-1 transition-transform">
            Découvrir →
          </span>
        </div>
      </div>
    </article>
  );
};

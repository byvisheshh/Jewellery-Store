import React from "react";
import { SHOWROOM_LOCATIONS, ShowroomLocation } from "../data/locations";
import { STORE_CONFIG } from "../data/storeConfig";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  Check, 
  Sparkles,
  ArrowUpRight 
} from "lucide-react";

interface StoreLocationsPageProps {
  onOpenAppointment: (showroomName?: string) => void;
}

export const StoreLocationsPage: React.FC<StoreLocationsPageProps> = ({
  onOpenAppointment,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-[0.25em] text-[#8F7040] font-semibold">
          Showrooms & Salons
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#1E1B18] font-normal">
          Our Heritage Locations
        </h1>
        <p className="text-xs sm:text-sm text-[#666057] leading-relaxed">
          Step into our experiential jewellery salons across India for private bridal consultations, certified gemological viewings, and personalized bespoke commissions.
        </p>
      </div>

      {/* Locations Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {SHOWROOM_LOCATIONS.map((loc) => (
          <div
            key={loc.id}
            className={`p-8 bg-white border transition-all duration-300 flex flex-col justify-between space-y-6 ${
              loc.isFlagship
                ? "border-[#AA8B56] shadow-md ring-1 ring-[#AA8B56]/30"
                : "border-[#E8E2D8] hover:border-[#AA8B56]/60 shadow-sm"
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8F7040]">
                  {loc.city} {loc.isFlagship && "· Flagship Heritage Salon"}
                </span>
                <span className="text-xs text-emerald-700 font-medium">Open Today</span>
              </div>

              <h2 className="font-serif text-2xl text-[#1E1B18] font-medium">
                {loc.name}
              </h2>

              <div className="space-y-2.5 text-xs text-[#45403A]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#AA8B56] mt-0.5 shrink-0" />
                  <div>
                    <span>{loc.address}</span>
                    <span className="block text-[11px] text-[#8E877D] mt-0.5">
                      Landmark: {loc.landmark}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#AA8B56] shrink-0" />
                  <span>{loc.timings}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#AA8B56] shrink-0" />
                  <a href={`tel:${loc.phone}`} className="hover:text-[#AA8B56] transition-colors">
                    {loc.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#AA8B56] shrink-0" />
                  <a href={`mailto:${loc.email}`} className="hover:text-[#AA8B56] transition-colors">
                    {loc.email}
                  </a>
                </div>
              </div>

              {/* Amenities */}
              <div className="pt-3 border-t border-[#F4EFE6] space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-[#8E877D] font-semibold block">
                  Salon Services & Amenities:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#666057]">
                  {loc.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#AA8B56] shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions: Book Visit & Directions */}
            <div className="pt-4 border-t border-[#E8E2D8] flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={() => onOpenAppointment(loc.name)}
                className="flex-1 py-2.5 px-4 bg-[#1E1B18] hover:bg-[#382917] text-white text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D8C6A5]" />
                <span>Reserve Salon Visit</span>
              </button>

              <a
                href={`https://maps.google.com/?q=${loc.googleMapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 border border-[#AA8B56] hover:bg-[#FAF8F5] text-[#1E1B18] text-xs uppercase tracking-wider font-semibold transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <span>Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8F7040]" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

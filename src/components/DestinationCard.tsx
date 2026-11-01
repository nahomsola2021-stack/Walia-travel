import React from 'react';
import { Destination } from '../types';
import { MapPin, Compass, ArrowUpRight } from 'lucide-react';

interface DestinationCardProps {
  destination: Destination;
  onSelect: (destination: Destination) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination, onSelect }) => {
  return (
    <div
      id={`destination-card-${destination.id}`}
      onClick={() => onSelect(destination)}
      className="group relative h-96 rounded-2xl overflow-hidden border border-[#EFE4DA] hover:border-[#FFCBA6] cursor-pointer shadow-md hover:shadow-2xl hover:shadow-[#FFCBA6]/20 transition-all duration-500"
    >
      <img
        src={destination.heroImage}
        alt={destination.name}
        loading="lazy"
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      
      {/* Editorial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#251810] via-[#251810]/55 to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />

      {/* Elevation / Region badge */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF9F5]/95 backdrop-blur-md text-[#251810] text-xs font-bold border border-[#FFCBA6]/60 shadow-sm">
          <MapPin className="w-3 h-3 text-[#B8532C]" />
          <span>{destination.region}</span>
        </span>
        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-45">
          <ArrowUpRight className="w-4 h-4 text-[#FFCBA6]" />
        </div>
      </div>

      {/* Content bottom */}
      <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end">
        <h3 className="font-display text-2xl font-bold text-[#FAF6F0] group-hover:text-[#FFCBA6] transition-colors leading-tight">
          {destination.name}
        </h3>
        <p className="mt-1 text-xs text-[#FFCBA6] font-sans-ui line-clamp-1 font-medium">
          {destination.subtitle}
        </p>

        <p className="mt-2 text-xs text-stone-200 font-sans-ui line-clamp-2 leading-relaxed opacity-95">
          {destination.description}
        </p>

        {/* Wildlife preview tag */}
        <div className="mt-3.5 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-stone-300">
          <div className="flex items-center gap-1">
            <Compass className="w-3 h-3 text-[#FFCBA6]" />
            <span className="truncate max-w-[180px]">{destination.wildlife.slice(0, 2).join(', ')}</span>
          </div>
          <span className="text-[#FFCBA6] font-semibold group-hover:underline">Explore →</span>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Tour } from '../types';
import { Clock, MapPin, ArrowRight, Shield } from 'lucide-react';

interface TourCardProps {
  tour: Tour;
  onSelect: (tour: Tour) => void;
  onPlan: (tour: Tour) => void;
}

export const TourCard: React.FC<TourCardProps> = ({ tour, onSelect, onPlan }) => {
  return (
    <div
      id={`tour-card-${tour.id}`}
      className="group relative bg-white rounded-2xl border border-[#EFE4DA] hover:border-[#FFCBA6] transition-all duration-300 flex flex-col overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#FFCBA6]/15"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 cursor-pointer" onClick={() => onSelect(tour)}>
        <img
          src={tour.heroImage}
          alt={tour.name}
          loading="lazy"
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Duration & Difficulty Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF9F5]/95 backdrop-blur-md text-[#251810] text-xs font-bold border border-[#FFCBA6]/60 shadow-sm">
            <Clock className="w-3 h-3 text-[#B8532C]" />
            <span>{tour.duration}</span>
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFF9F5]/90 backdrop-blur-md text-[#4B3F38] text-[11px] font-semibold border border-[#EFE4DA] shadow-sm">
            <Shield className="w-3 h-3 text-[#B8532C]" />
            <span>{tour.difficulty}</span>
          </span>
        </div>

        {/* Region Tag */}
        <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-white font-semibold drop-shadow">
          <MapPin className="w-3.5 h-3.5 text-[#FFCBA6]" />
          <span>{tour.region}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between bg-white">
        <div>
          {/* Experience Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {tour.experienceTypes.slice(0, 3).map((exp) => (
              <span
                key={exp}
                className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#FFF3EC] text-[#251810] border border-[#FFCBA6]/40"
              >
                {exp}
              </span>
            ))}
          </div>

          {/* Tour Title */}
          <h3
            onClick={() => onSelect(tour)}
            className="font-display text-2xl font-bold text-[#251810] group-hover:text-[#B8532C] transition-colors leading-snug cursor-pointer line-clamp-2"
          >
            {tour.name}
          </h3>

          {/* Overview text */}
          <p className="mt-2.5 text-xs text-[#5A4D45] font-sans-ui line-clamp-3 leading-relaxed">
            {tour.overview}
          </p>

          {/* Key Highlights Bullet points */}
          <div className="mt-4 pt-3 border-t border-[#F0E5DC] space-y-1.5">
            {tour.highlights.slice(0, 2).map((h, idx) => (
              <div key={idx} className="flex items-start gap-2 text-[11px] text-[#4B3F38] line-clamp-1">
                <span className="text-[#B8532C] shrink-0 font-bold">•</span>
                <span className="truncate">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-6 pt-4 border-t border-[#F0E5DC] flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#7A6C63] block font-semibold">
              Expedition Rate
            </span>
            <span className="font-display text-lg font-bold text-[#251810]">
              {tour.priceFrom || 'Inquire for quote'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelect(tour)}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-[#4B3F38] hover:text-[#251810] bg-[#FFF3EC] hover:bg-[#FFE5D4] border border-[#FFCBA6]/30 transition-colors cursor-pointer"
            >
              Itinerary
            </button>
            <button
              onClick={() => onPlan(tour)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FFCBA6] text-[#251810] hover:bg-[#FFE5D4] text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              <span>Inquire</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

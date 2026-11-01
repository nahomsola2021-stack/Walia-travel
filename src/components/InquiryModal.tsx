import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Calendar, Users, MapPin, Compass, Send, PhoneCall } from 'lucide-react';
import { TOURS_DATA } from '../data/tours';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTourTitle?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedTourTitle,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    travelDates: '',
    travelers: '2 Travelers',
    tourSelection: preselectedTourTitle || 'Great Ethiopian Run, Rift Valley & Wild Highlands Adventure',
    interests: [] as string[],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedTourTitle) {
      setFormData((prev) => ({ ...prev, tourSelection: preselectedTourTitle }));
    }
  }, [preselectedTourTitle]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleInterest = (interest: string) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(interest);
      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((i) => i !== interest)
          : [...prev.interests, interest],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      id="walia-inquiry-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#251810]/65 backdrop-blur-sm animate-fadeIn"
    >
      <div
        className="relative w-full max-w-2xl bg-[#FFF9F5] border border-[#EFE4DA] rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-[#FFF3EC] px-6 py-5 border-b border-[#EFE4DA] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white border border-[#FFCBA6] flex items-center justify-center shadow-sm">
              <Compass className="w-5 h-5 text-[#B8532C]" />
            </div>
            <div>
              <h3 className="font-display text-2xl text-[#251810] font-bold leading-tight">
                Plan Your Ethiopian Adventure
              </h3>
              <p className="text-xs text-[#7A6C63] font-sans-ui mt-0.5">
                Tailored expedition design by our certified Addis Ababa travel specialists
              </p>
            </div>
          </div>
          <button
            id="close-inquiry-modal-btn"
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full bg-white hover:bg-[#FFF0E6] text-[#4B3F38] hover:text-[#251810] border border-[#EFE4DA] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#FFF0E6] border border-[#FFCBA6] flex items-center justify-center text-[#B8532C]">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h4 className="font-display text-3xl font-bold text-[#251810]">
                Expedition Inquiry Received
              </h4>
              <p className="text-[#4B3F38] text-sm max-w-md mx-auto font-sans-ui leading-relaxed">
                Ameseginalehu (Thank you), <strong className="text-[#251810]">{formData.name || 'Traveler'}</strong>! Our senior wildlife and expedition coordinator will review your itinerary preferences and respond within 24 hours with a comprehensive customized proposal.
              </p>
              <div className="p-4 rounded-xl bg-[#FFF3EC] border border-[#EFE4DA] text-left text-xs text-[#5A4D45] space-y-1.5 max-w-md mx-auto">
                <p className="text-[#B8532C] font-bold">Inquiry Summary:</p>
                <p>• Selected Tour: <span className="text-[#251810] font-semibold">{formData.tourSelection}</span></p>
                <p>• Travelers: <span className="text-[#251810] font-semibold">{formData.travelers}</span></p>
                <p>• Dates: <span className="text-[#251810] font-semibold">{formData.travelDates || 'Flexible dates'}</span></p>
                <p>• Direct Contact: <span className="text-[#251810] font-semibold">{formData.email}</span></p>
              </div>
              <div className="pt-4 flex items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full bg-[#FFCBA6] text-[#251810] font-bold text-sm hover:bg-[#FFE5D4] transition-colors shadow-sm cursor-pointer"
                >
                  Close & Explore More Tours
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Tour Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#B8532C] font-bold mb-2">
                  Selected Tour or Expedition
                </label>
                <div className="relative">
                  <select
                    value={formData.tourSelection}
                    onChange={(e) => setFormData({ ...formData, tourSelection: e.target.value })}
                    className="w-full bg-white border border-[#D9CBC0] focus:border-[#FFCBA6] rounded-xl px-4 py-3 text-[#251810] text-sm appearance-none focus:outline-none transition-colors shadow-sm"
                  >
                    <option value="Custom Expedition">✨ Bespoke / Custom Private Expedition</option>
                    {TOURS_DATA.map((t) => (
                      <option key={t.id} value={t.name}>
                        {t.duration} — {t.name}
                      </option>
                    ))}
                  </select>
                  <MapPin className="absolute right-4 top-3.5 w-4 h-4 text-[#7A6C63] pointer-events-none" />
                </div>
              </div>

              {/* Personal Details Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4B3F38] font-bold mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-[#D9CBC0] focus:border-[#FFCBA6] rounded-xl px-4 py-2.5 text-[#251810] text-sm focus:outline-none transition-colors placeholder:text-[#9E8E84] shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4B3F38] font-bold mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-[#D9CBC0] focus:border-[#FFCBA6] rounded-xl px-4 py-2.5 text-[#251810] text-sm focus:outline-none transition-colors placeholder:text-[#9E8E84] shadow-sm"
                  />
                </div>
              </div>

              {/* Phone & Country Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4B3F38] font-bold mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-[#D9CBC0] focus:border-[#FFCBA6] rounded-xl px-4 py-2.5 text-[#251810] text-sm focus:outline-none transition-colors placeholder:text-[#9E8E84] shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4B3F38] font-bold mb-1.5">
                    Country of Residence
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. United Kingdom"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-white border border-[#D9CBC0] focus:border-[#FFCBA6] rounded-xl px-4 py-2.5 text-[#251810] text-sm focus:outline-none transition-colors placeholder:text-[#9E8E84] shadow-sm"
                  />
                </div>
              </div>

              {/* Travel Dates & Travelers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4B3F38] font-bold mb-1.5">
                    Estimated Travel Dates
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. November 2026 / Autumn"
                      value={formData.travelDates}
                      onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                      className="w-full bg-white border border-[#D9CBC0] focus:border-[#FFCBA6] rounded-xl pl-4 pr-10 py-2.5 text-[#251810] text-sm focus:outline-none transition-colors placeholder:text-[#9E8E84] shadow-sm"
                    />
                    <Calendar className="absolute right-3.5 top-3 w-4 h-4 text-[#7A6C63] pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4B3F38] font-bold mb-1.5">
                    Party Size
                  </label>
                  <div className="relative">
                    <select
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      className="w-full bg-white border border-[#D9CBC0] focus:border-[#FFCBA6] rounded-xl px-4 py-2.5 text-[#251810] text-sm appearance-none focus:outline-none transition-colors shadow-sm"
                    >
                      <option value="Solo Traveler (1)">Solo Traveler (1)</option>
                      <option value="2 Travelers">2 Travelers (Couple / Friends)</option>
                      <option value="3–5 Travelers">Small Group (3–5)</option>
                      <option value="6–10 Travelers">Private Party (6–10)</option>
                      <option value="11+ Travelers">Large Expedition Group (11+)</option>
                    </select>
                    <Users className="absolute right-3.5 top-3 w-4 h-4 text-[#7A6C63] pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Special Travel Interests Chips */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#B8532C] font-bold mb-2">
                  Adventure Interests (Select all that apply)
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Walia Ibex Tracking',
                    'Ethiopian Wolf Safari',
                    'Simien High Trekking',
                    'Erta Ale Volcano',
                    'Endemic Birding',
                    'Great Ethiopian Run',
                    'Lalibela Rock Churches',
                    'Coffee Origins',
                  ].map((interest) => {
                    const isSelected = formData.interests.includes(interest);
                    return (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#FFCBA6] text-[#251810] border border-[#FFCBA6] shadow-sm'
                            : 'bg-white border border-[#D9CBC0] text-[#4B3F38] hover:border-[#FFCBA6]'
                        }`}
                      >
                        {interest}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message / Requests */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#4B3F38] font-bold mb-1.5">
                  Message / Special Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Share fitness levels, dietary requirements, photography goals, or specific destinations you'd like to combine..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-[#D9CBC0] focus:border-[#FFCBA6] rounded-xl p-3.5 text-[#251810] text-sm focus:outline-none transition-colors placeholder:text-[#9E8E84] shadow-sm"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#EFE4DA]">
                <div className="text-xs text-[#7A6C63] flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-[#B8532C]" />
                  <span>Direct WhatsApp inquiry on +251 91 123 4567</span>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#FFCBA6] hover:bg-[#FFE5D4] text-[#251810] font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-[#FFCBA6]/30 disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Transmitting Request...' : 'Send Expedition Inquiry'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

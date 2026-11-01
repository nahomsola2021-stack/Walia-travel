import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck, ChevronDown } from 'lucide-react';
import { TOURS_DATA } from '../data/tours';
import { WildStyles, PageHero } from '../components/WildUI';

/*
  Brand tokens: Forest #173F35 · Gold #C89B3C · Ivory #F7F3E9 · Earth #352D27
                Sky #1E5A8A · Nature #4E7653 · Terracotta #B5523A · Sand #E6DED1
*/

const inputCls =
  'w-full rounded-[6px] border border-[#E6DED1] bg-[#FBF9F3] px-4 py-3 text-sm text-[#352D27] placeholder:text-[#352D27]/40 transition focus:border-[#C89B3C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/25';

const Label: React.FC<{ htmlFor: string; children: React.ReactNode }> = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#173F35]">
    {children}
  </label>
);

const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = ({ children, ...props }) => (
  <div className="relative">
    <select {...props} className={`${inputCls} cursor-pointer appearance-none !pr-11`}>
      {children}
    </select>
    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#173F35]" />
  </div>
);

const MountainMark: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 120 44"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M3 41 L38 12 L54 27 L70 6 L117 41" />
    <path d="M38 12 L46 20" opacity="0.55" />
  </svg>
);

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    travelDates: '',
    travelers: '2 Travelers',
    tourInterest: 'Custom Expedition',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (k: keyof typeof formData) => (e: React.ChangeEvent<any>) =>
    setFormData({ ...formData, [k]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }, 1200);
  };

  const info = [
    {
      Icon: MapPin,
      title: 'Office location',
      body: (
        <span>
          Lalibela, Amhara Region,
          <br />
          Ethiopia
        </span>
      ),
    },
    {
      Icon: Phone,
      title: 'Direct line and WhatsApp',
      body: (
        <span className="flex flex-col gap-1">
          <a href="tel:+251911072137" className="text-lg font-medium text-[#E5BA55] transition hover:text-white">
            +251 911 072 137
          </a>
          <a href="tel:+251925963212" className="text-lg font-medium text-[#E5BA55] transition hover:text-white">
            +251 925 963 212
          </a>
          <span className="text-sm text-[#F7F3E9]/60">Available 7 days a week</span>
        </span>
      ),
    },
    {
      Icon: Mail,
      title: 'Email',
      body: (
        <span>
          <a href="mailto:info@waliatravel.com" className="transition hover:text-[#E5BA55]">
            info@waliatravel.com
          </a>
          <span className="block text-sm text-[#F7F3E9]/60">Guaranteed 24hr response</span>
        </span>
      ),
    },
    { Icon: Clock, title: 'Operating hours', body: <span>Mon to Sat, 08:30 to 18:30 (EAT)</span> },
  ];

  return (
    <div className="min-h-screen w-full bg-[#F7F3E9] pb-24 font-sans text-[#352D27]">
      <WildStyles />

      <PageHero
        tag="Direct inquiries"
        title="Contact Walia Travel"
        sub="Connect directly with our native expedition team in Lalibela to begin crafting your bespoke Ethiopian journey."
        image="https://res.cloudinary.com/dw1ohipim/image/upload/v1789690738/naevlrzchxtsih0ajtvb.jpg"
      />

      <section className="relative z-20 mx-auto -mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl border border-[#E6DED1] bg-white shadow-[0_30px_70px_rgba(23,63,53,0.18)] lg:grid-cols-12">
          {/* Info panel */}
          <div className="relative isolate flex flex-col justify-between overflow-hidden bg-[#173F35] p-10 text-[#F7F3E9] md:p-14 lg:col-span-5">
            <div
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background:
                  'radial-gradient(70% 55% at 15% 0%, rgba(200,155,60,0.16) 0%, rgba(200,155,60,0) 70%)',
              }}
            />
            <MountainMark className="pointer-events-none absolute -bottom-1 -right-4 -z-10 h-44 w-auto text-[#C89B3C] opacity-20" />

            <div className="space-y-12">
              <div>
                <h2 className="font-serif text-3xl font-medium">Lalibela HQ</h2>
                <p className="mt-4 text-[#F7F3E9]/80">
                  Our local experts are ready to design your ultimate wildlife, trekking, or cultural expedition.
                </p>
              </div>
              <div className="space-y-8">
                {info.map(({ Icon, title, body }) => (
                  <div key={title} className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#F7F3E9]/10 text-[#E5BA55]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#F7F3E9]">{title}</p>
                      <div className="mt-2 text-[#F7F3E9]/80">{body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 space-y-4 border-t border-[#F7F3E9]/20 pt-8">
              <p className="text-xs font-bold uppercase tracking-wider text-[#E5BA55]">Official certifications</p>
              {['Licensed by Ethiopian Ministry of Tourism', 'Member, Ethiopian Tour Operators (ETOA)'].map((c) => (
                <div key={c} className="flex items-center gap-3 text-sm text-[#F7F3E9]/90">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-[#E5BA55]" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form panel */}
          <div className="bg-white p-8 md:p-14 lg:col-span-7">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center space-y-6 py-16 text-center">
                <div className="grid h-24 w-24 place-items-center rounded-full bg-[#4E7653]/10 text-[#4E7653]">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
                <h2 className="font-serif text-4xl font-medium text-[#173F35]">Inquiry received</h2>
                <p className="max-w-md text-lg text-[#352D27]/80">
                  Thank you for reaching out to Walia Travel. Our expedition specialists are reviewing your request
                  and will email you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-[6px] border border-[#173F35] px-8 py-3 text-sm font-bold uppercase tracking-wider text-[#173F35] transition-colors hover:bg-[#173F35] hover:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h2 className="font-serif text-3xl font-medium text-[#173F35] md:text-4xl">Plan your expedition</h2>
                  <p className="mt-3 text-[#352D27]/70">
                    Fill in your details and our team will prepare a personalized itinerary and quote.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="c-name">Your name *</Label>
                    <input
                      id="c-name"
                      type="text"
                      required
                      placeholder="e.g. Samuel Bennett"
                      value={formData.name}
                      onChange={set('name')}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <Label htmlFor="c-email">Email address *</Label>
                    <input
                      id="c-email"
                      type="email"
                      required
                      placeholder="samuel@example.com"
                      value={formData.email}
                      onChange={set('email')}
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="c-phone">Phone / WhatsApp</Label>
                    <input
                      id="c-phone"
                      type="tel"
                      placeholder="+44 7000 000000"
                      value={formData.phone}
                      onChange={set('phone')}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <Label htmlFor="c-country">Country of residence</Label>
                    <input
                      id="c-country"
                      type="text"
                      placeholder="e.g. Germany"
                      value={formData.country}
                      onChange={set('country')}
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="c-dates">Estimated travel dates</Label>
                    <input
                      id="c-dates"
                      type="text"
                      placeholder="e.g. Nov 2026 or flexible"
                      value={formData.travelDates}
                      onChange={set('travelDates')}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <Label htmlFor="c-travelers">Number of travelers</Label>
                    <Select id="c-travelers" value={formData.travelers} onChange={set('travelers')}>
                      <option value="1 Solo Traveler">1 solo traveler</option>
                      <option value="2 Travelers">2 travelers</option>
                      <option value="3–5 Travelers">Small group (3–5)</option>
                      <option value="6+ Travelers">Large group (6+)</option>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="c-tour">Primary interest</Label>
                  <Select id="c-tour" value={formData.tourInterest} onChange={set('tourInterest')}>
                    <option value="Custom Expedition">Tailor-made / bespoke expedition</option>
                    {TOURS_DATA.map((t) => (
                      <option key={t.id} value={t.name}>
                        {t.duration} - {t.name}
                      </option>
                    ))}
                  </Select>
                </div>

                <div>
                  <Label htmlFor="c-msg">Message / requirements</Label>
                  <textarea
                    id="c-msg"
                    rows={5}
                    placeholder="Tell us about your fitness level, the animals you hope to see, or any questions."
                    value={formData.message}
                    onChange={set('message')}
                    className={`${inputCls} resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="flex w-full items-center justify-center gap-3 rounded-[6px] bg-[#C89B3C] py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[0_12px_28px_rgba(200,155,60,0.3)] transition-all hover:bg-[#B58930] disabled:opacity-70"
                >
                  {submitting ? (
                    <>
                      <svg
                        className="h-5 w-5 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending inquiry
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="mx-auto mt-16 max-w-7xl border-t border-[#E6DED1] px-4 py-24 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl font-medium text-[#173F35]">Find us in Lalibela</h2>
        <p className="mt-3 text-lg text-[#352D27]/80">Our headquarters sit beside the rock-hewn churches.</p>
        <div className="group relative mt-10 h-[400px] overflow-hidden rounded-2xl border border-[#E6DED1] shadow-lg md:h-[550px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.29828557342!2d39.03264426510344!3d12.040989392237893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1642fb2f2db8bc27%3A0x2f3972a9e22bb0b5!2sLalibela%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1714472300000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-[50%] transition-all duration-700 group-hover:grayscale-0"
            title="Walia Travel Headquarters Map"
          />
        </div>
      </section>
    </div>
  );
};
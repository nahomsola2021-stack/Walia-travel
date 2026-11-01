import React, { useState } from 'react';
import { BLOG_POSTS, TRAVEL_EVENTS } from '../data/blogEvents';
import { Calendar, ArrowUpRight, User } from 'lucide-react';
import { BlogPost } from '../types';
import { WildStyles, PageHero, ArticleModal, ArticleData } from '../components/WildUI';

/*
  Brand tokens: Forest #173F35 · Gold #C89B3C · Ivory #F7F3E9 · Earth #352D27
                Sky #1E5A8A · Nature #4E7653 · Terracotta #B5523A · Sand #E6DED1
*/

interface BlogEventsPageProps {
  onOpenInquiry: (name?: string) => void;
}

const FILLER = [
  "As we continue our journey through the high-altitude plateaus and sweeping rift valleys, every step reveals a new layer of Ethiopia's complex history. The landscapes here do not just serve as a backdrop; they are active participants in the stories of the people who call this ancient land home.",
  'Whether tracking wildlife in the early mist of the Sanetti Plateau, standing before the rock-hewn marvels of Lalibela, or joining 45,000 celebrants through the streets of Addis Ababa, each moment reflects the profound spirit of discovery that guides Walia Travel. This is more than an expedition: it is a homecoming to the cradle of humanity.',
];

const toArticle = (p: BlogPost): ArticleData => ({
  image: p.image,
  title: p.title,
  category: p.category,
  date: p.date,
  readTime: p.readTime,
  author: p.author,
  excerpt: p.excerpt,
  body: [p.content, ...FILLER].filter(Boolean) as string[],
});

const cld = (url: string, transform: string) =>
  url && url.includes('res.cloudinary.com') && url.includes('/upload/')
    ? url.replace('/upload/', `/upload/${transform}/`)
    : url;

export const BlogEventsPage: React.FC<BlogEventsPageProps> = ({ onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'blog' | 'events'>('all');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  const regularPosts = BLOG_POSTS.filter((p) => p.id !== featuredPost.id);

  const tabs = [
    { id: 'all', label: 'All updates' },
    { id: 'events', label: `Upcoming events (${TRAVEL_EVENTS.length})` },
    { id: 'blog', label: `Field stories (${BLOG_POSTS.length})` },
  ];

  return (
    <div className="min-h-screen w-full bg-[#F7F3E9] pb-24 font-sans text-[#352D27]">
      <WildStyles />

      <PageHero
        tag="Chronicles and gatherings"
        title="Stories and events"
        sub="Field notes from our naturalists, marathon preparations, and exclusive departures for Ethiopia's ancient cultural celebrations."
        image="https://res.cloudinary.com/dw1ohipim/image/upload/v1789690028/jjjtescxefh3xvbktk4o.jpg"
      />

      {/* TABS */}
      <div className="relative z-20 mx-auto -mt-8 max-w-3xl px-4">
        <div
          role="tablist"
          aria-label="Filter updates"
          className="flex items-center gap-2 overflow-x-auto rounded-2xl border border-[#E6DED1] bg-white p-2 shadow-[0_18px_44px_rgba(23,63,53,0.1)]"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              onClick={() => setActiveTab(tab.id as any)}
              aria-selected={activeTab === tab.id}
              className={`min-w-[140px] flex-1 rounded-xl px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${
                activeTab === tab.id
                  ? 'bg-[#173F35] text-[#F7F3E9]'
                  : 'text-[#352D27] hover:bg-[#F7F3E9] hover:text-[#173F35]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl space-y-28 px-4 sm:px-6 lg:px-8">
        {/* EVENTS */}
        {(activeTab === 'all' || activeTab === 'events') && (
          <section className="space-y-10">
            <div className="border-b border-[#E6DED1] pb-6">
              <h2 className="font-serif text-4xl font-medium text-[#173F35]">Signature departures</h2>
              <p className="mt-2 text-[#352D27]/70">Join us for once-in-a-lifetime cultural festivals and marathons.</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {TRAVEL_EVENTS.map((event) => (
                <article
                  key={event.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#E6DED1] bg-white transition duration-500 hover:border-[#173F35]/35 hover:shadow-[0_20px_44px_rgba(23,63,53,0.12)] sm:flex-row"
                >
                  <div className="relative h-64 overflow-hidden sm:h-auto sm:w-2/5">
                    <img
                      src={cld(event.image, 'f_auto,q_auto,w_800')}
                      alt={event.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-[#B5523A] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                      {event.category}
                    </span>
                  </div>
                  <div className="flex flex-col justify-between p-8 sm:w-3/5">
                    <div className="space-y-4">
                      <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#4E7653]">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </p>
                      <h3 className="font-serif text-2xl font-medium leading-tight text-[#173F35] transition-colors group-hover:text-[#B58930]">
                        {event.title}
                      </h3>
                      <p className="line-clamp-3 text-[#352D27]/80">{event.description}</p>
                      <p className="border-l-2 border-[#C89B3C] pl-3 italic text-[#352D27]">{event.highlight}</p>
                    </div>
                    <button
                      onClick={() => onOpenInquiry(`Event Booking: ${event.title}`)}
                      className="mt-8 w-full rounded-[6px] bg-[#C89B3C] py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#B58930]"
                    >
                      Inquire about this departure
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* BLOG */}
        {(activeTab === 'all' || activeTab === 'blog') && (
          <section className="space-y-12">
            <div className="border-b border-[#E6DED1] pb-6">
              <h2 className="font-serif text-4xl font-medium text-[#173F35]">Field stories & guides</h2>
              <p className="mt-2 text-[#352D27]/70">Insights and inspiration from our expert guides and naturalists.</p>
            </div>

            {/* Featured */}
            <article
              onClick={() => setSelectedPost(featuredPost)}
              className="group relative isolate flex min-h-[560px] cursor-pointer items-end overflow-hidden rounded-3xl border border-[#E6DED1] bg-[#071812] text-[#F7F3E9]"
            >
              <img
                src={cld(featuredPost.image, 'f_auto,q_auto,w_1800')}
                alt={featuredPost.title}
                className="absolute inset-0 -z-10 h-full w-full object-cover opacity-85 transition-transform duration-[1600ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071812]/95 via-[#071812]/40 to-transparent" />
              <span className="absolute left-6 top-6 rounded-full bg-[#C89B3C] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                Featured story
              </span>
              <div className="max-w-3xl p-8 md:p-14">
                <p className="text-sm font-bold uppercase tracking-widest text-[#E5BA55]">{featuredPost.category}</p>
                <h3 className="mt-4 font-serif text-4xl font-medium leading-[1.08] md:text-6xl">
                  {featuredPost.title}
                </h3>
                <p className="mt-4 text-lg text-[#F7F3E9]/80">{featuredPost.excerpt}</p>
                <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/20 pt-6">
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-white/10">
                      <User className="h-5 w-5 text-[#E5BA55]" />
                    </span>
                    <div>
                      <p className="text-sm font-bold tracking-wide">{featuredPost.author}</p>
                      <p className="text-xs text-[#F7F3E9]/60">
                        {featuredPost.date} • {featuredPost.readTime}
                      </p>
                    </div>
                  </div>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[#C89B3C] text-white transition group-hover:bg-[#B58930]">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </article>

            {/* Grid */}
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#E6DED1] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(23,63,53,0.12)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#173F35]">
                    <img
                      src={cld(post.image, 'f_auto,q_auto,w_800')}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-[#F7F3E9] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#173F35] shadow-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-2xl font-medium leading-snug text-[#173F35] transition-colors group-hover:text-[#1E5A8A]">
                      {post.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 flex-1 text-[#352D27]/80">{post.excerpt}</p>
                    <div className="mt-6 flex items-center justify-between border-t border-[#E6DED1] pt-4 text-sm text-[#352D27]/70">
                      <span>{post.date}</span>
                      <span className="inline-flex items-center gap-1 font-bold uppercase tracking-wider text-[#173F35] transition-colors group-hover:text-[#1E5A8A]">
                        Read <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>

      <ArticleModal
        article={selectedPost ? toArticle(selectedPost) : null}
        onClose={() => setSelectedPost(null)}
        primaryLabel="Plan your expedition"
        onPrimary={() => {
          const title = selectedPost?.title;
          setSelectedPost(null);
          onOpenInquiry(`Inquiry inspired by: ${title}`);
        }}
        ctaTitle="Inspired by this story?"
        ctaText="Let our team craft an itinerary based on this experience."
      />
    </div>
  );
};
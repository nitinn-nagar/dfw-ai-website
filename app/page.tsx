'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import VantaHero from '@/components/ui/VantaHero'

const sponsors = [
  {
    name: "Worldlink",
    logo: <img src="https://media.licdn.com/dms/image/v2/D560BAQFniiBe8EoUgw/company-logo_200_200/B56ZU25DzsGUAI-/0/1740382682964/worldlink_us_logo?e=2147483647&v=beta&t=XUyUCR3efAdXaWMyiAGrIniHhM4EZrTSVYbbD0iI8E8" />, // swap with <img src="..." /> or an SVG
    info: "AI infrastructure partner powering our real-time data pipelines and model deployment.",
  },
  {
    name: "Coming Soon",
    logo: null,
    info: "Frontend cloud sponsor enabling fast, global deployments across all our web properties.",
  },
  {
    name: "Coming Soon",
    logo: null,
    info: "Payments partner providing seamless billing and financial infrastructure since day one.",
  },
  {
    name: "Coming Soon",
    logo: null,
    info: "Database & auth sponsor — open source backend powering our developer platform.",
  },
];

function SponsorCard({ sponsor, variants }: { sponsor: (typeof sponsors)[0]; variants: any }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      variants={variants}
      onClick={() => setFlipped((f) => !f)}
      className="relative w-[200px] h-[120px] cursor-pointer"
      style={{ perspective: "900px" }}
    >
      {/* Flip indicator */}
      <div
        className={`absolute bottom-1.5 right-2 flex items-center gap-1 z-10 pointer-events-none transition-opacity duration-200 ${flipped ? "opacity-60" : "opacity-0 group-hover:opacity-100"
          }`}
      >
        <svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="rgba(46,204,143,0.7)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 7c0-2.8 2.2-5 5-5 1.4 0 2.6.6 3.5 1.5" />
          <path d="M12 7c0 2.8-2.2 5-5 5-1.4 0-2.6-.6-3.5-1.5" />
          <polyline points="10.5,1 10.5,3.5 13,3.5" />
          <polyline points="3.5,10.5 3.5,13 1,13" />
        </svg>
        <span className="text-[8px] uppercase tracking-wider text-[#2ecc8f]/60 font-semibold">flip</span>
      </div>

      {/* Card body */}
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.45, 0.05, 0.55, 0.95] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-xl bg-[#111111] border border-[#222222] hover:border-[#2ecc8f]/30 transition-colors duration-200 flex flex-col items-center justify-center gap-2"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Logo slot: swap the div below with <img> when you have real logos */}
          <div className="w-15 h-15 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
            {sponsor.logo ?? (
              <span className="text-[11px] font-bold tracking-widest text-[#2ecc8f]/50">
                {sponsor.name.slice(0, 2).toUpperCase()}
              </span>
            )}
          </div>
          <span className="text-[12px] uppercase tracking-[0.1em] font-semibold text-[#888888]">
            {sponsor.name}
          </span>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-xl bg-[#0e1f17] border border-[#2ecc8f]/25 flex flex-col items-center justify-center gap-1.5 p-3 text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#2ecc8f]">
            {sponsor.name}
          </span>
          <p className="text-[9.5px] text-[#8ac8b0] leading-[1.5]">{sponsor.info}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const scrollVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <div className="bg-black">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/85 backdrop-blur-md border-b border-[#1a1a1a] h-16 flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <span className="font-sans font-black text-xl text-white">DFW</span>
          <span className="font-sans font-black text-xl text-[#2ecc8f]">AI BOOTCAMP</span>
        </div>

        {/* Center links - desktop only */}
        <div className="hidden md:flex items-center gap-10">
          {['AGENDA', 'SPEAKERS', 'SPONSORS', 'REGISTER'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs uppercase tracking-widest text-[#cccccc] hover:text-white transition-colors group relative"
            >
              {link}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2ecc8f] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Right CTA */}
        {/* <a
          href="#"
          className="hidden md:block bg-[#d4f53c] text-black font-bold uppercase tracking-widest text-xs px-5 py-2 hover:brightness-110 transition-all cursor-pointer"
        >
          SIGN UP FOR UPDATES
        </a> */}
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 pt-16">
          <button
            className="absolute top-6 right-6 text-white text-2xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            ×
          </button>
          {['AGENDA', 'SPEAKERS', 'SPONSORS', 'REGISTER'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-xl uppercase tracking-widest text-white hover:text-[#2ecc8f] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          {/* <a
            href="#"
            className="mt-4 bg-[#d4f53c] text-black font-bold uppercase tracking-widest text-xs px-5 py-2 hover:brightness-110 transition-all"
          >
            SIGN UP FOR UPDATES
          </a> */}
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-center pt-32">
        {/* Background image placeholder with overlay */}
        <div className="absolute inset-0 right-0 w-[55%] h-full overflow-hidden hidden md:block">
          <img
            src="/venue.jpg"
            alt="Venue"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, #000000 0%, transparent 40%)',
            }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="hidden md:block absolute right-0 top-0 w-[50%] h-full z-20">
          <VantaHero />
        </div>

        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative z-10 max-w-2xl pl-6 md:pl-16 mx-0"
        >
          {/* Micro label */}
          <motion.div
            variants={itemVariants}
            className="text-xs uppercase tracking-widest text-[#2ecc8f] font-sans font-bold mb-4"
          >
            Dallas, TX · August 2026
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="font-sans font-black uppercase text-5xl md:text-7xl leading-none tracking-tight text-white mb-4"
          >
            The Dallas Agentic AI Bootcamp
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="font-serif italic text-2xl text-[#2ecc8f] mb-10"
          >
            
          </motion.p>

          {/* Stat row */}
          <motion.div
            variants={itemVariants}
            className="flex items-center flex-wrap gap-6 mb-10"
          >
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg">100</span>
              <span className="text-xs uppercase tracking-widest text-[#666666]">
                Seats Available
              </span>
            </div>
            <div className="w-px h-8 bg-[#333333]"></div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg">2</span>
              <span className="text-xs uppercase tracking-widest text-[#666666]">
                Full Days
              </span>
            </div>
            <div className="w-px h-8 bg-[#333333]"></div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg">DALLAS</span>
              <span className="text-xs uppercase tracking-widest text-[#666666]">
                Venue
              </span>
            </div>
            <div className="w-px h-8 bg-[#333333]"></div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg">AUG 2026</span>
              <span className="text-xs uppercase tracking-widest text-[#666666]">
                Date
              </span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            variants={itemVariants}
            className="bg-[#d4f53c] text-black font-bold uppercase tracking-widest text-sm px-10 py-4 hover:brightness-110 transition-all cursor-pointer"
          >
            Reserve Your Seat →
          </motion.button>
        </motion.div>

        {/* Scroll hint chevron */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg
            className="w-6 h-6 text-[#2ecc8f]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>


      {/* SECTION 4 - EVENT DETAILS (Dallas + Venue) */}
      <section className="bg-[#080808] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            {/* Left column */}
            <motion.div variants={scrollVariants}>
              {/* City name */}
              <h2 className="font-sans font-black uppercase text-6xl md:text-8xl text-[#2ecc8f] mb-2">
                DALLAS
              </h2>

              {/* Date + venue */}
              <p className="font-serif italic text-xl text-[#d4d4d4] mb-8">
                August 2026 · Four Points By Sheraton, Dallas, TX
              </p>

              {/* Mini stat box */}
              <div className="border border-[#333333] rounded-xl px-6 py-4 mb-8 inline-flex justify-around gap-8">
                {[
                  { number: '100+', label: 'Attendees' },
                  { number: '4+', label: 'Speakers' },
                  { number: 'TBD', label: 'Sponsors' },
                ].map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <span className="text-[#2ecc8f] font-bold text-xl">
                      {stat.number}
                    </span>
                    <span className="text-[#666666] text-xs uppercase tracking-widest mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-base leading-relaxed text-[#d4d4d4] mb-8">
                The premier Agentic AI bootcamp comes to Dallas. Engineers,
                founders, and operators building the next generation of AI
                agents — all in one room, for two full days.
              </p>

              {/* Register button */}
              <button className="border border-[#d4f53c] text-[#d4f53c] font-bold uppercase tracking-widest text-sm px-8 py-3 hover:bg-[#d4f53c] hover:text-black transition-all">
                REGISTER
              </button>
            </motion.div>

            {/* Right column - venue image */}
            <motion.div
              variants={scrollVariants}
              className="w-full h-[420px] bg-[#1a1a1a] rounded-2xl overflow-hidden flex items-center justify-center text-[#666666]"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7Q3wQY3hM1LiHYZVenR1WKY12Q2cTR.png"
                alt="DFW AI Bootcamp Venue Hotel"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <div className="text-center hidden">Venue · Dallas, TX</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 - THE DFW AI BOOTCAMP PROMISE */}
      <section className="bg-black py-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="mx-4 md:mx-12 relative overflow-hidden rounded-2xl"
          style={{ minHeight: '500px' }}
        >
          {/* Video background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/lab.mp4" type="video/mp4" />
          </video>

          {/* Left-to-right fade overlay (left visible, right faded to black) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.9) 60%, rgba(0,0,0,1) 100%)',
            }}
          ></div>

          {/* Content shifted to right */}
          <motion.div
            variants={scrollVariants}
            className="relative z-10 h-full flex flex-col justify-center p-12 md:p-16 ml-auto md:w-[55%] lg:w-1/2"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-white mb-3">
              Hands-On Agent Development
            </h2>

            <p className="text-sm text-[#d4d4d4] mb-8 leading-relaxed">
              Build production-ready AI agents using LangGraph, handle multi-turn reasoning, implement memory systems, and deploy at scale.
            </p>

            {/* Three technical items - condensed */}
            <div className="space-y-5">
              {[
                {
                  label: 'ARCHITECTURE',
                  text: 'Multi-agent patterns, state management, and scalable inference pipelines.',
                },
                {
                  label: 'IMPLEMENTATION',
                  text: 'LangGraph workflows, tool calling, and production deployment patterns.',
                },
                {
                  label: 'DEPLOYMENT',
                  text: 'Monitoring, cost optimization, and real-world performance tuning.',
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#2ecc8f] mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm text-[#d4d4d4] leading-snug">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SKYLINE TRANSITION
      <SkylineTransition /> */}

      {/* SECTION 6 - AGENDA / TWO-DAY TIMELINE */}
      <section className="bg-[#080808] py-24">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.p
              variants={scrollVariants}
              className="text-xs uppercase tracking-widest text-[#2ecc8f] font-bold mb-4"
            >
              EVENT AGENDA
            </motion.p>
            <motion.h2
              variants={scrollVariants}
              className="font-sans font-black uppercase text-4xl md:text-5xl text-white tracking-tight mb-4"
            >
              Two Days. One Transformation.
            </motion.h2>
            <motion.p
              variants={scrollVariants}
              className="text-sm text-[#666666]"
            >
              August 2026 · Dallas, TX · 9AM–5PM Both Days
            </motion.p>
          </motion.div>

          {/* Two column timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {/* Day 1 */}
            <motion.div variants={scrollVariants}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-8 border-b border-[#222222] pb-4">
                Day 1 — Foundations
              </h3>
              <div className="relative pl-8 space-y-6">
                <div className="absolute left-0 top-0 w-px h-full bg-[#222222]"></div>
                {[
                  '09:00 AM · Welcome & Kickoff',
                  '10:00 AM · Intro to AI Agents & Agentic Frameworks',
                  '11:30 AM · Framework Comparison: LangChain vs LangGraph vs CrewAI',
                  '12:30 PM · Lunch Break',
                  '01:30 PM · LangGraph Deep Dive (Hands-On Lab)',
                  '03:30 PM · LangGraph Demo & Live Q&A',
                  '04:30 PM · Day 1 Reflection + Networking',
                ].map((item, idx) => {
                  const [time, ...titleParts] = item.split(' · ')
                  return (
                    <div key={idx} className="relative">
                      <div className="absolute left-[-12px] top-1 w-2 h-2 rounded-full bg-[#2ecc8f]"></div>
                      <p className="text-xs font-bold text-[#2ecc8f] uppercase tracking-widest mb-0.5">
                        {time}
                      </p>
                      <p className="text-sm font-semibold text-white">
                        {titleParts.join(' · ')}
                      </p>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* Day 2 */}
            <motion.div variants={scrollVariants}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-8 border-b border-[#222222] pb-4">
                Day 2 — Build & Deploy
              </h3>
              <div className="relative pl-8 space-y-6">
                <div className="absolute left-0 top-0 w-px h-full bg-[#222222]"></div>
                {[
                  '09:00 AM · Recap & Day 2 Objectives',
                  '10:00 AM · Multi-Agent Architectures',
                  '11:30 AM · Security, Safety & Guardrails in Agentic Systems',
                  '12:30 PM · Lunch Break',
                  '01:30 PM · Build Your Own Agent (Workshop)',
                  '03:30 PM · Deployment, Monitoring & Production Patterns',
                  '04:30 PM · Final Showcase, Certificates & Closing',
                ].map((item, idx) => {
                  const [time, ...titleParts] = item.split(' · ')
                  return (
                    <div key={idx} className="relative">
                      <div className="absolute left-[-12px] top-1 w-2 h-2 rounded-full bg-[#2ecc8f]"></div>
                      <p className="text-xs font-bold text-[#2ecc8f] uppercase tracking-widest mb-0.5">
                        {time}
                      </p>
                      <p className="text-sm font-semibold text-white">
                        {titleParts.join(' · ')}
                      </p>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 8 — SPEAKERS */}
      <section id="speakers" className="bg-[#080808] py-24">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
            className="text-center mb-14"
          >
            <motion.p
              variants={scrollVariants}
              className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2ecc8f] mb-3"
            >
              SPEAKERS
            </motion.p>
            <motion.h2
              variants={scrollVariants}
              className="font-serif text-4xl md:text-5xl font-normal text-white mb-4"
            >
              Learn from the People Building It
            </motion.h2>
            <motion.p
              variants={scrollVariants}
              className="text-sm text-[#666666] text-center max-w-2xl mx-auto"
            >
              Speaker lineup dropping soon. Follow us for announcements.
            </motion.p>
          </motion.div>

          {/* Speaker card grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto mt-14"
          >
            {[0, 1, 2, 3].map((idx) => (
              <motion.div
                key={idx}
                variants={scrollVariants}
                className="bg-[#111111] border border-[#222222] hover:border-[#2ecc8f]/40 rounded-2xl p-4 md:p-6 flex flex-col items-center text-center cursor-pointer hover:scale-[1.02] transition-all duration-200 ease-out group"
              >
                {/* Avatar block */}
                <div className="w-16 h-16 rounded-xl bg-[#1c1c1c] border border-[#2a2a2a] mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <span className="text-2xl font-bold text-[#2ecc8f]">?</span>
                </div>

                {/* Name */}
                <p className="text-sm font-semibold text-white mb-1">
                  Coming Soon
                </p>

                {/* Title / Affiliation */}
                <p className="text-xs text-[#555555] mb-4">
                  Speaker · DFW AI Bootcamp
                </p>

                {/* Topic tag */}
                <span className="rounded-full border border-[#2ecc8f]/25 text-[#2ecc8f] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider">
                  Agentic AI
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Below-grid notice */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={scrollVariants}
            className="flex flex-col items-center gap-4 mt-12"
          >
            <p className="text-sm text-[#555555]">
              Speaker announcements coming soon.
            </p>
            <button className="border border-[#2ecc8f] text-[#2ecc8f] bg-transparent font-bold text-xs uppercase tracking-widest px-7 py-3 hover:bg-[#2ecc8f] hover:text-black transition-all duration-200 cursor-pointer">
              NOTIFY ME →
            </button>
          </motion.div>
        </div>
      </section>



      {/* SECTION 10 — SPONSORS & PARTNERS */}
      <section id="sponsors" className="bg-[#080808] py-24">
        <div className="max-w-5xl mx-auto px-6">

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
            className="text-center mb-14"
          >
            <motion.p variants={scrollVariants} className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#2ecc8f] mb-3">
              SPONSORS & PARTNERS
            </motion.p>
            <motion.h2 variants={scrollVariants} className="font-serif text-4xl md:text-5xl font-normal text-white mb-4">
              Backed by the Best
            </motion.h2>
            <motion.p variants={scrollVariants} className="text-sm text-[#666666]">
              Sponsorship opportunities are open.
            </motion.p>
          </motion.div>

          {/* Sponsor Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
            className="flex flex-wrap justify-center items-center gap-5 mb-12"
          >
            {sponsors.map((sponsor, idx) => (
              <SponsorCard key={idx} sponsor={sponsor} variants={scrollVariants} />
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={scrollVariants}
            className="flex justify-center"
          >
          </motion.div>

        </div>
      </section>




      {/* SECTION 9 — FROM THE DFW STAGE */}
      <section id="stage" className="bg-black py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
            className="text-center mb-14"
          >
            <motion.h2
              variants={scrollVariants}
              className="font-serif text-4xl md:text-5xl font-normal text-white mb-4"
            >
              From the DFW Stage
            </motion.h2>
            <motion.div
              variants={scrollVariants}
              className="max-w-xl mx-auto text-center"
            >
              <p className="text-base text-[#d4d4d4] leading-relaxed mb-1">
                The conversation doesn&apos;t stop when the bootcamp does.
              </p>
              <p className="text-base text-[#d4d4d4] leading-relaxed">
                Explore content and coverage from the DFW Tech Space.
              </p>
            </motion.div>
          </motion.div>

          {/* Horizontal scroll card row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={scrollVariants}
            className="w-full overflow-x-auto no-scrollbar"
            style={{
              WebkitScrollbarDisplay: 'none',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
            <div className="flex flex-nowrap gap-5 px-6 pb-4">
              {[
                {
                  label: 'WORKSHOP MATERIALS',
                  title: 'Session slides, labs, and reference guides',
                },
                {
                  label: 'STAGE CONTENT',
                  title: 'Talks and live demos from Day 1 & Day 2',
                },
                {
                  label: 'EVENT PHOTOS',
                  title: 'Captures from the bootcamp floor',
                },
                {
                  label: 'ANNOUNCEMENTS',
                  title: 'Speaker drops, agenda updates, and news',
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="min-w-[300px] md:min-w-[340px] bg-[#111111] rounded-2xl border border-[#222222] overflow-hidden cursor-pointer flex-shrink-0 hover:border-[#2ecc8f]/40 transition-all duration-200"
                >
                  {/* Image placeholder */}
                  <div className="h-[200px] w-full bg-[#1a1a1a] flex items-center justify-center text-[#333333] text-sm">
                    [Media Placeholder]
                  </div>

                  {/* Text area */}
                  <div className="p-5 pt-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#2ecc8f] mb-2">
                      {card.label}
                    </p>
                    <h3 className="text-sm font-semibold text-white leading-snug">
                      {card.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 10 — SPONSORS & PARTNERS */}
      <section id="sponsors" className="bg-[#080808] py-24">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
            className="text-center mb-14"
          >
            <motion.p
              variants={scrollVariants}
              className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#2ecc8f] mb-3"
            >
              SPONSORS & PARTNERS
            </motion.p>
            <motion.h2
              variants={scrollVariants}
              className="font-serif text-4xl md:text-5xl font-normal text-white mb-4"
            >
              Backed by the Best
            </motion.h2>
            <motion.p
              variants={scrollVariants}
              className="text-sm text-[#666666]"
            >
              Sponsorship opportunities are open.
            </motion.p>
          </motion.div>

          {/* Logo row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.1,
                },
              },
            }}
            className="flex flex-wrap justify-center items-center gap-5 mb-12"
          >
            {[0, 1, 2, 3, 4].map((idx) => (
              <motion.div
                key={idx}
                variants={scrollVariants}
                className="w-[156px] h-[72px] rounded-xl bg-[#111111] border border-[#222222] flex items-center justify-center text-[10px] uppercase tracking-widest text-[#333333] cursor-pointer hover:border-[#2ecc8f]/30 transition-all duration-200"
              >
                Your Logo
              </motion.div>
            ))}
          </motion.div>

          {/* Sponsor button */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={scrollVariants}
            className="flex justify-center"
          >
            <button className="border border-[#2ecc8f] text-[#2ecc8f] bg-transparent font-bold text-xs uppercase tracking-widest px-8 py-4 hover:bg-[#2ecc8f] hover:text-black transition-all duration-200 cursor-pointer">
              BECOME A SPONSOR →
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 11 — REGISTRATION / FINAL CTA */}
      <section id="register" className="bg-black py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="max-w-2xl mx-auto px-6 text-center"
        >
          {/* Micro label */}
          <motion.p
            variants={scrollVariants}
            className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2ecc8f] mb-8"
          >
            DALLAS, TX · AUGUST 2025
          </motion.p>

          {/* Main headline */}
          <motion.h2
            variants={scrollVariants}
            className="font-sans font-black uppercase text-5xl md:text-7xl text-white tracking-tight leading-none mb-6"
          >
            SEATS ARE LIMITED.
          </motion.h2>

          {/* Sub headline */}
          <motion.p
            variants={scrollVariants}
            className="font-serif italic text-xl md:text-2xl text-[#d4d4d4] mb-12"
          >
            100 spots. Two days. One city.
          </motion.p>

          {/* Primary CTA button */}
          <motion.button
            variants={scrollVariants}
            className="bg-[#d4f53c] text-black font-black text-sm md:text-base uppercase tracking-widest px-14 py-5 hover:brightness-[1.08] transition-all duration-200 cursor-pointer inline-block mb-6"
          >
            REGISTER NOW →
          </motion.button>

          {/* Note below button */}
          <motion.p
            variants={scrollVariants}
            className="text-xs text-[#555555] mb-10"
          >
            Registration opens soon. Sign up now to be first.
          </motion.p>

          {/* Email capture form */}
          <motion.div
            variants={scrollVariants}
            className="flex max-w-md mx-auto mb-6"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-[#111111] border border-[#222222] border-r-0 px-4 py-3 text-sm text-white placeholder-[#444444] focus:outline-none focus:border-[#2ecc8f]"
            />
            <button className="bg-[#2ecc8f] text-black font-bold text-xs uppercase tracking-widest px-6 py-3 hover:brightness-[1.05] transition-all cursor-pointer">
              NOTIFY ME
            </button>
          </motion.div>

          {/* Fine print */}
          {/* <motion.p
            variants={scrollVariants}
            className="text-[11px] text-[#3a3a3a]"
          >
            By signing up you agree to receive updates about DFW AI Bootcamp.
            Unsubscribe anytime.  
          </motion.p> */}
        </motion.div>
      </section>

      {/* SECTION 12 — NEWSLETTER BANNER */}


      {/* SECTION 13 — FOOTER */}
      <footer className="bg-black border-t border-[#1a1a1a] pt-12 pb-6">
        <div className="max-w-6xl mx-auto px-6">
          {/* Upper footer row */}
          <div className="flex justify-between items-start mb-10">
            {/* Logo */}
            <div className="flex items-center gap-0">
              <span className="font-sans font-bold text-xl text-white">DFW</span>
              <span className="font-sans font-bold text-xl text-[#2ecc8f]">
                AI BOOTCAMP
              </span>
            </div>

            {/* Right: Stacked links */}
            <div className="text-right space-y-2">
              <a
                href="#"
                className="block text-sm font-semibold text-white hover:text-[#2ecc8f] transition-colors"
              >
                ABOUT ↗
              </a>
              <a
                href="#"
                className="block text-sm text-[#666666] hover:text-white transition-colors"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="block text-sm text-[#666666] hover:text-white transition-colors"
              >
                Resources
              </a>
            </div>
          </div>

          {/* Lower footer row */}
          <div className="border-t border-[#1a1a1a] mt-8 pt-6 flex justify-between items-center flex-wrap gap-4">
            {/* Left: Nav links */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {['Contact us', 'Privacy Policy', 'Terms of Attendance', 'Terms of Service'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-[#555555] hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Right: Social icons */}
            <div className="flex gap-4">
              {/* LinkedIn */}
              <a
                href="#"
                className="w-5 h-5 text-[#555555] hover:text-white transition-colors cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.5v8.5h2.5v-4.34c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.34h2.5M6.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 9.5h-3v-8.5h3v8.5z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-5 h-5 text-[#555555] hover:text-white transition-colors cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2m-.5 2c-2.1 0-3.8 1.7-3.8 3.8v8.4c0 2.1 1.7 3.8 3.8 3.8h8.4c2.1 0 3.8-1.7 3.8-3.8V7.8c0-2.1-1.7-3.8-3.8-3.8H7.3m9.2 1.8a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-4.5 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="#"
                className="w-5 h-5 text-[#555555] hover:text-white transition-colors cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.807-5.95 6.807H2.423l7.723-8.835L1.029 2.25h6.847l4.713 6.231 5.579-6.231h.011Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom line */}
          <div className="border-t border-[#111111] mt-6 pt-5 text-center">
            <p className="text-xs text-[#333333]">
              © 2025 DFW AI Bootcamp · Dallas, TX · contact@dfwaibootcamp.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

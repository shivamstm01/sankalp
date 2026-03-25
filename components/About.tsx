"use client";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { motion } from "framer-motion";

export default function About() {
  const { title, vision, mission, banner } = siteContent.about;

  const fadeInUp = {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.45, ease: "easeOut" }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 }
    }
  };

  const itemReveal = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const lineVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: { opacity: 1, width: "4.5rem", transition: { duration: 0.45, ease: "easeOut", delay: 0.08 } }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-12 lg:py-16 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-[1560px] mx-auto space-y-10 lg:space-y-14">
        
        {/* Section Heading */}
        <motion.div 
          {...fadeInUp}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-[46px] font-[900] tracking-tighter leading-tight text-[#1a1a1a]">
            {title.black} <span className="text-[#008a5e]">{title.green}</span>
          </h2>
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h-1 bg-[#008a5e] rounded-full mx-auto mt-4"
          ></motion.div>
        </motion.div>

        {/* Vision & Sannati Highlight (Dual Card Layout) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {/* Vision Card */}
          <motion.div 
            variants={itemReveal}
            whileHover={{ y: -6 }}
            className="bg-[linear-gradient(180deg,#f3fbf8_0%,#ffffff_100%)] p-6 lg:p-7 rounded-[2rem] space-y-5 shadow-[0_18px_50px_rgba(15,23,42,0.05)] border border-[#008a5e]/10"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              <h3 className="text-2xl lg:text-3xl font-black text-[#008a5e]">{vision.title}</h3>
              <div className="space-y-2.5">
                {vision.paragraphs.map((p, i) => (
                  <motion.p key={i} variants={paragraphVariants} className="text-gray-600 text-[15px] lg:text-[16px] font-medium leading-[1.75] opacity-90">
                    {p}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemReveal}
              whileHover={{ y: -4 }}
              className="relative rounded-[1.65rem] overflow-hidden bg-[linear-gradient(135deg,#033b2d_0%,#06604a_55%,#0a7a5c_100%)] shadow-[0_22px_50px_rgba(15,23,42,0.14)]"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1.08fr_0.92fr] items-stretch">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative min-h-[240px] lg:min-h-[270px]"
                >
                  <Image
                    src="/images/rrr.jpeg"
                    alt="Sannati Fertility and Wellness Center led by Dr. Santrupti Katti"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#02261d]/35 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02261d]/75 via-[#02261d]/15 to-transparent"></div>
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.12, duration: 0.4 }}
                    className="absolute left-4 bottom-4 right-4 lg:left-5 lg:bottom-5 lg:right-5"
                  >
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[#d1fae5] font-semibold mb-2">New Division</p>
                    <p className="text-white text-lg lg:text-[24px] font-semibold leading-tight max-w-[320px]">
                      Sannati Fertility and Wellness Center
                    </p>
                  </motion.div>
                </motion.div>

                <div className="relative p-5 lg:p-6 flex flex-col justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_34%)]"></div>
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative space-y-4"
                  >
                    <motion.div variants={itemReveal} className="inline-flex self-start items-center rounded-full bg-white/12 px-3.5 py-1.5 text-white text-[12px] font-semibold border border-white/15 backdrop-blur-sm">
                      Led by Dr. Santrupti Katti
                    </motion.div>
                    <motion.h4 variants={itemReveal} className="text-white text-[20px] lg:text-[24px] font-semibold leading-[1.18] max-w-[340px]">
                      A focused new chapter in fertility, women&apos;s wellness, and compassionate holistic care.
                    </motion.h4>
                    <motion.p variants={itemReveal} className="text-white/85 text-[13px] lg:text-[14px] leading-[1.75] max-w-[380px]">
                      Sannati Fertility and Wellness Center is a new division of Sankalpa Ayurveda Hospital and Research Center, offering dedicated care under the leadership of Dr. Santrupti Katti.
                    </motion.p>
                    <motion.div variants={itemReveal} className="flex flex-wrap gap-2 pt-1">
                      {["Fertility Care", "Women's Wellness", "Holistic Guidance"].map((item, idx) => (
                        <motion.span
                          key={item}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.18 + idx * 0.08, duration: 0.25 }}
                          whileHover={{ y: -2 }}
                          className="rounded-full bg-white text-[#0b6b4b] px-3 py-1.5 text-[11px] lg:text-[12px] font-semibold shadow-[0_10px_18px_rgba(0,0,0,0.12)]"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Sannati Wellness Sub-card (Figma Mastery) */}
            <motion.div 
              variants={itemReveal}
              whileHover={{ y: -4 }}
              className="bg-[#fcfffe] p-5 lg:p-6 rounded-[1.5rem] shadow-[0_18px_42px_rgba(15,23,42,0.08)] border border-[#008a5e]/10 space-y-4"
            >
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
              <div className="flex items-center gap-3">
                <motion.div variants={itemReveal} className="w-10 h-10 rounded-2xl bg-[#e6f7f1] text-[#0b6b4b] flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21c4.97-4.35 8-7.35 8-11a4 4 0 0 0-7.17-2.49L12 8.5l-.83-.99A4 4 0 0 0 4 10c0 3.65 3.03 6.65 8 11Z"/>
                  </svg>
                </motion.div>
                <motion.h4 variants={itemReveal} className="text-lg lg:text-xl font-semibold text-[#1a1a1a] leading-tight">
                  {vision.highlight.title}
                </motion.h4>
              </div>
              <ul className="space-y-3">
                {vision.highlight.points.map((pt, i) => (
                  <motion.li key={i} variants={itemReveal} whileHover={{ x: 3 }} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#e8faf3] text-[#0b6b4b] flex items-center justify-center text-[11px] font-semibold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-gray-600 font-medium text-sm lg:text-[14px] leading-[1.65]">{pt}</span>
                  </motion.li>
                ))}
              </ul>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Mission Card - Figma Typography Focus */}
          <motion.div 
            variants={itemReveal}
            className="p-2 lg:p-4 flex flex-col justify-center space-y-6"
          >
            <motion.h3 variants={itemReveal} className="text-2xl lg:text-[34px] font-black text-[#1a1a1a] leading-tight border-l-4 border-[#008a5e] pl-5">
              {mission.title}
            </motion.h3>
            <ul className="space-y-4 lg:space-y-4.5">
              {mission.points.map((pt, i) => (
                <motion.li 
                  key={i} 
                  variants={itemReveal}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 group"
                >
                  <span className="w-8 h-8 bg-[#008a5e]/10 text-[#008a5e] rounded-lg flex items-center justify-center text-sm font-black shrink-0 group-hover:bg-[#008a5e] group-hover:text-white transition-colors duration-300">
                    {i + 1}
                  </span>
                  <span className="text-gray-500 text-[15px] lg:text-[16px] font-medium leading-[1.55]">
                    {pt}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Figma Dark Green Brand Banner (Animated) */}
        <motion.div 
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[linear-gradient(135deg,#02382b_0%,#05533f_54%,#0b6b4b_100%)] p-6 lg:p-10 rounded-[2rem] text-center space-y-6 relative overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]"
        >
          {/* Heart Accent (Figma Style) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none group-hover:scale-110 transition-transform duration-1000">
            <svg width="400" height="400" fill="#facc15" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </div>

          <div className="relative z-10 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.35 }}
              className="flex justify-center mb-2"
            >
               <svg className="text-[#facc15] w-14 h-14 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
               </svg>
            </motion.div>
            <div className="space-y-3 max-w-4xl mx-auto">
               {banner.map((line, idx) => (
                 <motion.p 
                   key={idx} 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.12, duration: 0.35 }}
                   className={`text-lg lg:text-[26px] font-black leading-tight tracking-tight ${idx === 1 ? 'text-[#facc15]' : idx === 2 ? 'opacity-80' : 'text-white'}`}
                 >
                   {line}
                 </motion.p>
               ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

"use client";
import { siteContent } from "@/data/siteContent";
import { motion } from "framer-motion";

const themeStyles: Record<string, string> = {
  green: "text-emerald-600",
  red: "text-red-600",
  orange: "text-orange-600",
  pink: "text-pink-600",
  blue: "text-blue-600",
  cyan: "text-cyan-600",
  purple: "text-purple-600",
  lime: "text-lime-600",
};

const IconMap: Record<string, React.ReactNode> = {
  "heart-pulse": (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /><path d="M3.22 12H9.5l1.5-3 2 6 1.5-3h7.22" /></svg>),
   baby: (<svg width="32" height="32" viewBox="0 0 24 24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12h.01" /><path d="M15 12h.01" /><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" /><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 1.1l-.8.8s-1.2-1-2.7-1a7.4 7.4 0 0 0-3.4.8c-2.4 1.5-3.1 4.7-2.1 7.2.9 2.1 3.2 3.8 5.5 4 1.3.1 2.6-.1 3.6-.3" /><path d="M12 3c2 0 3.5 1.1 3.5 1.1l-.8.8s-1.2-1-2.7-1" /></svg>),
  scale: (
  <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h18" />
    </svg>
  ),
  sparkles: (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3 1.91 5.82L21 10.73l-5.18 4.23L17.09 21 12 17.27 6.91 21l1.27-6.04L3 10.73l7.09-1.91L12 3Z" />
    </svg>
  ),
  activity: (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  "circle-dot": (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  ),
  bone: (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 10c.7-.7 1.69-1 2.5-1a2.5 2.5 0 1 1 0 5c-.81 0-1.8-.3-2.5-1" />
      <path d="M8.31 15.69a2.5 2.5 0 1 1-3.32-3.32" />
      <path d="M4.99 8.31a2.5 2.5 0 1 1 3.32 3.32" />
      <path d="M15.5 14c0 .81.3 1.8 1 2.5a2.5 2.5 0 1 1-5 0c0-.81.3-1.8 1-2.5" />
      <path d="M7 14c-.7.7-1.69 1-2.5 1a2.5 2.5 0 1 1 0-5c.81 0 1.8.3 2.5 1" />
      <path d="m16.5 9.5-7 7" />
    </svg>
  ),
  brain: (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z" />
    </svg>
  ),
  wind: (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7A2.5 2.5 0 1 1 20 12H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  ),
  eye: (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  star: (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  zap: (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
};

export default function Treatments() {
  const { title, subtitle, list, holisticBanner } = siteContent.treatments;

  if (!holisticBanner) return null;

  return (
    <section
      id="treatments"
      className="py-16 lg:py-24 px-4 md:px-8 bg-[#f8fcfb] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-[46px] font-[700] tracking-tight leading-tight">
            <span className="text-[#1a1a1a]">{title.black} </span>
            <span className="text-[#008a5e] relative inline-block">
              {title.green}
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#008a5e] rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm lg:text-base font-medium mt-6 leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        
        {/* Treatments Grid - Clean Modern Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 lg:mb-20"
        >
          {list.map((item, idx) => {
            const style =
              themeStyles[item.theme || "green"] || themeStyles.green;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-200 hover:border-current transition-all duration-300 flex flex-col gap-5 ${style}`}
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 group-hover:bg-current/10 transition-all duration-300">
                  <div className="text-current group-hover:scale-110 transition-transform duration-300">
                    {IconMap[item.icon]}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-gray-800 group-hover:text-current transition-colors duration-300">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Holistic Approach Banner - Professional Look */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-10 lg:p-16 rounded-3xl border border-emerald-100 shadow-xl"
        >
          {/* Center Icon */}
          <div className="flex justify-center mb-10">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="bg-emerald-50 w-20 h-20 lg:w-24 lg:h-24 rounded-3xl flex items-center justify-center border border-emerald-200 shadow-inner"
            >
              <svg
                width="52"
                height="52"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
                <path d="m8.5 8.5 7 7" />
              </svg>
            </motion.div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
              {holisticBanner.title}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
              {holisticBanner.description}
            </p>

            {/* Benefits List */}
            <div className="flex justify-between items-center gap-2 w-full cursor-pointer">
  {holisticBanner.points.map((point, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="flex items-center justify-center gap-2 
      bg-white px-3 py-2 
      rounded-full 
      border border-emerald-100 
      hover:border-emerald-500 hover:bg-emerald-50 
      transition-all duration-300 
      text-xs flex-1 min-w-0"
    >
      {/* Icon */}
      <div className="text-emerald-500 shrink-0">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      {/* Text */}
      <span className="font-[700] text-gray-700 truncate">
        {point}
      </span>
    </motion.div>
  ))}
</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

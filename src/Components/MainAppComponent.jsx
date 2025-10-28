import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Heart, MapPin, Calendar, Play, Pause } from 'lucide-react';



const memories = [
  {
    date: "Jan 2023",
    location: "Pune, India",
    image: "public\Images\Image1.jpeg",
    note: "The day we first met ❤️",
  },
  {
    date: "Mar 2023",
    location: "Goa",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    note: "Our first trip together 🌊",
  },
  {
    date: "Jun 2023",
    location: "Lonavala",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    note: "Adventures in the mountains 🏔️",
  },
  {
    date: "Oct 2023",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    note: "Our favorite coffee place ☕",
  },
  {
    date: "Feb 2024",
    location: "Pune",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    note: "Celebrating our love 💝",
  },
  {
    date: "Aug 2024",
    location: "Alibaug",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    note: "Sunset walks on the beach 🌅",
  },
];


export default function MainAppComponent({ memory, index }) {

    const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const isEven = index % 2 === 0;
  
  return (
     <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Image */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="w-full md:w-1/2"
      >
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={memory.image}
            alt={memory.note}
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      </motion.div>

      {/* Content */}
      <div className={`w-full md:w-1/2 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 relative"
        >
          <div className="absolute -top-4 left-8 bg-pink-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
            <Heart className="w-4 h-4 fill-current" />
            <span className="font-semibold text-sm">Memory #{index + 1}</span>
          </div>
          
          <div className="mt-4 space-y-4">
            <div className="flex items-center gap-2 text-pink-600">
              <Calendar className="w-5 h-5" />
              <span className="font-semibold text-lg">{memory.date}</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-5 h-5" />
              <span className="text-base">{memory.location}</span>
            </div>
            
            <p className="text-gray-800 text-lg leading-relaxed italic">
              "{memory.note}"
            </p>
          </div>
          
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -bottom-3 -right-3 text-pink-300 opacity-30"
          >
            <Heart className="w-16 h-16 fill-current" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// import logo from './logo.svg';
import './App.css';
// import MainAppComponent from './Components/MainAppComponent';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import TimelineItem from './Components/TimelineItem';

const memories = [
  {
    // date: "Jan 2023",
    location: "Mumbai, India",
    image: "Images/Image2.jpeg",
    note: "The day we first met ❤️",
  },
  {
    // date: "Mar 2023",
    location: "Gaurai Beach, Mumbai",
    image: "Images/Image11.jpeg",
    note: "Our first trip together 🌊",
  },
  {
    // date: "Jun 2023",
    location: "Gaurai Beach, Mumbai",
    image: "Images/Image1.jpeg",
    note: "Some Cutie photo 😄",
  },
  {
    // date: "Oct 2023",
    location: "Gaurai Beach, Mumbai",
    image: "Images/Image4.jpeg",
    note: "Some weired photo 😄",
  },
  {
    // date: "Feb 2024",
    location: "Gaurai Beach, Mumbai",
    image: "Images/Image5.jpeg",
    note: "Cutie 💝",
  },
  {
    // date: "Aug 2024",
    location: "Gaurai Beach, Mumbai",
    image: "Images/Image3.jpeg",
    note: "Sunset walks on the beach 🌅",
  },
  {
    // date: "Aug 2024",
    location: "Pune",
    image: "Images/Image12.jpeg",
    note: "Some Quality time 😴",
  },
  {
    // date: "Aug 2024",
    location: "Pune",
    image: "Images/Image7.jpeg",
    note: "Some weird things 😂",
  },
  {
    // date: "Aug 2024",
    location: "Pune",
    image: "Images/Image8.jpeg",
    note: "More weird things 😂",
  },
  {
    // date: "Aug 2024",
    location: "Pune",
    image: "Images/Image10.jpeg",
    note: "Coffee Time ☕",
  },
  {
    // date: "Aug 2024",
    location: "Pune",
    image: "Images/Image9.jpeg",
    note: "Cutie Before Sleep 😴",
  },
];


function App() {
//  const [isPlaying, setIsPlaying] = useState(false);
  const timelineRef = useRef(null);

  // const playStory = () => {
  //   setIsPlaying(true);
  //   const timeline = timelineRef.current;
  //   if (!timeline) return;

  //   let currentScroll = window.scrollY;
  //   const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  //   const scrollStep = () => {
  //     if (currentScroll >= maxScroll || !isPlaying) {
  //       setIsPlaying(false);
  //       return;
  //     }
  //     currentScroll += 2;
  //     window.scrollTo({ top: currentScroll, behavior: 'instant' });
  //     requestAnimationFrame(scrollStep);
  //   };
  //   scrollStep();
  // };

  // const pauseStory = () => {
  //   setIsPlaying(false);
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  //     if (scrollPercent > 98) {
  //       setIsPlaying(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-50 to-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Floating hearts background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-pink-300 opacity-20"
              initial={{ y: '100vh', x: `${Math.random() * 100}%` }}
              animate={{ y: '-100vh' }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            >
              <Heart className="w-8 h-8 fill-current" />
            </motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-pink-600 mb-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💞 Our Journey 💞
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Every moment with you is a beautiful memory worth cherishing forever
          </motion.p>

          {/* <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={isPlaying ? pauseStory : playStory}
            className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl flex items-center gap-3 mx-auto transition-colors"
          >
            {isPlaying ? (
              <>
                <Pause className="w-6 h-6" />
                Pause Story
              </>
            ) : (
              <>
                <Play className="w-6 h-6" />
                Play Our Story
              </>
            )}
          </motion.button> */}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, y: { duration: 1.5, repeat: Infinity } }}
          className="absolute bottom-8 text-pink-400"
        >
          <div className="text-center">
            <p className="text-sm mb-2">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-pink-400 rounded-full mx-auto flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-pink-400 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div ref={timelineRef} className="max-w-6xl mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-pink-600 mb-20"
        >
          Our Beautiful Memories
        </motion.h2>

        {memories.map((memory, index) => (
          <TimelineItem key={index} memory={memory} index={index} />
        ))}

        {/* Ending Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-32 mb-20"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="w-24 h-24 text-pink-500 fill-current mx-auto mb-6" />
          </motion.div>
          <h3 className="text-4xl font-bold text-pink-600 mb-4">
            To Many More Memories Together
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every day with you is a new adventure, and I can't wait to create countless more beautiful moments together. I love you! ❤️
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default App;

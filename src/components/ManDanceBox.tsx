import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift } from 'lucide-react';

const ManDanceBox: React.FC = () => {
  const [showGiftBox, setShowGiftBox] = useState(false);

  useEffect(() => {
    // Show gift box after character animation completes
    const timer = setTimeout(() => {
      setShowGiftBox(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-8 mb-12">
      {/* Dancing Man Character */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-8xl"
      >
        <motion.div
          animate={{
            rotate: [0, -10, 10, -10, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          🕺
        </motion.div>
      </motion.div>

      {/* Welcome Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome!
        </h1>
        <p className="text-xl md:text-2xl text-blue-100">
          I have something special for you...
        </p>
      </motion.div>

      {/* Gift Box Reveal */}
      <AnimatePresence>
        {showGiftBox && (
          <motion.div
            initial={{ scale: 0, opacity: 0, rotateY: 180 }}
            animate={{
              scale: 1,
              opacity: 1,
              rotateY: 0,
            }}
            transition={{
              duration: 1.2,
              scale: { type: "spring", stiffness: 200, damping: 10 },
            }}
            className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-2xl"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center space-y-4"
            >
              <Gift className="w-16 h-16 text-yellow-300" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                A Gift for You!
              </h2>
              <p className="text-blue-100 text-center max-w-md">
                Connect with us below and let's start something amazing together!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ManDanceBox;
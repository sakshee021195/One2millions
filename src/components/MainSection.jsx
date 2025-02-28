import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCoins, FaStar } from "react-icons/fa";

const MainSection = () => {
  const navigate = useNavigate();

  const denominations = [
    { value: 1, label: "₹1", color: "from-teal-400 to-emerald-600", border: "border-emerald-500" },
    { value: 5, label: "₹5", color: "from-purple-400 to-indigo-600", border: "border-indigo-500" },
    { value: 10, label: "₹10", color: "from-orange-400 to-red-600", border: "border-red-500" }
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white p-6 overflow-hidden">
      {/* Animated background elements */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-20"
          initial={{ 
            top: `${Math.random() * 100}%`, 
            left: `${Math.random() * 100}%`,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            top: `${Math.random() * 100}%`, 
            left: `${Math.random() * 100}%` 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: Math.random() * 20 + 10,
            repeatType: "reverse"
          }}
        >
          <FaStar className="text-yellow-300" size={20} />
        </motion.div>
      ))}

      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
          Lucky Lottery
        </h1>
        <p className="text-gray-300 max-w-md mx-auto">
          Choose your lucky ticket denomination and take a chance at winning big prizes!
        </p>
      </motion.div>

      {/* Coins Container */}
      <div className="flex flex-wrap justify-center gap-10 max-w-4xl">
        {denominations.map((denom, index) => (
          <motion.div
            key={denom.value}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className={`absolute inset-0 rounded-full blur-md ${denom.color.split(' ')[0]} opacity-50 group-hover:opacity-70 transition-opacity`}></div>
            
            <motion.button
              whileHover={{ 
                scale: 1.1,
                rotate: [-2, 2, -2],
                transition: { rotate: { repeat: Infinity, duration: 0.6 } }
              }}
              whileTap={{ scale: 0.95 }}
              className={`relative z-10 w-36 h-36 flex flex-col items-center justify-center rounded-full shadow-xl 
                      bg-gradient-to-b ${denom.color} border-4 ${denom.border}
                      text-white font-bold transition`}
              onClick={() => navigate(`/payment/${denom.value}`)}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-2 rounded-full bg-white/20 backdrop-blur-sm">
                <FaCoins className="text-yellow-300 text-2xl" />
              </div>
              <span className="text-3xl font-extrabold">{denom.label}</span>
              <span className="text-xs mt-1 font-medium">LOTTERY TICKET</span>
            </motion.button>

            {/* Prize indicator */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + (index * 0.2), type: "spring" }}
              className="absolute -top-4 -right-4 bg-yellow-500 text-black font-bold text-xs py-1 px-2 rounded-full flex items-center gap-1 shadow-lg"
            >
              <span>Win Up To ₹{denom.value * 1000}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Footer note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-16 text-center text-sm text-gray-400 max-w-md"
      >
        <p>Try your luck today! Higher denominations offer bigger prizes and better winning odds.</p>
      </motion.div>
    </div>
  );
};

export default MainSection;
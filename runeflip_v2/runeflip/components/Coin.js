import { motion } from "framer-motion";

export default function Coin({ isFlipping, result }) {
  return (
    <motion.div
      className="w-48 h-48 rounded-full bg-gradient-to-r from-[#3FE0D0] to-[#FFD66B] flex items-center justify-center text-black font-bold text-4xl shadow-lg"
      animate={{ rotateY: isFlipping ? 1800 : 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      {result === 'heads' ? 'HEADS' : result === 'tails' ? 'TAILS' : 'RUNE'}
    </motion.div>
  );
}// Coin Flip Component

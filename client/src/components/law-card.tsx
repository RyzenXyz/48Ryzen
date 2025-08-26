import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import type { Law } from '@shared/schema';

interface LawCardProps {
  law: Law;
  index: number;
}

const iconMap: Record<string, string> = {
  crown: '👑',
  'shield-alt': '🛡️',
  mask: '🎭',
  'comment-slash': '🤐',
  'chess-queen': '♛',
  star: '⭐',
  users: '👥',
  magnet: '🧲',
  'check-circle': '✅',
  virus: '🦠',
  link: '🔗',
  gift: '🎁',
  handshake: '🤝',
  eye: '👁️',
  hammer: '🔨',
  'eye-slash': '🙈',
  random: '🎲',
  building: '🏰',
  search: '🔍',
  'balance-scale': '⚖️',
  'theater-masks': '🎭',
  'flag-white': '🏳️',
  crosshairs: '🎯',
  palette: '🎨',
  'hands-wash': '🧼',
  'praying-hands': '🙏',
  rocket: '🚀',
  chess: '♟️',
  feather: '🪶',
  cards: '🃏',
  magic: '✨',
  key: '🗝️',
  clock: '🕐',
  water: '💧',
  wave: '🌊',
  footsteps: '👣',
  heart: '❤️',
  mirror: '🪞',
  seedling: '🌱',
  smile: '😊',
  target: '🎯',
};

export default function LawCard({ law, index }: LawCardProps) {
  const icon = iconMap[law.icon] || '⚡';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="law-card bg-power-subtle/40 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-power-subtle/20 hover:border-primary/30 cursor-pointer group"
    >
      <Link href={`/law/${law.id}`} data-testid={`link-law-${law.id}`}>
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <span className="text-primary font-bold text-xs sm:text-sm" data-testid={`text-law-number-${law.id}`}>
            LAW {law.id}
          </span>
          <span className="text-lg sm:text-2xl" data-testid={`icon-law-${law.id}`}>
            {icon}
          </span>
        </div>
        
        <h3 className="font-playfair font-semibold text-base sm:text-lg mb-2 sm:mb-3 leading-tight text-white group-hover:text-primary transition-colors" data-testid={`text-law-title-${law.id}`}>
          {law.title}
        </h3>
        
        <p className="text-gray-200 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3" data-testid={`text-law-description-${law.id}`}>
          {law.shortDescription}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-300 bg-power-subtle/60 px-2 py-1 rounded" data-testid={`text-law-category-${law.id}`}>
            {law.category}
          </span>
          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-primary/60 group-hover:text-primary transition-colors" />
        </div>
      </Link>
    </motion.div>
  );
}

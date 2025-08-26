import { useQuery } from '@tanstack/react-query';
import { Link, useRoute } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronRight, Check } from 'lucide-react';
import type { Law } from '@shared/schema';
import { Skeleton } from '@/components/ui/skeleton';

export default function LawDetail() {
  const [match, params] = useRoute('/law/:id');
  const lawId = params?.id ? parseInt(params.id) : null;

  const { data: law, isLoading } = useQuery<Law>({
    queryKey: ['/api/laws', lawId],
    enabled: !!lawId,
  });

  const { data: allLaws = [] } = useQuery<Law[]>({
    queryKey: ['/api/laws'],
  });

  if (!match || !lawId) {
    return <div>Invalid law ID</div>;
  }

  const previousLaw = allLaws.find(l => l.id === lawId - 1);
  const nextLaw = allLaws.find(l => l.id === lawId + 1);
  
  const relatedLaws = allLaws
    .filter(l => l.id !== lawId && l.category === law?.category)
    .slice(0, 2);

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

  return (
    <div className="min-h-screen bg-power-background text-white">
      {/* Mobile Navigation */}
      <nav className="fixed top-0 w-full z-50 nav-blur border-b border-power-subtle/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/laws" data-testid="link-back-laws">
                <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                  <ArrowLeft className="h-5 w-5" />
                  <span className="hidden sm:inline">Laws</span>
                </button>
              </Link>
              <div className="text-lg sm:text-xl font-playfair font-semibold text-white">
                {law ? `Law ${law.id}` : 'Loading...'}
              </div>
            </div>
            <Link href="/" data-testid="link-nav-home">
              <button className="text-gray-300 hover:text-white transition-colors text-sm">
                Home
              </button>
            </Link>
          </div>
        </div>
      </nav>
      
      <div className="pt-20 pb-12 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="bg-power-subtle/30 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-8 md:p-12 border border-power-subtle/20">
              <div className="flex items-center space-x-2 mb-6 sm:mb-8">
                <Skeleton className="h-4 w-12 sm:w-16" />
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-12 sm:w-16" />
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-12 sm:w-16" />
              </div>
              
              <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-4 mb-4 sm:mb-6">
                    <Skeleton className="h-6 sm:h-8 w-16 sm:w-20" />
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 w-20 sm:w-24" />
                  </div>
                  <Skeleton className="h-8 sm:h-12 w-full mb-4 sm:mb-6" />
                  <Skeleton className="h-24 sm:h-32 w-full mb-4 sm:mb-6" />
                  <Skeleton className="h-6 w-32 sm:w-48 mb-4" />
                  <Skeleton className="h-16 sm:h-24 w-full" />
                </div>
                <div className="space-y-6 sm:space-y-8">
                  <Skeleton className="h-32 sm:h-48 w-full" />
                  <Skeleton className="h-24 sm:h-32 w-full" />
                </div>
              </div>
            </div>
          ) : law ? (
            <motion.div
              className="bg-power-subtle/30 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-8 md:p-12 border border-power-subtle/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb Navigation */}
              <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400 mb-6 sm:mb-8" data-testid="breadcrumb">
                <Link href="/" className="hover:text-white transition-colors" data-testid="link-breadcrumb-home">
                  Home
                </Link>
                <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                <Link href="/laws" className="hover:text-white transition-colors" data-testid="link-breadcrumb-laws">
                  Laws
                </Link>
                <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-primary" data-testid="text-breadcrumb-current">Law {law.id}</span>
              </nav>

              <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                <div className="lg:col-span-2">
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <span className="bg-primary text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold" data-testid="text-law-number">
                      LAW {law.id}
                    </span>
                    <span className="text-gray-300 hidden sm:inline">•</span>
                    <span className="text-gray-300 text-xs sm:text-sm" data-testid="text-law-category">
                      {law.category}
                    </span>
                    <span className="text-xl sm:text-2xl" data-testid="text-law-icon">
                      {iconMap[law.icon] || '⚡'}
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold mb-4 sm:mb-6 leading-tight" data-testid="text-law-title">
                    {law.title}
                  </h1>

                  <div className="prose prose-invert max-w-none space-y-6 sm:space-y-8">
                    <div>
                      <p className="text-gray-200 text-base sm:text-lg leading-relaxed" data-testid="text-law-description">
                        {law.fullDescription}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-playfair font-semibold text-white mb-3 sm:mb-4">Core Principle</h3>
                      <p className="text-gray-200 text-sm sm:text-base" data-testid="text-law-principle">
                        {law.principle}
                      </p>
                    </div>

                    {law.psychologyBehind && (
                      <div>
                        <h3 className="text-lg sm:text-xl font-playfair font-semibold text-white mb-3 sm:mb-4">Psychology Behind It</h3>
                        <p className="text-gray-200 text-sm sm:text-base" data-testid="text-law-psychology">
                          {law.psychologyBehind}
                        </p>
                      </div>
                    )}

                    <div className="bg-primary/10 border-l-4 border-primary p-4 sm:p-6 rounded-r-lg">
                      <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">Historical Example</h4>
                      <p className="text-gray-200 text-xs sm:text-sm" data-testid="text-law-example">
                        {law.historicalExample}
                      </p>
                    </div>

                    {law.modernExample && (
                      <div className="bg-accent/10 border-l-4 border-accent p-4 sm:p-6 rounded-r-lg">
                        <h4 className="font-semibold text-accent mb-2 text-sm sm:text-base">Modern Example</h4>
                        <p className="text-gray-200 text-xs sm:text-sm" data-testid="text-law-modern-example">
                          {law.modernExample}
                        </p>
                      </div>
                    )}

                    {law.practicalApplication && (
                      <div>
                        <h3 className="text-lg sm:text-xl font-playfair font-semibold text-white mb-3 sm:mb-4">Practical Application</h3>
                        <p className="text-gray-200 text-sm sm:text-base" data-testid="text-law-practical">
                          {law.practicalApplication}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  {/* Key Points */}
                  <div className="bg-power-background/50 rounded-xl p-4 sm:p-6">
                    <h3 className="font-playfair font-semibold text-base sm:text-lg mb-3 sm:mb-4">Key Points</h3>
                    <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-200">
                      {law.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start space-x-2" data-testid={`text-key-point-${index}`}>
                          <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Common Mistakes */}
                  {law.commonMistakes && law.commonMistakes.length > 0 && (
                    <div className="bg-red-950/30 rounded-xl p-4 sm:p-6 border border-red-800/30">
                      <h3 className="font-playfair font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-red-400">Common Mistakes</h3>
                      <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-200">
                        {law.commonMistakes.map((mistake, index) => (
                          <li key={index} className="flex items-start space-x-2" data-testid={`text-mistake-${index}`}>
                            <span className="text-red-400 text-sm mt-0.5 flex-shrink-0">⚠️</span>
                            <span>{mistake}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Related Concepts */}
                  {law.relatedConcepts && law.relatedConcepts.length > 0 && (
                    <div className="bg-power-background/50 rounded-xl p-4 sm:p-6">
                      <h3 className="font-playfair font-semibold text-base sm:text-lg mb-3 sm:mb-4">Related Concepts</h3>
                      <div className="flex flex-wrap gap-2">
                        {law.relatedConcepts.map((concept, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-accent/20 text-accent rounded text-xs font-medium"
                            data-testid={`text-concept-${index}`}
                          >
                            {concept}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="space-y-3 sm:space-y-4">
                    {previousLaw && (
                      <Link href={`/law/${previousLaw.id}`} data-testid="link-previous-law">
                        <motion.button
                          className="w-full bg-primary hover:bg-red-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>Previous Law</span>
                        </motion.button>
                      </Link>
                    )}
                    {nextLaw && (
                      <Link href={`/law/${nextLaw.id}`} data-testid="link-next-law">
                        <motion.button
                          className="w-full bg-power-subtle hover:bg-power-subtle/80 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>Next Law</span>
                          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                        </motion.button>
                      </Link>
                    )}
                  </div>

                  {/* Related Laws */}
                  {relatedLaws.length > 0 && (
                    <div className="bg-power-background/50 rounded-xl p-4 sm:p-6">
                      <h3 className="font-playfair font-semibold text-base sm:text-lg mb-3 sm:mb-4">Related Laws</h3>
                      <div className="space-y-2 sm:space-y-3">
                        {relatedLaws.map((relatedLaw) => (
                          <Link key={relatedLaw.id} href={`/law/${relatedLaw.id}`} data-testid={`link-related-law-${relatedLaw.id}`}>
                            <motion.div
                              className="block p-3 bg-power-subtle/30 rounded-lg hover:bg-power-subtle/50 transition-colors"
                              whileHover={{ scale: 1.02 }}
                            >
                              <div className="text-primary text-xs sm:text-sm font-bold">LAW {relatedLaw.id}</div>
                              <div className="text-white text-xs sm:text-sm">{relatedLaw.title}</div>
                            </motion.div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <h1 className="text-4xl font-playfair font-bold mb-4" data-testid="text-law-not-found">
                Law Not Found
              </h1>
              <p className="text-gray-400 mb-8">
                The law you're looking for doesn't exist.
              </p>
              <Link href="/" data-testid="link-back-home">
                <motion.button
                  className="power-button text-white px-6 py-3 rounded-lg font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back to Home
                </motion.button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

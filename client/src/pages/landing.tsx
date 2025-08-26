import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, ChevronDown, BookOpen, Search, Star } from 'lucide-react';

export default function Landing() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-power-background text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 nav-blur border-b border-power-subtle/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" data-testid="link-home">
              <div className="text-lg sm:text-xl font-playfair font-semibold text-white hover:text-primary transition-colors">
                48 Laws of Power
              </div>
            </Link>
            <Link href="/laws" data-testid="link-explore-laws">
              <motion.button
                className="power-button text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold text-sm sm:text-base flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore Laws</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Mobile First */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-power-primary via-power-background to-power-subtle" />
        <div className="absolute inset-0 geometric-bg" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 border border-primary/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-32 right-4 sm:right-20 w-12 h-12 sm:w-24 sm:h-24 border border-white/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-playfair font-bold mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="text-hero-title"
          >
            <span className="hero-text">The 48 Laws</span>
            <span className="block accent-text">of Power</span>
          </motion.h1>
          
          <motion.p
            className="text-base sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-testid="text-hero-subtitle"
          >
            Master the timeless principles of influence, strategy, and power through Robert Greene's profound insights into human nature.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/laws" data-testid="link-hero-explore">
              <motion.button
                className="w-full sm:w-auto power-button text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore All 48 Laws
              </motion.button>
            </Link>
            <motion.button
              onClick={scrollToAbout}
              className="w-full sm:w-auto border border-white/20 hover:border-white/40 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-white/5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-learn-more"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToFeatures}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          data-testid="button-scroll-down"
        >
          <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-gray-300" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20 bg-gradient-to-b from-power-background to-power-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-4 sm:mb-6" data-testid="text-features-title">
              Master Power Dynamics
            </h2>
            <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto" data-testid="text-features-subtitle">
              Discover the essential principles that have shaped history's most influential leaders
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              className="bg-power-subtle/40 backdrop-blur-sm rounded-xl p-6 border border-power-subtle/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              data-testid="card-feature-1"
            >
              <BookOpen className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4" />
              <h3 className="font-playfair font-semibold text-lg sm:text-xl mb-3 text-white">48 Timeless Laws</h3>
              <p className="text-gray-200 text-sm sm:text-base">
                Comprehensive collection of power principles backed by historical examples and modern applications.
              </p>
            </motion.div>

            <motion.div
              className="bg-power-subtle/40 backdrop-blur-sm rounded-xl p-6 border border-power-subtle/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              data-testid="card-feature-2"
            >
              <Search className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4" />
              <h3 className="font-playfair font-semibold text-lg sm:text-xl mb-3 text-white">Smart Search</h3>
              <p className="text-gray-200 text-sm sm:text-base">
                Find relevant laws instantly with our intelligent search and filtering system.
              </p>
            </motion.div>

            <motion.div
              className="bg-power-subtle/40 backdrop-blur-sm rounded-xl p-6 border border-power-subtle/20 sm:col-span-2 lg:col-span-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              data-testid="card-feature-3"
            >
              <Star className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4" />
              <h3 className="font-playfair font-semibold text-lg sm:text-xl mb-3 text-white">Expert Insights</h3>
              <p className="text-gray-200 text-sm sm:text-base">
                Deep analysis with historical context and practical applications for modern leadership.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-gradient-to-b from-power-primary to-power-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-4 sm:mb-6" data-testid="text-about-title">
                About Robert Greene
              </h2>
              <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed" data-testid="text-about-description">
                Robert Greene is an American author known for his books on strategy, power, and seduction. 
                His work draws from philosophy, history, and psychology to provide insights into human nature 
                and the dynamics of power.
              </p>
              <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base" data-testid="text-about-book">
                <em>The 48 Laws of Power</em> has become a modern classic, influencing leaders, entrepreneurs, 
                and thinkers across various fields. Greene's ability to distill complex historical patterns 
                into actionable principles has made this work indispensable for understanding power dynamics.
              </p>
              <Link href="/laws" data-testid="link-about-explore">
                <motion.button
                  className="power-button text-white px-6 py-3 rounded-lg font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Learning
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <motion.div
                  className="bg-gradient-to-br from-primary to-red-800 rounded-2xl p-6 sm:p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                  whileHover={{ rotate: 0 }}
                >
                  <div className="bg-black/20 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
                    <h3 className="font-playfair font-bold text-xl sm:text-2xl text-white mb-2" data-testid="text-book-title">
                      The 48 Laws
                    </h3>
                    <p className="text-white/80 text-base sm:text-lg font-semibold" data-testid="text-book-subtitle">
                      of Power
                    </p>
                    <div className="mt-4 sm:mt-6 text-white/60 text-xs sm:text-sm">
                      <p data-testid="text-book-author">Robert Greene</p>
                      <p data-testid="text-book-tagline">The Modern Classic</p>
                    </div>
                  </div>
                </motion.div>
                <div className="absolute -bottom-4 -right-4 bg-power-subtle/40 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-power-subtle/20">
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-300">
                    <span className="text-primary">⭐</span>
                    <span data-testid="text-book-rating">4.8/5</span>
                  </div>
                  <div className="text-xs text-gray-200 mt-1" data-testid="text-book-readers">
                    1M+ Readers
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-power-secondary py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2">
              <h3 className="text-xl sm:text-2xl font-playfair font-bold mb-4" data-testid="text-footer-title">
                The 48 Laws of Power
              </h3>
              <p className="text-gray-200 mb-6 max-w-md text-sm sm:text-base" data-testid="text-footer-description">
                Explore the timeless principles of power, strategy, and human nature through 
                Robert Greene's masterwork.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4" data-testid="text-footer-links-title">Quick Links</h4>
              <ul className="space-y-2 text-gray-200 text-sm">
                <li><button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors" data-testid="button-footer-home">Home</button></li>
                <li><Link href="/laws" className="hover:text-white transition-colors" data-testid="link-footer-laws">All Laws</Link></li>
                <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors" data-testid="button-footer-about">About</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4" data-testid="text-footer-categories-title">Categories</h4>
              <ul className="space-y-2 text-gray-200 text-sm">
                <li><Link href="/laws?category=strategy" className="hover:text-white transition-colors" data-testid="link-footer-strategy">Strategy</Link></li>
                <li><Link href="/laws?category=influence" className="hover:text-white transition-colors" data-testid="link-footer-influence">Influence</Link></li>
                <li><Link href="/laws?category=defense" className="hover:text-white transition-colors" data-testid="link-footer-defense">Defense</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-200 text-xs sm:text-sm">
            <p data-testid="text-footer-copyright">
              &copy; 2024 The 48 Laws of Power. Educational use only. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
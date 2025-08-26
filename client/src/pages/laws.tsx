import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'wouter';
import { Plus, Search, ArrowLeft } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import type { Law } from '@shared/schema';
import LawCard from '@/components/law-card';
import SearchFilter from '@/components/search-filter';

export default function Laws() {
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSort, setSelectedSort] = useState('number');
  const [visibleCount, setVisibleCount] = useState(12);

  // Check for URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const categoryFromUrl = urlParams.get('category');
  
  // Set initial category from URL if present
  useEffect(() => {
    if (categoryFromUrl && categoryFromUrl !== selectedCategory) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl, selectedCategory]);

  const { data: laws = [], isLoading } = useQuery<Law[]>({
    queryKey: ['/api/laws'],
  });

  const filteredAndSortedLaws = useMemo(() => {
    let filtered = laws;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = laws.filter(law =>
        law.title.toLowerCase().includes(query) ||
        law.shortDescription.toLowerCase().includes(query) ||
        law.principle.toLowerCase().includes(query)
      );
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(law => 
        law.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      switch (selectedSort) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'category':
          return a.category.localeCompare(b.category);
        case 'number':
        default:
          return a.id - b.id;
      }
    });

    return sorted;
  }, [laws, searchQuery, selectedCategory, selectedSort]);

  const visibleLaws = filteredAndSortedLaws.slice(0, visibleCount);
  const hasMore = filteredAndSortedLaws.length > visibleCount;

  const loadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  return (
    <div className="min-h-screen bg-power-background text-white">
      {/* Mobile Navigation */}
      <nav className="fixed top-0 w-full z-50 nav-blur border-b border-power-subtle/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" data-testid="link-back-home">
                <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                  <ArrowLeft className="h-5 w-5" />
                  <span className="hidden sm:inline">Back</span>
                </button>
              </Link>
              <div className="text-lg sm:text-xl font-playfair font-semibold text-white">
                48 Laws of Power
              </div>
            </div>
            
            {/* Mobile Search */}
            <div className="flex-1 max-w-md mx-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search laws..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-power-subtle/50 text-white placeholder-gray-400 px-4 py-2 pl-10 rounded-lg border border-power-subtle focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm"
                  data-testid="input-search-laws"
                />
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-4 sm:mb-6" data-testid="text-laws-page-title">
              The 48 Laws of Power
            </h1>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto" data-testid="text-laws-page-subtitle">
              Each law represents a fundamental principle of power dynamics, 
              drawn from historical examples and timeless wisdom.
            </p>
          </motion.div>

          {/* Filters */}
          <SearchFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedSort={selectedSort}
            onSortChange={setSelectedSort}
          />

          {/* Loading State */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-power-subtle/40 rounded-xl p-6 animate-pulse">
                  <div className="h-4 bg-gray-600 rounded mb-4"></div>
                  <div className="h-6 bg-gray-600 rounded mb-3"></div>
                  <div className="h-12 bg-gray-600 rounded mb-4"></div>
                  <div className="h-4 bg-gray-600 rounded w-1/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* Laws Grid */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {visibleLaws.map((law, index) => (
                  <LawCard key={law.id} law={law} index={index} />
                ))}
              </motion.div>

              {/* Load More Button */}
              {hasMore && (
                <motion.div
                  className="text-center mt-8 sm:mt-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <button
                    onClick={loadMore}
                    className="bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 text-primary px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 mx-auto text-sm sm:text-base"
                    data-testid="button-load-more-laws"
                  >
                    <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Load More ({filteredAndSortedLaws.length - visibleCount} remaining)</span>
                  </button>
                </motion.div>
              )}

              {/* No Results */}
              {filteredAndSortedLaws.length === 0 && searchQuery && (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-gray-400 text-base sm:text-lg" data-testid="text-no-laws-found">
                    No laws found matching "{searchQuery}". Try adjusting your search or filters.
                  </p>
                </motion.div>
              )}

              {/* Results Count */}
              {filteredAndSortedLaws.length > 0 && (
                <div className="text-center mt-6 sm:mt-8 text-sm text-gray-400" data-testid="text-results-count">
                  Showing {visibleLaws.length} of {filteredAndSortedLaws.length} laws
                  {searchQuery && ` for "${searchQuery}"`}
                  {selectedCategory !== 'all' && ` in ${selectedCategory} category`}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
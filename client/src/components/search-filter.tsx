import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface SearchFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedSort: string;
  onSortChange: (sort: string) => void;
}

export default function SearchFilter({
  selectedCategory,
  onCategoryChange,
  selectedSort,
  onSortChange,
}: SearchFilterProps) {
  const categories = [
    { value: 'all', label: 'All Laws' },
    { value: 'strategy', label: 'Strategy' },
    { value: 'influence', label: 'Influence' },
    { value: 'defense', label: 'Defense' },
  ];

  const sortOptions = [
    { value: 'number', label: 'Law Number' },
    { value: 'title', label: 'Title' },
    { value: 'category', label: 'Category' },
  ];

  return (
    <div className="mb-8 sm:mb-12 space-y-4">
      {/* Category Filters - Mobile First */}
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => onCategoryChange(category.value)}
            className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base ${
              selectedCategory === category.value
                ? 'bg-primary text-white'
                : 'bg-power-subtle text-gray-300 hover:bg-power-subtle/80'
            }`}
            data-testid={`button-filter-${category.value}`}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      {/* Sort Dropdown */}
      <div className="flex items-center justify-between sm:justify-end space-x-3 sm:space-x-4">
        <span className="text-gray-400 text-sm sm:text-base">Sort by:</span>
        <Select value={selectedSort} onValueChange={onSortChange}>
          <SelectTrigger 
            className="w-[140px] sm:w-[180px] bg-power-subtle border-power-subtle text-white text-sm sm:text-base"
            data-testid="select-sort"
          >
            <SelectValue placeholder="Sort by..." />
          </SelectTrigger>
          <SelectContent className="bg-power-subtle border-power-subtle">
            {sortOptions.map((option) => (
              <SelectItem 
                key={option.value} 
                value={option.value}
                className="text-white hover:bg-power-subtle/80 text-sm sm:text-base"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

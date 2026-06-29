import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { Search, SlidersHorizontal, MapPin } from 'lucide-react';

const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  useEffect(() => {
    setSearchQuery(searchParams.get('q') || '');
  }, [searchParams]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams(searchQuery ? { q: searchQuery } : {});
  };
  
  const allProperties = [
    {
      price: 2450,
      title: 'Modern Loft in Downtown',
      location: '123 Market St, San Francisco, CA',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      beds: 2,
      baths: 1,
      sqft: 850,
      rating: 4.9,
      isVerified: true
    },
    {
      price: 1800,
      title: 'Cozy Studio in Brooklyn',
      location: '456 Pine Ave, Brooklyn, NY',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
      beds: 1,
      baths: 1,
      sqft: 500,
      rating: 4.7,
      isNew: true
    },
    {
      price: 3200,
      title: 'Luxury Condo in Austin',
      location: '789 Congress Ave, Austin, TX',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
      beds: 3,
      baths: 2,
      sqft: 1200,
      rating: 5.0,
      isFeatured: true
    },
    {
      price: 2100,
      title: 'Charming Cottage',
      location: '101 Rose Ln, Portland, OR',
      image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=80',
      beds: 2,
      baths: 2,
      sqft: 1100,
      rating: 4.8,
      isVerified: true
    }
  ];

  const filteredProperties = allProperties.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="flex-grow flex flex-col md:flex-row h-[calc(100vh-64px)] overflow-hidden">
      {/* Sidebar / Filters */}
      <aside className="w-full md:w-80 bg-white border-r p-4 overflow-y-auto hidden md:block">
        <h2 className="font-bold text-lg mb-4 text-neutral-text">Filters</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-neutral-subtext mb-1">Price Range</label>
            <input type="range" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" />
            <div className="flex justify-between text-xs text-neutral-subtext mt-1">
              <span>$0</span>
              <span>$5,000+</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-subtext mb-1">Bedrooms</label>
            <div className="flex gap-2">
              {['Any', '1+', '2+', '3+', '4+'].map(val => (
                <button key={val} className="flex-1 py-2 border rounded-md text-sm hover:border-primary hover:text-primary transition">{val}</button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-subtext mb-1">Property Type</label>
            <div className="space-y-2">
              {['Apartment', 'House', 'Loft', 'Condo'].map(type => (
                <label key={type} className="flex items-center gap-2 text-sm text-neutral-text">
                  <input type="checkbox" className="rounded text-primary focus:ring-primary border-gray-300" />
                  {type}
                </label>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-background overflow-hidden">
        {/* Search Header */}
        <form onSubmit={handleSearchSubmit} className="p-4 bg-white border-b flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-subtext" size={18} />
            <input 
              type="text" 
              placeholder="Search by city, address or title..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border-transparent focus:bg-white focus:border-primary rounded-lg outline-none transition text-neutral-text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button type="button" className="md:hidden border p-2 rounded-lg text-neutral-text"><SlidersHorizontal size={20} /></button>
          <button type="submit" className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition">Search</button>
        </form>

        {/* Results */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold text-neutral-text">{filteredProperties.length} results found</h1>
            <div className="flex items-center gap-2 text-sm text-neutral-subtext">
              Sort by: <select className="bg-transparent font-medium text-neutral-text outline-none"><option>Newest</option><option>Price: Low to High</option><option>Price: High to Low</option></select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProperties.map((prop, index) => (
              <PropertyCard key={index} {...prop} />
            ))}
          </div>
          
          {filteredProperties.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-subtext text-lg">No properties found matching your search.</p>
              <button onClick={() => setSearchQuery('')} className="text-primary font-medium mt-2">Clear all filters</button>
            </div>
          )}
        </div>
      </div>

      {/* Map Placeholder (hidden on small screens) */}
      <div className="hidden lg:block w-96 bg-gray-200 relative border-l">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-subtext">
          <MapPin size={48} className="mb-2 opacity-20" />
          <span className="font-medium">Map View Coming Soon</span>
        </div>
      </div>
    </main>
  );
};

export default SearchPage;

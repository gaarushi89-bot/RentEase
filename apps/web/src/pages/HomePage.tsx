import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { Search, SlidersHorizontal } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(\`/search?q=\${encodeURIComponent(query)}\`);
    } else {
      navigate('/search');
    }
  };

  const properties = [
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
    }
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="px-4 py-12 md:py-20 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-text mb-4">Find your next home with ease.</h1>
          <p className="text-neutral-subtext text-lg max-w-2xl mx-auto">Verified listings, digital applications, and real-time messaging. All in one place.</p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="bg-white p-2 rounded-full shadow-lg flex items-center max-w-3xl mx-auto border">
          <div className="flex-1 flex items-center px-4">
            <Search className="text-neutral-subtext mr-2" size={20} />
            <input 
              type="text" 
              placeholder="Where do you want to live?" 
              className="w-full outline-none text-lg"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-md hover:opacity-90 transition">Search</button>
        </form>
      </section>

      {/* Listings Section */}
      <section className="px-4 pb-20 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-neutral-text">Popular Listings</h2>
          <button className="flex items-center space-x-2 border px-4 py-2 rounded-lg hover:bg-gray-50 transition">
            <SlidersHorizontal size={20} className="text-neutral-subtext" />
            <span className="font-medium">Filters</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop, index) => (
            <PropertyCard key={index} {...prop} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;

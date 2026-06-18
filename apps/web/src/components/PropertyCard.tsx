import React from 'react';
import { Star, Heart, Home, Bath, Maximize } from 'lucide-react';

interface PropertyCardProps {
  price: number;
  title: string;
  location: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
  rating: number;
  isVerified?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  price, title, location, image, beds, baths, sqft, rating, isVerified, isNew, isFeatured
}) => {
  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group border ${isFeatured ? 'border-blue-100 ring-2 ring-blue-500 ring-opacity-10' : ''}`}>
      <div className="relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        {isVerified && <div className="absolute top-4 left-4 bg-secondary text-white px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">Verified</div>}
        {isNew && <div className="absolute top-4 left-4 bg-primary text-white px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">New</div>}
        {isFeatured && <div className="absolute top-4 left-4 bg-amber-500 text-white px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">Featured</div>}
        <button className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white transition">
          <Heart size={20} className="text-primary" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-neutral-text">${price.toLocaleString()}<span className="text-sm font-normal text-neutral-subtext">/mo</span></h3>
          <div className="flex items-center space-x-1">
            <Star size={16} className="text-amber-500 fill-amber-500" />
            <span className="text-sm font-bold text-amber-500">{rating}</span>
          </div>
        </div>
        <p className="text-neutral-text font-medium mb-1">{title}</p>
        <p className="text-neutral-subtext text-sm mb-4">{location}</p>
        <div className="flex items-center space-x-4 text-sm text-neutral-subtext">
          <span className="flex items-center gap-1"><Home size={16} /> {beds} Bed</span>
          <span className="flex items-center gap-1"><Bath size={16} /> {baths} Bath</span>
          <span className="flex items-center gap-1"><Maximize size={16} /> {sqft} sqft</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

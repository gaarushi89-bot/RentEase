import type { Request, Response } from 'express';
import type { Property } from '../../../../packages/shared/src/index.js';

// Dummy data for now
const properties: Property[] = [
  {
    id: '1',
    landlordId: 'landlord1',
    title: 'Modern Loft in Downtown',
    description: 'A beautiful modern loft in the heart of downtown San Francisco.',
    price: 2450,
    currency: 'USD',
    location: '123 Market St, San Francisco, CA',
    propertyType: 'apartment',
    bedrooms: 2,
    bathrooms: 1,
    squareFootage: 850,
    amenities: ['Wifi', 'Kitchen', 'Heating'],
    status: 'available',
    isVerified: true,
    isFeatured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    images: [
      { id: 'img1', propertyId: '1', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80', sortOrder: 0 }
    ]
  },
  {
    id: '2',
    landlordId: 'landlord2',
    title: 'Cozy Studio in Brooklyn',
    description: 'Perfect cozy studio for a single professional or couple.',
    price: 1800,
    currency: 'USD',
    location: '456 Pine Ave, Brooklyn, NY',
    propertyType: 'studio',
    bedrooms: 1,
    bathrooms: 1,
    squareFootage: 500,
    amenities: ['Wifi', 'A/C'],
    status: 'available',
    isVerified: false,
    isFeatured: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    images: [
      { id: 'img2', propertyId: '2', url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80', sortOrder: 0 }
    ]
  },
  {
    id: '3',
    landlordId: 'landlord3',
    title: 'Luxury Condo in Austin',
    description: 'High-end condo with amazing views of the city skyline.',
    price: 3200,
    currency: 'USD',
    location: '789 Congress Ave, Austin, TX',
    propertyType: 'condo',
    bedrooms: 3,
    bathrooms: 2,
    squareFootage: 1200,
    amenities: ['Wifi', 'Gym', 'Pool', 'Parking'],
    status: 'available',
    isVerified: true,
    isFeatured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    images: [
      { id: 'img3', propertyId: '3', url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80', sortOrder: 0 }
    ]
  }
];

export const getProperties = async (req: Request, res: Response) => {
  const { location, minPrice, maxPrice, propertyType, bedrooms } = req.query;
  
  let filteredProperties = [...properties];

  if (location) {
    filteredProperties = filteredProperties.filter(p => 
      p.location.toLowerCase().includes((location as string).toLowerCase())
    );
  }

  if (minPrice) {
    filteredProperties = filteredProperties.filter(p => p.price >= Number(minPrice));
  }

  if (maxPrice) {
    filteredProperties = filteredProperties.filter(p => p.price <= Number(maxPrice));
  }

  if (propertyType) {
    filteredProperties = filteredProperties.filter(p => p.propertyType === propertyType);
  }

  if (bedrooms) {
    filteredProperties = filteredProperties.filter(p => p.bedrooms === Number(bedrooms));
  }

  res.json(filteredProperties);
};

export const getPropertyById = async (req: Request, res: Response) => {
  const property = properties.find(p => p.id === req.params.id);
  if (!property) {
    return res.status(404).json({ message: 'Property not found' });
  }
  res.json(property);
};

export const createProperty = async (req: any, res: Response) => {
  const newProperty: Property = {
    ...req.body,
    id: Math.random().toString(36).substring(7),
    landlordId: req.user.id,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    images: req.body.images || []
  };

  properties.push(newProperty);
  res.status(201).json(newProperty);
};

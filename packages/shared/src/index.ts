export interface User {
  id: string;
  email: string;
  name: string;
  role: 'tenant' | 'landlord' | 'admin';
  phone?: string;
  avatarUrl?: string;
  emailVerified: boolean;
  isVerifiedLandlord: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Property {
  id: string;
  landlordId: string;
  title: string;
  description: string;
  price: number;
  deposit?: number;
  currency: string;
  location: string;
  latitude?: number;
  longitude?: number;
  propertyType: 'apartment' | 'house' | 'condo' | 'studio' | 'townhouse' | 'other';
  bedrooms?: number;
  bathrooms?: number;
  squareFootage?: number;
  amenities: string[]; // Store as array in TS, stringified JSON in DB
  status: 'available' | 'pending' | 'rented' | 'unlisted';
  isVerified: boolean;
  isFeatured: boolean;
  featuredUntil?: string;
  createdAt: string;
  updatedAt: string;
  images: PropertyImage[];
}

export interface PropertyImage {
  id: string;
  propertyId: string;
  url: string;
  altText?: string;
  sortOrder: number;
}

export interface Application {
  id: string;
  propertyId: string;
  tenantId: string;
  coverLetter?: string;
  status: 'submitted' | 'under_review' | 'accepted' | 'rejected' | 'withdrawn';
  landlordNotes?: string;
  reviewedAt?: string;
  submittedAt: string;
  updatedAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  propertyId?: string;
  subject?: string;
  body: string;
  isRead: boolean;
  readAt?: string;
  createdAt: string;
}

export interface Review {
  id: string;
  propertyId: string;
  tenantId: string;
  landlordId: string;
  rating: number;
  title?: string;
  body?: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface SearchFilters {
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  propertyType?: string;
  bedrooms?: number;
  bathrooms?: number;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  propertyId?: string;
  content: string;
  createdAt: Date;
  readAt?: Date;
}

export interface Review {
  id: string;
  propertyId: string;
  tenantId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface Subscription {
  id: string;
  landlordId: string;
  plan: 'starter' | 'professional' | 'business';
  status: 'active' | 'cancelled' | 'expired';
  expiresAt: Date;
}

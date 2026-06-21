// RentEase Shared Types — aligns with database schema in /home/team/shared/db/schema_design.sql

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  role: 'tenant' | 'landlord' | 'admin';
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
  amenities?: string[];
  status: 'available' | 'pending' | 'rented' | 'unlisted';
  isVerified: boolean;
  isFeatured: boolean;
  featuredUntil?: string;
  images: PropertyImage[];
  createdAt: string;
  updatedAt: string;
}

export interface PropertyImage {
  id: string;
  propertyId: string;
  url: string;
  altText?: string;
  sortOrder: number;
  createdAt: string;
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
  rating: number; // 1-5
  title?: string;
  body?: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  priceMonthly: number;
  maxListings: number; // -1 = unlimited
  hasFeatured: boolean;
  hasVerifiedBadge: boolean;
  hasAnalytics: boolean;
  hasPrioritySupport: boolean;
  createdAt: string;
}

export interface Subscription {
  id: string;
  userId: string;
  planId: string;
  status: 'active' | 'canceled' | 'past_due' | 'expired' | 'trialing';
  currentPeriodStart: string;
  currentPeriodEnd: string;
  canceledAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Transaction {
  id: string;
  userId: string;
  subscriptionId?: string;
  amount: number;
  currency: string;
  description: string;
  category: 'subscription' | 'featured_listing' | 'verified_badge' | 'priority_leads' | 'advertising';
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  stripePaymentId?: string;
  createdAt: string;
}

export interface Favorite {
  id: string;
  userId: string;
  propertyId: string;
  createdAt: string;
}

// Enum-like constants
export const USER_ROLES = ['tenant', 'landlord', 'admin'] as const;
export const PROPERTY_STATUSES = ['available', 'pending', 'rented', 'unlisted'] as const;
export const PROPERTY_TYPES = ['apartment', 'house', 'condo', 'studio', 'townhouse', 'other'] as const;
export const APPLICATION_STATUSES = ['submitted', 'under_review', 'accepted', 'rejected', 'withdrawn'] as const;
export const SUBSCRIPTION_STATUSES = ['active', 'canceled', 'past_due', 'expired', 'trialing'] as const;
export const TRANSACTION_CATEGORIES = ['subscription', 'featured_listing', 'verified_badge', 'priority_leads', 'advertising'] as const;
export const TRANSACTION_STATUSES = ['pending', 'completed', 'failed', 'refunded'] as const;
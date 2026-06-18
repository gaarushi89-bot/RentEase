export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  images: string[];
  landlordId: string;
  status: 'available' | 'rented' | 'pending';
  createdAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'tenant' | 'landlord' | 'admin';
}

export interface Application {
  id: string;
  propertyId: string;
  tenantId: string;
  status: 'submitted' | 'under_review' | 'accepted' | 'rejected';
  submittedAt: Date;
}

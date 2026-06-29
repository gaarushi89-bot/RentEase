import type { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import type { User } from '../../../../packages/shared/src/index.js';
import type { AuthRequest } from '../middleware/auth.js';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const JWT_EXPIRES_IN = '1d';

// This will be replaced by actual database calls
const users: any[] = []; 

export const register = async (req: Request, res: Response) => {
  const { email, password, name, role } = req.body;

  if (!email || !password || !name || !role) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Check if user already exists
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser: User = {
    id: Math.random().toString(36).substring(7),
    email,
    name,
    role,
    emailVerified: false,
    isVerifiedLandlord: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  // Store password separately as it's not in the User interface
  users.push({ ...newUser, password: hashedPassword });

  const token = jwt.sign(
    { id: newUser.id, email: newUser.email, role: newUser.role },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );

  res.status(201).json({
    token,
    user: newUser
  });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );

  res.json({
    token,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      emailVerified: user.emailVerified,
      isVerifiedLandlord: user.isVerifiedLandlord,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    }
  });
};

export const getMe = async (req: AuthRequest, res: Response) => {
  res.json({ user: req.user });
};

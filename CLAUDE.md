# CLAUDE.md - RentEase Project Guide

## Project Overview
RentEase is a rental marketplace platform. This repository uses a monorepo structure with npm workspaces.

## Tech Stack
- Frontend: React, Vite, TypeScript, Tailwind CSS
- Backend: Node.js, Express, TypeScript
- Database: SQLite (local) / Turso (remote)

## Project Structure
- `apps/web`: React frontend
- `apps/api`: Express backend
- `packages/shared`: Shared TypeScript types

## Common Commands
- `npm install`: Install all dependencies
- `npm run dev`: Start development servers (root)
- `npm run build`: Build all packages
- `cd apps/api && npm run dev`: Start API only
- `cd apps/web && npm run dev`: Start Frontend only

## Development Guidelines
- Use TypeScript for all new code.
- Follow mobile-first design principles for the frontend.
- Backend should expose RESTful API endpoints under `/api`.
- Shared types should be defined in `packages/shared`.
- All servers should be bound to `0.0.0.0` to be accessible in the sandbox environment.
- Public surface is port 3000.

## API Conventions
- Health check: `GET /api/health`
- Use JSON for request/response bodies.

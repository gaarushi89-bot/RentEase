# RentEase Deployment Documentation

## Overview
RentEase is a monorepo containing a React frontend (`apps/web`), a Node.js API (`apps/api`), and a shared package (`packages/shared`).

## Recommended Deployment Strategy

### Frontend (apps/web)
- **Platform:** Vercel or Netlify.
- **Build Command:** `npm run build --workspace=web`
- **Output Directory:** `apps/web/dist`
- **Environment Variables:**
  - `VITE_API_URL`: The URL of the deployed API.

### Backend (apps/api)
- **Platform:** AWS App Runner, Google Cloud Run, or a VPS with Docker.
- **Containerization:** A Dockerfile is provided at `infra/docker/api/Dockerfile`.
- **Environment Variables:**
  - `PORT`: Port the API should listen on (default 3001).
  - `TURSO_DATABASE_URL`: Turso connection string.
  - `TURSO_AUTH_TOKEN`: Turso authentication token.

### CI/CD (GitHub Actions)
- **CI:** Automatically runs on push to `main` and pull requests. Lints and builds all packages.
- **CD (Proposed):**
  - Use GitHub Actions to deploy to Vercel (frontend) and a container registry (backend).

## Local Development
1. Install dependencies: `npm install`
2. Run development servers: `npm run dev`
3. Build all packages: `npm run build`

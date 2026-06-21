# Build stage
FROM node:24-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY apps/api/package*.json ./apps/api/
COPY packages/shared/package*.json ./packages/shared/

# Install dependencies
RUN npm install

# Copy source code
COPY apps/api ./apps/api
COPY packages/shared ./packages/shared
COPY tsconfig.json ./

# Build the project
RUN npm run build --workspace=shared
RUN npm run build --workspace=api

# Production stage
FROM node:24-alpine

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/apps/api/package*.json ./apps/api/
COPY --from=builder /app/apps/api/dist ./apps/api/dist
COPY --from=builder /app/packages/shared/package*.json ./packages/shared/
COPY --from=builder /app/packages/shared/dist ./packages/shared/dist

# Install production dependencies only
RUN npm install --omit=dev

EXPOSE 3001

CMD ["npm", "run", "start", "--workspace=api"]

FROM node:20-alpine AS builder

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files
COPY package.json pnpm-lock.yaml ./
COPY patches ./patches

# Install dependencies (frozen-lockfile ensures deterministic installation)
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application (runs vite build and esbuild for the server)
RUN pnpm build

# Stage 2: Production environment
FROM node:20-alpine

WORKDIR /app

# Set Node environment to production
ENV NODE_ENV=production

# Install pnpm in the final image as well if we use it to start, or stick to Node.
# We will use Node directly to start the app exactly as it's defined in package.json start script
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/v2-home ./v2-home
COPY --from=builder /app/package.json ./package.json

# Copy node_modules from builder (or we could prune, but keeping it simple for now)
COPY --from=builder /app/node_modules ./node_modules

# Expose the port the app runs on. 
# You can customize this based on what the express server uses (usually 80 in Easypanel)
EXPOSE 80

# Run the app
CMD ["npm", "run", "start"]

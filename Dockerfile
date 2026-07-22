# ─────────────────────────────────────────────────────────────
#  Multi-stage Dockerfile
#  Stage 1 builds the site with Node. Stage 2 serves the built
#  static files with a tiny nginx web server. The final image
#  contains ONLY the finished website — not Node or your source.
# ─────────────────────────────────────────────────────────────

# ---- Stage 1: build ----
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies first (this layer is cached unless
# package.json changes, which makes rebuilds much faster).
COPY package*.json ./
RUN npm ci

# Copy the rest of the source and build it.
COPY . .
# For Docker/cloud we serve at the root, so base = "/".
ENV VITE_BASE=/
RUN npm run build

# ---- Stage 2: serve ----
FROM nginx:1.27-alpine AS serve

# Replace the default nginx config with our SPA-friendly one.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built static files from the build stage.
COPY --from=build /app/dist /usr/share/nginx/html

# nginx listens on port 80 inside the container.
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

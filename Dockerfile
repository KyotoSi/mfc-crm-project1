# Multi-stage build for React application
#Build REACT APP
FROM node:22-alpine3.20 AS build
# Set working directory
WORKDIR /app
# Copy package files
COPY package.json pnpm-lock.yaml ./
#Set proxy NPM repository url
# RUN npm config set registry http://repo.polyus.com/repository/npm-proxy/
# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install --frozen-lockfile
# Copy source code
COPY . .
# Build the application
RUN pnpm run build

#Production stage
FROM nginx:latest as nginx_node_mfc_tasks
# Copy built files to nginx
COPY --from=build /app/dist /usr/share/nginx/html
# Copy nginx configuration
COPY --from=build /app/nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80/tcp

# Start nginx
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
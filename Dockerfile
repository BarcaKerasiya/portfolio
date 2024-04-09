FROM node:alpine3.18 as build

# Declare build time environment variables
# ARG REACT_APP_NODE_ENV
# ARG REACT_APP_SERVER_BASE_URL

# Set default values for environment variables
# ENV REACT_APP_NODE_ENV=$REACT_APP_NODE_ENV
# ENV REACT_APP_SERVER_BASE_URL=$REACT_APP_SERVER_BASE_URL

# Build App
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# # Serve with Nginx
# FROM nginx:1.23-alpine
# WORKDIR /usr/share/nginx/html
# RUN rm -rf *
# COPY --from=build /app/dist .
# EXPOSE 80
# ENTRYPOINT [ "nginx", "-g", "daemon off;" ]





# Stage 2: Serve React App with NGINX
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built React app from Stage 1
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

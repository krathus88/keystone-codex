FROM node:24.3.0-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./

COPY . .

ENV CI=true
RUN npm install

# Default MODE to development
RUN npm run build -- --mode=${MODE:-development}

FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

# nginx config will come from the nginx container in docker-compose, so no need to copy here

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

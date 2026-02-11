# Stage 1: Build
FROM node:lts as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
COPY deploy/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# Stage 1: Build the static Docusaurus site
FROM node:lts-bookworm-slim AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Lightweight Python runtime for static serving + recipe execution
FROM python:3.11-slim-bookworm
WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    PORT=3000

COPY requirements.txt ./
COPY run_recipe.py ./run_recipe.py
COPY start_prod.py ./start_prod.py
COPY docker-entrypoint.sh ./docker-entrypoint.sh
COPY --from=builder /app/build ./build

RUN chmod +x /app/docker-entrypoint.sh

EXPOSE 3000
CMD ["./docker-entrypoint.sh"]

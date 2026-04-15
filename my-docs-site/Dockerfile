# Stage 1: Build
FROM node:lts as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Runtime
FROM node:lts-bookworm-slim
WORKDIR /app

RUN apt-get update \
    && apt-get install -y --no-install-recommends python3 python3-pip \
    && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
RUN npm install --omit=dev

COPY requirements.txt ./
RUN python3 -m pip install --no-cache-dir --break-system-packages -r requirements.txt

COPY run_recipe.py ./run_recipe.py
COPY scripts/recipe-runner-server.cjs ./scripts/recipe-runner-server.cjs
COPY scripts/start-prod.cjs ./scripts/start-prod.cjs
COPY --from=builder /app/build ./build

ENV PORT=3000
EXPOSE 3000
CMD ["node", "./scripts/start-prod.cjs"]

# build
FROM node:latest as build-stage

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM node:18-alpine

RUN mkdir -p /app
WORKDIR /app

COPY ./ /app

RUN apk update && apk add bash
RUN rm -f /ran_migrations.txt
RUN npm install pnpm -g
RUN pnpm install
RUN pnpm build

EXPOSE 3000 3001
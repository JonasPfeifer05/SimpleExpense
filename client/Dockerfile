FROM oven/bun:1.0-alpine
WORKDIR /usr/src/app

COPY . .

RUN bun install

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["bun", "run", "dev"]
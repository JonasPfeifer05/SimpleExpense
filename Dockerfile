FROM node:latest as install
WORKDIR /usr/src/app
COPY package.json package.json
RUN npm i

FROM oven/bun:latest as build
WORKDIR /usr/src/app
COPY . .
COPY --from=install /usr/src/app/node_modules /usr/src/app/node_modules
RUN bun --bun run build

FROM node:latest as prod
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/.output /usr/src/app/.output
EXPOSE 3000
CMD [ "node", ".output/server/index.mjs" ]
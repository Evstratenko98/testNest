FROM node:14.15.4-alpine3.11 as BASE
RUN apk --no-cache --update
FROM BASE
ARG APP_NAME
COPY ./package*.json ./
RUN npm i
COPY ./[^node_modules]* ./
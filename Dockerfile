FROM node:16-alpine AS development

RUN apk --no-cache --virtual build-dependencies add \
        python3 \
        make \
        g++


ENV NODE_ENV development

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

CMD [ "yarn", "start" ]
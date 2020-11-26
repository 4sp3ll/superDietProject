FROM node:12.13.0 as builder
#ARG APP_ENV=production

COPY package.json yarn.lock /srv/
WORKDIR /srv
RUN yarn install --pure-lockfile
COPY . /srv
RUN yarn build

FROM nginx:1.13-alpine

COPY .nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /srv/build /usr/share/nginx/html
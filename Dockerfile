FROM yarnpkg/node-yarn as build-stage

WORKDIR /app
COPY . /app/
RUN yarn install
RUN yarn build

FROM nginx:1.15
COPY --from=build-stage /app/dist/ /var/www/html
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf

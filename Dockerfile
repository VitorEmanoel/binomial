FROM node as build-stage

WORKDIR /app
COPY . /app/
RUN npm install
RUN npm run build

FROM nginx:1.15
COPY --from=build-stage /app/dist/ /var/www/html
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf

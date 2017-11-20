FROM nginx:1.13-alpine

MAINTAINER Alexander Orlov <alexander.orlov@intrafind.de>

RUN mkdir -p /var/www/letsencrypt/.well-known/acme-challenge # enables Letsencrypt validation
COPY nginx.nginx /etc/nginx/nginx.conf
COPY ssl.nginx /etc/nginx/snippets/ssl.conf
COPY letsencrypt.nginx /etc/nginx/snippets/letsencrypt.conf
COPY routes.nginx /etc/nginx/conf.d/default.conf
COPY htpasswd.txt /etc/nginx/.htpasswd
#COPY frontpage /usr/share/nginx/html/frontpage

EXPOSE 80 443
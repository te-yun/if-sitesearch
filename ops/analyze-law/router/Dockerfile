FROM nginx:stable-alpine

MAINTAINER IntraFind Software AG <alexander.orlov@intrafind.de>

RUN mkdir -p /etc/letsencrypt/.well-known # enables Letsencrypt validation
COPY ssl.nginx /etc/nginx/snippets/ssl.conf
COPY cors-headers.nginx /etc/nginx/snippets/cors-headers.conf
COPY routes.nginx /etc/nginx/conf.d/default.conf
RUN echo 'sitesearch:$apr1$yiWHOvCy$YVz/vNHOKrH9LJGEglMOg.' > /etc/nginx/.htpasswd

EXPOSE 80 443
STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]
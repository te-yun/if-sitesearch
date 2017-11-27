FROM nginx:1.13-alpine

MAINTAINER Alexander Orlov <alexander.orlov@intrafind.de>

RUN apk add --no-cache --virtual unzip
ADD https://releases.hashicorp.com/consul-template/0.14.0/consul-template_0.14.0_linux_amd64.zip /usr/bin/
RUN unzip /usr/bin/consul-template_0.14.0_linux_amd64.zip -d /usr/local/bin

COPY opt/* /bin/
RUN chmod +x /bin/switch.sh /bin/start.sh
COPY opt/default.* /templates/

RUN mkdir -p /var/www/letsencrypt/.well-known/acme-challenge # enables Letsencrypt validation
#COPY nginx.nginx /etc/nginx/nginx.conf
COPY ssl.nginx /etc/nginx/snippets/ssl.conf
COPY cors-headers.nginx /etc/nginx/snippets/cors-headers.conf
COPY letsencrypt.nginx /etc/nginx/snippets/letsencrypt.conf
COPY routes.nginx /etc/nginx/conf.d/default.conf
COPY htpasswd.txt /etc/nginx/.htpasswd
#COPY frontpage /usr/share/nginx/html/frontpage

ENV LIVE blue
ENV BLUE_NAME blue
ENV GREEN_NAME green

EXPOSE 80 443
ENTRYPOINT ["/bin/start.sh"]
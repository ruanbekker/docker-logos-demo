FROM alpine
RUN apk add --no-cache lighttpd
WORKDIR /var/www/localhost/htdocs/
ADD index-javascript.html index.html
ADD images/javascript.png images/javascript.png
CMD ["lighttpd", "-f", "/etc/lighttpd/lighttpd.conf", "-D"] 

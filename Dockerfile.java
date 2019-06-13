FROM alpine
RUN apk add --no-cache lighttpd
WORKDIR /var/www/localhost/htdocs/
ADD index-java.html index.html
ADD images/java.png images/java.png
CMD ["lighttpd", "-f", "/etc/lighttpd/lighttpd.conf", "-D"] 

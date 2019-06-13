FROM alpine
RUN apk add --no-cache lighttpd
WORKDIR /var/www/localhost/htdocs/
ADD index-ruby.html index.html
ADD images/ruby.png images/ruby.png
CMD ["lighttpd", "-f", "/etc/lighttpd/lighttpd.conf", "-D"] 

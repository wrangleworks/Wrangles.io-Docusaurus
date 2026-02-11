FROM nginx:alpine

LABEL maintainer="WrangleWorks"

# Copy our Nginx server config
COPY deploy/default.conf /etc/nginx/conf.d/default.conf

# Copy the Docusaurus build output produced by CI
COPY build/ /usr/share/nginx/html/

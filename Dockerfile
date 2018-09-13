FROM node:latest
WORKDIR /usr/kubes
ADD . /usr/kubes
COPY . /usr/kubes
EXPOSE 8080
CMD ["node", "server.js"]


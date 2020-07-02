FROM node:8.10.0-alpine as builder

RUN mkdir -p /src/app
COPY . /src/app

WORKDIR /src/app

FROM node:8.10.0-alpine

RUN mkdir -p /src/app
COPY --from=builder /src/app/build /src/app/build/
COPY --from=builder /src/app/server.js /src/app/
COPY --from=builder /src/app/build/start.sh /src/app

WORKDIR /src/app

RUN npm install express -s --no-progress
RUN npm install path -s --no-progress
RUN npm install express-http-proxy -s --no-progress

EXPOSE 80

CMD ["/bin/sh", "start.sh"]
FROM node:6.9
COPY /app/ /app/
EXPOSE 8082 8083
CMD dbip=$DB_PORT_3306_TCP node app/index.js

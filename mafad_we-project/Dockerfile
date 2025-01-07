FROM node:18
WORKDIR /app
RUN apt-get update && apt-get install -y bash netcat-openbsd
#RUN apt-get update && apt-get install -y bash postgresql-client
COPY package*.json ./
RUN npm install
COPY . .
COPY wait-for-it.sh /app/wait-for-it.sh
#COPY check_postgres.sh /app/check_postgres.sh
#COPY server/server.js /app/server/server.js
COPY start.sh /app/start.sh

RUN chmod +x /app/wait-for-it.sh  /app/start.sh #/app/check_postgres.sh
RUN npm run build -- --configuration production

RUN npm install -g @angular/cli serve npm-run-all
EXPOSE 80
EXPOSE 3000
EXPOSE 4200
EXPOSE 5432
#CMD ["ng", "serve", "--host", "0.0.0.0"]
#CMD ["node server/server.js & ng serve --host 0.0.0.0"]
CMD ["./start.sh"]

#CMD ["npm start"]
#CMD ["./wait-for-it.sh","postgres","5432","--","sh","-c","node server/server.js & ng serve --host 0.0.0.0"]
#CMD ["/apt/check_postgres.sh", "&&", "./wait-for-it.sh", "172.18.0.2", "5432", "--", "serve", "-s", "dist"]
#CMD ["node","server/server.js"]

FROM mysql:latest
COPY ./initdb/init.sql /docker-entrypoint-initdb.d
EXPOSE 3306
CMD ["mysqld"]
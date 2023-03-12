MYSQL_ROOT_PASSWORD=example
MYSQL_DATABASE=mmh_ok
MYSQL_USER=philip_rich
MYSQL_PASSWORD=philip_rich
MYSQL_CONTAINER_NAME=mmh_ok

.PHONY: up restore dump logs rm stop populate push studio
up:
	mkdir -p ./mysql_data
	docker run --name $(MYSQL_CONTAINER_NAME) \
		--mount type=bind,source=$(CURDIR)/mysql_data,target=/var/lib/mysql \
		-e MYSQL_ROOT_PASSWORD=$(MYSQL_ROOT_PASSWORD) \
		-e MYSQL_DATABASE=$(MYSQL_DATABASE) \
		-e MYSQL_USER=$(MYSQL_USER) \
		-e MYSQL_PASSWORD=$(MYSQL_PASSWORD) \
		-p 3306:3306 \
		-d mysql:8

stop:
	docker stop $(MYSQL_CONTAINER_NAME)

rm: stop
	docker rm $(MYSQL_CONTAINER_NAME)
	rm -rf mysql_data

push:
	npx prisma db push

studio:
	npx prisma studio
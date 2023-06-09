PSQL_ROOT_PASSWORD=example
PSQL_DATABASE=mmh_ok
PSQL_USER=philip_rich
PSQL_PASSWORD=philip_rich
PSQL_CONTAINER_NAME=mmh_ok

.PHONY: up start stop rm push generate studio
up:
	mkdir -p ./psql_data
	docker run --name $(PSQL_CONTAINER_NAME) \
		--mount type=bind,source="$(CURDIR)/psql_data",target=/var/lib/postgresql/data \
		-e POSTGRES_DB=$(PSQL_DATABASE) \
		-e POSTGRES_USER=$(PSQL_USER) \
		-e POSTGRES_PASSWORD=$(PSQL_PASSWORD) \
		-p 5432:5432 \
		-d postgres:15-alpine

start: up
	docker start $(PSQL_CONTAINER_NAME)

stop:
	docker stop $(PSQL_CONTAINER_NAME)

rm: stop
	docker rm $(PSQL_CONTAINER_NAME)
	rm -rf psql_data

push:
	npx prisma db push

generate:
	npx prisma generate

studio:
	npx prisma studio
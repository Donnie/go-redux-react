build:
	docker-compose build --pull

dev:
	docker-compose --env-file ./.env up

sql:
	docker-compose run -e PGPASSWORD=postgres postgres psql --host=meister_db --username=meister --dbname=meister

clean:
	@echo "Cleaning Docker environment..."
	docker-compose stop
	docker-compose down -v

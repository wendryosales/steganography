hello:
	echo "Hello, World"

migrate:
	docker exec steganography_backend_1 python manage.py migrate

createsuperuser:
	sudo docker exec -it steganography_backend_1 python manage.py createsuperuser
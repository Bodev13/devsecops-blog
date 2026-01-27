# Truck Signs API

The purpose of this repository is to help you set up the Truck Signs API Django application and a PostgreSQL database, running them in separate containers on the same network using Docker.

## Prerequisites

- Python 3.8
- Docker Desktop
- V-Server

## Table of Contents

1. [Quickstart](#quickstart)
2. [Usage](#usage)



## Quickstart

1. Install the Docker Desktop for Mac users here:

https://docs.docker.com/desktop/setup/install/mac-install/

and for Windows users here:

https://docs.docker.com/desktop/setup/install/windows-install/

2. Clone the repository:

```bash
git clone https://github.com/Bodev13/truck_signs_api
cd truck_signs_api
```
3. Set the virtual environment:

• Create a virtual environment
```bash
python -m venv venv
```
• Activate the virtual environment

for Mac users:

```bash
source venv/bin/activate
```

for Windows users:

```bash
.\venv\Scripts\Activate
```

• Install dependencies:

```bash
pip install -r requirements.txt
```

4. Create a postgreSQL Database:
[How to setup Django with postgreSQL](https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-16-04)

5. Create a superuser manually:
```bash
python manage.py createsuperuser
```

6. Run migrations and the app:
```bash
python manage.py migrate
python manage.py runserver
```

## Usage

This will get the app running in a Docker container on your local machine and on the V-Server.

• Set up .env file and make sure it is added to the .gitignore

```bash
cp truck_signs_designs/settings/simple_env_config.env truck_signs_designs/settings/.env
```
• Add your v-server-ip to the .env file under:
```bash
ALLOWED_HOSTS:your-v-server-ip, localhost
```
• Create a Docker image:
```bash
docker build -t trucks_app .
```
• Create a network:
```bash
docker network create trucksigns-net
```
• Run the postgres DB container:
```bash
docker run \
--name db \
--network trucksigns-net \
-e POSTGRES_DB=trucksigns_db \
-e POSTGRES_USER=trucksigns_user \
-e POSTGRES_PASSWORD=supertrucksignsuser! \
-v trucksigns_pg_data:/var/lib/postgresql/data \
postgres
```
• Run the app container:
```bash
docker run --name trucks_app --network trucksigns-net --env-file truck_signs_designs/settings/.env -p 8020:8020 trucks_app
```
• Access the app:
```bash
https://<your_server_ip>:8020/admin
```

• Create secret keys (for .env file):

   • SECRET_KEY: 
```bash
from django.core.management.utils import get_random_secret_key
print(get_random_secret_key())
```
   • DOCKER_SECRET_KEY: [Docker secret create](https://docs.docker.com/reference/cli/docker/secret/create/)

• Collect static files manually if needed:
```bash
docker exec -it your_app python manage.py collectstatic --noinput
```
• Connect the app and/or db to the network manually if needed:
```bash
docker network connect trucksigns-net db
docker network connect trucksigns-net trucks_app
```
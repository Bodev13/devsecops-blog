# WordPress Docker Project


This repository provides a simple and reproducible Docker-based setup to run a WordPress website with a MariaDB database.

### Prerequisites

- Docker & Docker Compose installed

## Table of Contents

- [Quickstart](#quickstart)
- [Usage](#usage)


## Quickstart

1. Clone the repository

```bash
git clone https://github.com/Bodev13/wordpress.git
cd wordpress
```
2. Create and set up .env file
3. Build and start the Wordpress server container

```bash
docker-compose up --build
```
4. Visit the wordpress locally

```bash
http://localhost:8080
```
5. On your cloud vm
```bash
http://your_cloud_vm:8080
```
6. Stop and delete containers
```bash
docker-compose down
```


## Usage

This will get the app running in a Docker container on your local machine and on the V-Server.

### Set the environment variables

To launch and login to your wordpress server you can use the following variables for your .env file

```bash
#WordPress user
WORDPRESS_USERNAME=admin
WORDPRESS_PASSWORD=password
WORDPRESS_EMAIL=example@example.com

# WordPress DB settings
WORDPRESS_DB_NAME=wordpress
WORDPRESS_DB_USER=wpuser
WORDPRESS_DB_PASSWORD=wppassword!

# MariaDB settings
MARIADB_ROOT_PASSWORD=rootpass
MARIADB_DATABASE=wordpress
MARIADB_USER=wpuser
MARIADB_PASSWORD=wppassword!
```
### Building and starting Wordpress setup

In order to build the setup and launch it, use the following command

```bash
docker-compose up --build
```

### Access the Wordpress website
```bash
https://your_cloud_vm:8080
```

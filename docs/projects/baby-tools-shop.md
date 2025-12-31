# Baby Tools Shop - Dockerized Setup

### TECHNOLOGIES

- Python 3.10.10
- Django 5.1.6
- Venv

## Table of Contents
1. [Repository Description](#repository-description)
2. [Quickstart](#quickstart)
3. [Usage](#usage)
4. [Modifying the Application](#modifying-the-application)
5. [Checklist](babyshop_checklist.pdf)
6. [Dockerfile](Dockerfile)
   

## Repository Description

This repository contains the setup for the Baby Tools Shop application, containerized using Docker. The purpose of this repository is to provide an easy and reproducible environment for running the Baby Tools Shop Django application inside a Docker container.


## Quickstart

1. Install the Docker Desktop for Mac users here:
https://docs.docker.com/desktop/setup/install/mac-install/


1. Clone the repository:

```bash
   git clone https://github.com/Bodev13/baby-tools-shop
   cd baby-tools-shop
```

3. Add your IP under ALLOWED_HOSTS in the settings.py


```bash
ALLOWED_HOSTS = ['your_ip']
```

4. Buid the Docker image

```bash
docker build -t babyshop_app .
```
5. Run the Docker container

```bash
docker run -it --rm -p 8025:8025 babyshop_app
```
6. Access the application at

```bash
http://<your-server-ip>:8025/
```

## Usage

This will get the Baby Tools Shop running in a Docker container on your local machine and on the VM.


## Modifying the Application

1. To modify the application or add additional dependencies, update the requirements.txt file.
1. Rebuild the Docker image after making changes to the application code or dependencies.
1. The WORKDIR in the Dockerfile is set to /app/your_app This is where the Django project files are located.
1. If you want to change the working directory or the location of the project files, modify the WORKDIR and COPY instructions in the Dockerfile accordingly.
1. The Docker container is configured to expose port 8025. If you wish to use a different port, change the EXPOSE instruction in the Dockerfile and adjust the docker run command accordingly (e.g., -p `<new_port>`:5000).



### DA Hints

This section will cover some hot tips when trying to interacting with this repository:

- Settings & Configuration for Django can be found in `babyshop_app/babyshop/settings.py`
- Routing: Routing information, such as available routes can be found from any `urls.py` file in `babyshop_app` and corresponding subdirectories


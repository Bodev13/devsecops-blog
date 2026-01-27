# Minecraft Server (Dockerized)

## Description

This project sets up a Dockerized Minecraft server using `docker-compose`. It enables easy deployment, configuration, and persistence for a Minecraft Java Edition server.

## Table of Contents

- [Description](#description)
- [Quickstart](#quickstart)
- [Usage](#usage)

### Prerequisites

- Docker & Docker Compose installed
- Minecraft server JAR file in the root directory
- (Optional) Python with `mcstatus` installed to check server status


## Quickstart

1. Clone repository
```bash
git clone https://github.com/Bodev13/Minecraft
````
2. Create and set up the .env file

3. Build and start the Minecraft server container:
```bash
docker-compose up --build
```

## Usage

1. You can change the exposed port or Minecraft server port in the .env file.
1. Game world and configuration will be stored in ./data, so it survives container restarts.
1. (Optional) create a virtual environment and activate it
1. Install the `mcstatus` Python module:
```bash
pip install mcstatus
````
5. Run the status command locally:
```bash
mcstatus localhost:8888 status
```
6. Run the status command on your cloud VM:
```bash
your-cloud-ip:8888
```

The game settings such as maximum number of players, difficulty, and world generation type
are configurable via environment variables in the `.env` file.

Here are some examples of the environment variables:

```bash
MAX_PLAYERS=25
DIFFICULTY=hard
LEVEL_TYPE=default
ALLOW_CHEATS=true
ALLOW_NETHER=true
```
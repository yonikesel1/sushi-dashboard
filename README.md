# Sushi Analytics Dashboard

A Dashboard for SushiSwap tokens liquidity and tradable pairs.

# Stack

Backend: NodeJS with Typescript.

Frontend: React.

# Libs and Tools

- The App is hosted on AWS (EC2)
- EtherJS for interfacing with ethereum contracts
- Hardhat for mainnet fork:

  https://hardhat.org/hardhat-network/guides/mainnet-forking.html

# How to run locally:

- Clone this repo
- install docker + docker compose
- use: docker-compose up -d
- go to localhost:8080

# How to run on ubuntu:

- git clone https://github.com/yonikesel1/sushi-dashboard.git
- sudo apt-get update
- sudo apt-get install docker
- sudo apt-get install docker-compose
- sudo docker-compose up -d

# Summary of Day 1: (8 Hours)

Docker image on ubuntu machine in aws.

security groups (ports-forwarding for container)

key-pair (ssh to git, ssh to aws)

install docker and docker-compose on ubunto (apt install docker)

docker-compose.yml (build and run a layered image)

docker-composed up -d , docker-composed down.

Dockerfile - build the new image - each instruction is a layer (we want lowest number of layers)

- Extended Summary in OneNote - need to work on readme

# Day 2:

- Loaded a new instance of ec2, cloned repo and deployed my Hello World server - managed to access through public IP.
-

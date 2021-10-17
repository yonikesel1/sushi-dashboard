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

# How to run localy:

- Clone this repo
- use: docker-compose up -d
- go to localhost:8080

# Summary of Day 1: (8 Hours)

Docker image on ubuntu machine in aws.

security groups (ports-forwarding for container)

key-pair (ssh to git, ssh to aws)

install docker and docker-compose on ubunto (apt install docker)

docker-compose.yml (build and run a layered image)

docker-composed up -d , docker-composed down.

Dockerfile - build the new image - each instruction is a layer (we want lowest number of layers)

- Extended Summary in OneNote - need to work on readme

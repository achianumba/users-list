FROM node:lts-bullseye-slim

ARG GITHUB_USER

RUN groupadd -r "$GITHUB_USER" && useradd -r -g "$GITHUB_USER" "$GITHUB_USER"

WORKDIR /home/@arinze

COPY . . 

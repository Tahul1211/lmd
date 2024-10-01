FROM node:18.16.0-bullseye-slim

RUN apt-get update && \
    apt-get install -y \
    ffmpeg \
        webp \
        git \
    && \
    apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/Tahul1211/lmd.git /lmd
WORKDIR /lmd
RUN npm install
CMD ["node", "index.js"]

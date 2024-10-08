FROM node:18.16.0-bullseye-slim

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        ffmpeg \
        webp \
        git \
        ca-certificates && \ 
    rm -rf /var/lib/apt/lists/* && \
    apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/*
    
RUN git config --global http.sslVerify false && \
    git clone https://github.com/Tahul1211/lmd.git /lmd

WORKDIR /lmd

RUN npm install

CMD ["node", "index.js"]

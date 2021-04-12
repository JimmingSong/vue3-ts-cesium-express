FROM registry.cn-hangzhou.aliyuncs.com/insoz/node:git

RUN mkdir -p /data2/Service
WORKDIR /data2/Service

COPY . /data2/Service

RUN npm install

EXPOSE 8080

CMD ["node", "server/index.js"]

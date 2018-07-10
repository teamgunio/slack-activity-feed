FROM node:carbon

ENV WORKDIR /var/lib/gunio
RUN mkdir -p $WORKDIR
WORKDIR ${WORKDIR}

COPY dist dist
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install --production

CMD ["npm", "run", "serve"]

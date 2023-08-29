FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/salmanytofficial/XLICON-MD /root/salmanytofficial
WORKDIR /root/salmanytofficial/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]

FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/salmanytofficial/XLICON-MD /root/XLICON-MD
WORKDIR /root/XLICON-MD/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]

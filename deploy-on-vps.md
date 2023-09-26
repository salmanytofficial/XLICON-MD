## Deploy on VPS or PC.
- You need to Install git,ffmpeg,curl,nodejs,yarn with pm2 
   1. Install git ffmpeg curl 
      ```
       sudo apt -y update &&  sudo apt -y upgrade 
       sudo apt -y install git ffmpeg curl
      ```
   2. Install nodejs 
      ```
      sudo apt -y remove nodejs
      curl -fsSl https://deb.nodesource.com/setup_lts.x | sudo bash - && sudo apt -y install nodejs
      ```
 
   3. Install yarn
      ```
      curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - 
      echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
      sudo apt -y update && sudo apt -y install yarn
      ```

   4. Install pm2
      ```
      sudo yarn global add pm2
      ```

   5. Clone Repo and install required packages
      ```
      git clone https://github.com/salmanytofficial/XLICON-MD
      cd XLICON-MD
      yarn install --network-concurrency 1
      ```

   6. Create an env file for ENV. 
      ```
      touch config.env
      nano config.env
      ```
      copy paste lines below.

      ```
      OWNER_NUMBER=254721224079
      MONGODB_URI="mongodb+srv://*************"
      SESSION_ID = XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0orNks3bnZTdEZieHJFazlFTUxGNlZDNnl1eWwwR1QrQ1F6T2VvQnVsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYWhNSFBvSkg2ZC9sbjlHUXoreVlEMnVyMXlMSTM1ay9hZzdzL0dEM0tRTT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzSjFNbHlNZFdmTWRlb3ZYZ3lzdDNVUUt2a2tEaXBqRUpRN2lTY1ZnaFhZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5dWhXRHRGdExzY1gzZlhIclNFdGNQc3loK29VTUdlODdhWi9XMFNOZjB3PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtIekNhdXErNGpHNlliNGkxNVlxem9rRFAyZW8zRFFLWUVzV202Q1Vkbmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImsyaVBOdVp1NngyN1hRdGF2dzAzU2dQYXVjVFdLclk5SWYrcVpDOFRUVzg9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZOGtuVmZrcDE0WTRBVDA2bEluNU5jQXMxT3BhNTRZdjNBMUFYTjIrMlZtcTRNMU9BS1kvcjlKQnFMQSs4ZlBIU0dsK04xbWtBMlorVU4veW1OUzBEdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjI0NCwiYWR2U2VjcmV0S2V5IjoiMWZOVVdiMzBNMHAyYUpsellZNHkxNTN5ZTNXWG9SajArYjdEK3BPRkpxMD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiOHBlZTdUdFFUenVnb0Z5bFJUQ0tFZyIsInBob25lSWQiOiJhMGMwZjFlMC1kZTNjLTQyNjMtOTU3Yy1lNTBmYzg5ZTQxYzciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOTcwUkRKZitDYUFTc1p4VFBlVjJKZytnaExzPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQZnBkcFVyV21IOXRoOUF5bFB2V2w2cUNxcFk9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNOK1pnOTBFRUxQb3k2Z0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImkzSXJ5KzYyZWJrNDVuNE5GN1IwSDFDelB1MDkrdDRyeENlOGE0Z2RIR2M9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik5IL2hpL1BYbjd0N3ppMmZvRFUrZWtoVTJwaURDM0tGbFlGWnErbytzWjlUWGdkcnZqNzV5Y1VLRDRnaUFTTUNuL3NnS1RZMDlTcUVKVWhXd2tmZkRRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2NkNVMHdyU0FnOVFueVA1bnA5OXE2SGdBQ2dzUkJBRlNrb0FWc1ZVVlEwaXNtS1l0RC91bzBsZnBKS3RmK1N2NkhmL2EvMkxEOXhzcnZmTVFLRnlCUT09In0sIm1lIjp7ImlkIjoiMjU0NzIxMjI0MDc5OjFAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzIxMjI0MDc5OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWXR5Szh2dXRubTVPT1orRFJlMGRCOVFzejd0UGZyZUs4UW52R3VJSFJ4biJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTY5NTc0MDk4MX0=
      THUMB_IMAGE = "https://telegra.ph/file/8f6f537cc4103b48f3783.jpg"
      port = 5000
      email = kevinmugera12@gmail.com
      global_url = "www.instagram.com/itz_shaikho/_"
      OWNER_NAME = kevin-Bot
      AUTO_REACTION = false
      FAKE_COUNTRY_CODE = +1
      READ_MESSAGE = false
      PREFIX = .
      WARN_COUNT = 3
      DISABLE_PM = false
      ANTI_BAD_WORD = "fuck"
      LEVEL_UP_MESSAGE= true
      WELCOME_MESSAGE =  "*Hi,* @user \n*Welcome in* @gname \n*Member count* : @count th"
      THEME= GOJO
      WORKTYPE = private
      PACK_INFO = "XLICON MD;WA BOT"
      ANTILINK_VALUES = "chat.whatsapp.com"
      
      ```
      ctrl + o and ctrl + x, To save and exit

   7. start and stop bot

      To start bot ``` npm start ```,
      To stop bot ``` npm stop ```

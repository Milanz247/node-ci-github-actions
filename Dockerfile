# Stage 1: Base Image
# අපි Node.js v18 alpine version එක පාවිච්චි කරනවා. Alpine කියන්නේ හරිම පොඩි, ආරක්ෂිත Linux distribution එකක්.
FROM node:18-alpine

# Container එක ඇතුලේ app එකට folder එකක් හදනවා
WORKDIR /usr/src/app

# App dependencies ටික copy කරනවා
# package.json සහ package-lock.json විතරක් මුලින්ම copy කරනවා. මේක caching වලට හොඳයි.
COPY package*.json ./

# Dependencies install කරනවා
RUN npm install --production

# App source code එක copy කරනවා
COPY . .

# App එක listen කරන port එක expose කරනවා
EXPOSE 3000

# Container එක පටන් ගද්දී app එක run කරන command එක
CMD [ "node", "app.js" ]

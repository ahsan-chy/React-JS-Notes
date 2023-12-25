
# Docker

Docker is a set of **platform as a service** products that use OS-level virtualization to deliver software in packages called **containers**. 

The software that hosts the containers is called Docker Engine. 

![Docker Image](https://ml.globenewswire.com/Resource/Download/c83c4886-b215-4cf0-a973-64b8f65e7003)


- Docker is like container(Bucket). 

- Docker packages software into standardized units called containers that have everything the software needs to run including **libraries, system tools, code, and runtime.** 

- Using Docker, you can quickly deploy and scale applications into any environment and know your code will run.
![Docker features](https://accesto.com/blog/static/18c31d00e830e4818d2f40bb4b22256c/29007/docker-img-1.png)



### [Container in Docker](https://www.docker.com/resources/what-container/)
A Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings.
![Docker APPs](https://www.docker.com/wp-content/uploads/2021/11/container-what-is-container.png.webp)


## [Docker Containerize an application](https://docs.docker.com/get-started/02_our_app/)

![Dockerize](https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2Fmedia%2Fimages%2F8ff14a11-7dab-48d9-bb44-83812d348ffb.png&w=750&q=75)


#### Step 1 

Create React app
```javascript
npx create-react-app dockerapp
```

#### Step 2
Now create `Dockerfile` in dockerapp & setup few things there

```javascript
# Dockerfiles

FROM node:alpine AS development

ENV NODE_ENV development

# Add a work directory

WORKDIR /app

# Cache and Install dependencies
COPY package.json .

RUN npm install


# Copy app files
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]
```


#### Step 3

Create `.dockerignore` file and those files and folders which you want to ignore.

```javascript
node_modules
.gitignore
build
npm-debug.log
*.md
.git
```

#### Step 4

Now Create File `docker-compose.yml`. 

```javascript
version: "3.8"

services:
  app:
    container_name: app-dev
    image: app-dev
    build:
      context: .
      target: development
    volumes:
      - ./src:/app/src
    ports:
      - 3000:3000
```


#### Step 5

Now run this command to start app for development.
```javascript
docker compose up -d --build
```


#### Refference Links to Containerize
- [Daily Dev Blog to Containerize React JS App](https://dev.to/karanpratapsingh/dockerize-your-react-app-4j2e)

- [geeksforgeeks How to Containerize](https://www.geeksforgeeks.org/how-to-dockerize-a-reactjs-app/)

- 




![DOCKER FILE](https://miro.medium.com/max/1079/1*3ds-PdxGGMN-ZzJH95_lsA.png)
# Docker Commands

```javascript
docker ps          # current containers
docker run         # create and start the container
docker create      # create container
dokcer exec        # to run commnads in container for once
docker volume      # create a docker volume
docker network     # create a docker network
docker rm          # remove container 
docker images      # list the images
docker rmi         # remove image
docker build       # build a new image from dockerfile
docker push        # push your image to docker repo
docker pull        # download an image from docker repo
docker commit      # create an image from container
```

.

.

**Docker commose up** is a docker commnad to start and run a entire app on a standalone host that contains multiple services, for example Web, DB, etc
```javascript
docker compose up
```

```javascript
docker compose up [OPTIONS] [SERVICE...]
```

**Docker-compose down** command helps to stop and remove Containers, Networks, Images, Volumes. 
```javascript
docker-compose up
```

```javascript

docker-compose stop                  #Stop services only


docker-compose down -f <file>        #Stop and remove containers, networks..

docker-compose down --volumes        #Down and remove volumes

docker-compose down --rmi <all|local>    #Down and remove images

```
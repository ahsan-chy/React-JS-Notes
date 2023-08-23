# React JS Mid-Level Folder Structure

In the project I have just set Up most used folder structure:


```javascript
React JS Folder Structure
.
├── public
|     └── index.html
├── src
    ├── assets
    |     ├── audios
    |     ├── icons
    |     ├── images
    |     ├── videos
    |     └── styles
    ├── components
    |     ├── Btn
    |	  ├── DropDownBtn
    |	  ├── inputs
    |	  ├── Modal
    |	  ├── Popups
    |	  ├── Toast
    |	  ├── Tooltip
    |	  ├── Text/Heading/Title
    |	  ├── Skeleton
    |	  └── Spiner/Loader
    ├── constants
    |     ├── Strapi.js
    |     └── Firebase.js
    ├── db
    |     └── productsData.js
    |     └── userData.js
    ├── handler
    |     └── apiHandler.js
    ├── layout
    |     ├── Header.jsx
    |     ├── Navbar.jsx
    |     ├── Breadcrumbs.jsx
    |     └── Footer.jsx
    ├── pages
    |     ├── Home.js
    |     ├── Login.js
    |     ├── Signup.js
    |     ├── Shop.js
    |     ├── Payment.js
    |     └── About.js
    ├── routers
    |     └── Routers.js
    ├── .env
    ├── app.js
    ├── index.css
    ├── index.js
|   
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## Folders include

- `Public`
- `Assests`
- `Components`
- `Constants`
- `db`
- `handler`
- `layout`
- `Pages`
- `Routes`
- `.env`
- `.gitignore`
- `package.json`


### Public 

Public mainly contain root file **`index.html`** which help to run react project.

### Assests

In Assets folder you can put following things.

- Images
- Video
- Icons
- CSS

### Components

Component will have all the components which are reuseable anywhere in website. Like
    - Button 
    - Cards
    - DropDownBtn
    - inputs
    - Modal
    - Popups
    - Toast
    - Tooltip
    - Text/Heading/Title
    - Skeleton
    - Spiner/Loader

### Constants

Constants folder have **Tokens,** logins, and those details which we don't want to share with public. Like **Env** files are used to store sensitive credentials such as **API keys.**
An environment variable supports storing the API link at one location so that we do not need to change the Link in each file manually.


```javascript
const API_BASE_URL = 'https://api.example.com';
const MAX_ITEMS_PER_PAGE = 10;
```

### db

Here we provide JSON Formate of data in frontend in React APP.
- products data
- users data


### handler

Handler will help us to make handler API Data. Like

- Get
- Post
  [Reference Link to Create webHandler](https://github.com/khawarwaraich1995/Helping-Society/blob/master/src/data/remote/WebHandler.js)


### Layout

This is just a special folder for **placing any layout based components.**
- Header 
- Footer 
- Breadcrumbs
- Navbar
- Sidebar



### Pages

Pages will have all the pages which we will use in website.


### Routes

Router will have all the Routes in website. Where we are going and where we want to go.


### .env

Env files are used to store sensitive credentials such as API keys.


### .gitignore

.gitignore file contain all those files,folders name which user want to skip to push online. If you don't want to push any specific file/folder then you should put their name in .gitignore


### package.json
 package.json file is core to the Nodejs ecosystem and is a fundamental part of understanding and working with Node. js , npm , and even modern JavaScript . This file is used as a manifest, storing information about applications, modules, packages, and more.
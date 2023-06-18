# React JS Advance Level Folder Structure

In the project directory, you can run:
### `npm start`


## Folders include
- `Assests`
- `Components`
- `Constants`
- `db`
- `handler`
- `layout`
- `Pages`
- `plugins`
- `Routes`
- `Utils`


### Assests

Assets folder will have two things. 
- CSS
- Images

### Components
Component will have all the components which are reuseable anywhere in website.

### Constants
Constants folder have **Tokens,** logins, and those details which we don't want to share with public. Like **Env** files are used to store sensitive credentials such as **API keys.**
An environment variable supports storing the API link at one location so that we do not need to change the Link in each file manually.
### db
Here we provide JSON Formate of data in frontend in React APP. 
### handler
Handler will help us to make handler API Data. Like 
- Get 
- Post
[Reference Link to Create webHandler](https://github.com/khawarwaraich1995/Helping-Society/blob/master/src/data/remote/WebHandler.js)
### Layout
This is just a special folder for **placing any layout based components.**
### Pages
Pages will have all the pages which we will use in website.
### Routes
Router will have all the Routes in website. Where we are going and where we want to go.

### .env
Env files are used to store sensitive credentials such as API keys.
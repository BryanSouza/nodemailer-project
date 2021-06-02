# nodemailer-project
![dependencies](https://img.shields.io/david/bryansouza/nodemailer-project)
![typescript](https://img.shields.io/github/languages/top/bryansouza/nodemailer-project)

Simple API using nodemailer to send emails

## Usage
### 1. Installing dependencies
```
yarn install
```

### 2. Environment variables
   
First, create a `.env` file in the root of the project.

Then, add these variables: 
`EMAIL_HOST`
`EMAIL_PORT`
`EMAIL_FROM`
`EMAIL_PASSWORD`
   
### 3. Starting the server
```
yarn run dev
```

### 4. Rest Client *(Optional)*
After installing the `Rest Client` extension on `vscode`, open the `requests.rest` file to send HTTP requests.

## How it works
In this project, handlebars was applied to create a template in order to send emails with nodemailer.

### .env Configuration

Create a `.env` file in the root directory of the project with the following variables:

```plaintext
# any password service that support usernmae and password as sign values
# middleware only works on cookies with `token` as key
PWD_SERVICE=http:/localhost:8080/
# app yo want to be redicreted after user got token
APP_SERVICE_URL=http:/localhost:8081/
```

Replace the placeholder values with your actual secret key, application URL, 

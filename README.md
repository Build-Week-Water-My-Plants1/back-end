# WATER MY PLANTS - BACK END

## Deployed to HEROKU
BASE URL:  - https://water-my-plant1.herokuapp.com/


# API ENDPOINTS

## Register a New User

HTTP Method: POST
URL:/api/auth/register

### Body

| NAME | TYPE | REQUIRED |
|------|------|----------|
| username | string | Yes |
| phone_number | integer | Yes|
| password | string | Yes|

EXAMPLE 

```
  {
      "username": "NewUser",
      "phone_number": 123789,
      "password": "123abc"
  }

```

## Login

HTTP Method: POST 
URL:/api/auth/login

### Body
| NAME | TYPE | REQUIRED |
|------|------|----------|
| username | string | Yes |
| password | string | Yes |

EXAMPLE

```
  {
      "username": "NewUser",
      "password": "123abc"
  }

```

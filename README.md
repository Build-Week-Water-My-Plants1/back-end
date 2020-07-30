# WATER MY PLANTS - BACK END

## Deployed to HEROKU
BASE URL:  - https://water-my-plant1.herokuapp.com/


# API ENDPOINTS

## POST Requests

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
## Add Plant

HTTP Method: POST
URL: api/plants

### Body 
| NAME | TYPE | REQUIRED |
|------|------|----------|
| id | integer | Yes |
| nickname | string | Yes |
| species | string | Yes |
| h2oFrequency | string | Yes |
| plant_users_id | integer | Yes |

EXAMPLE

```
  {
    "id": 2,
    "nickname": "Croton",
    "species": "Croton",
    "h2oFrequency": "every day",
    "plant_users_id": 2
  }
```

## GET Requests
HTTP Method: GET

### Get Users
> /api/users

### Get Users By ID
> /api/users/:id

### Get Plants
> /api/plants

### Get Plants By ID 
> /api/plants/:id

## PUT Requests

### Update User By ID
> /api/users/:id

### Update Plant By ID
> /api/plants/:id

## DELETE Requests

### Delete User By ID
> /api/users/:id

### Delete Plant By ID
> /api/plants/:id



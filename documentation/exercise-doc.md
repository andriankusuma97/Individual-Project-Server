# Rent Room API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `GET /exercise`
- `POST /exercise/bmi`
- `GET /exercise/rekomendasi/:id`
-  `GET /exercise/type`

&nbsp;

## 1. POST /register

Description:
- Create new User

Request:

_Request Header_

```json
  not needed
```

_Request Body_

```json
{
  "username": "string",
  "email": "string",
  "password": "string",

}
```

_Response (201 - Created)_

```json
{
    "id": "integer",
    "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
    "message": [
        "username cannot be empety",
        "email cannot be empety",
        "format must be email",
        "password cannot be empety",
        "minimum password length is 5"
    ]
}
```
&nbsp;

## 2. POST /login

Description:
- Login User get access_token

Request:

_Request Header_

```json
  not needed
```

_Request Body_

```json
{
  
  "email": "string",
  "password": "string",
  

}
```

_Response (200 - OK)_

```json
{
  
  "access_token": "<access_token>",
  "email": "<email>",

}
```

_Response (400 - Bad Request)_

```json
{
    "message": "invalid email/password"
}
```

&nbsp;

## 3. GET /exercise

Description:
- show all data exercise

Request:

_Request Body_

```json
{
    "bodyPart": "string",
    "equipment": "string",
    "gifUrl": "string",
    "id": "string",
    "name": "string",
    "target": "string"

}
```

_Response (200 - OK)_

```json
[ 
 {
      "bodyPart": "waist",
      "equipment": "body weight",
      "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
      "id": "0001",
      "name": "3/4 sit-up",
      "target": "abs"
  }
 {
      "bodyPart": "chest",
      "equipment": "body weight",
      "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
      "id": "0001",
      "name": "pull up",
      "target": "abs"
  }
]
... dst
```

&nbsp;

## 4. POST /exercise/bmi

Description:
- input wight and height for get data in 3rd api

Request:

_Request Header_

```json
{
  "access_token": "<your access token>"
}
```
_Request Body_

```json
{
  "weigth": "string",
  "height": "string",

}
```

_Response (201 - OK)_
```json
[
  {"bmi":"19.2",
  "weightCategory":"Normal Weight"
  }
  {"bmi":"27.2",
  "weightCategory":"Obase"
  }
]
```

&nbsp;

## 5. GET /exercise/rekomendasi/:id

Description:
- Get  accommodation by id include user and type from database

Request:

_Request Header_

```json
{
  "access_token": "<your access token>"
}
```

_Request Params_

```json
 const id = request.params
```
_Response (200)_

```json
[ 
    {
      " bodyPart":"string",
      "equipment":"string",
      "gifUrl":"string",
      "id":"string",
      "name":"string",
      "target":"string"
    }
    {
      " bodyPart":"string",
      "equipment":"string",
      "gifUrl":"string",
      "id":"string",
      "name":"string",
      "target":"string"
    }
]
```
_Response (404 - Not Found)_

```json
{
  "message": "Data Not Found"
}
```

&nbsp;

## 6. GET /exercise/type

Description:
- Get  all type from database

Request:

_Request Header_

```json
{
  "access_token": "<your access token>"
}
```
_Response (200 - OK)_

```json
[
    {
        "id": 1,
        "name": "Melatidorz",
        "createdAt": "2023-03-13T14:42:44.966Z",
        "updatedAt": "2023-03-13T14:42:44.966Z"
    },
    {
        "id": 2,
        "name": "Mawardorz",
        "createdAt": "2023-03-13T14:42:44.966Z",
        "updatedAt": "2023-03-13T14:42:44.966Z"
    }
]

```


&nbsp;

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```
# **API User Guide**

Server located at: 

|**Table of Contents:**|
|-|
|[Authentication Routes](#Authentication-Routes)|
|[User Routes](#User-Routes)|
|[Follow Routes](#Follow-Routes)|
|[Post Routes](#Post-Routes)|

### **Authentication Routes**

#### POST */api/register/user*

Creates a new user account.
Returns an object with user info.

Request:
```javascript
{
  username: "tyler", // string (required), must be unique
  password: "testing123!", // string (required) [ 8-20 total characters | min. 1 special character | min. 1 digit | min. 1 letter]
  birthdate: // string
}
```
Response:

```javascript
{
    bio: "I am a software engineer"
    birthdate: "1999-03-28"
    coverimg: null
    created_at: "2020-10-08T18:48:43.075Z"
    education: "Lambda School"
    id: 1
    location: null
    nickname: null
    phone_number: null
    profileimg: null
    relationship: null
    updated_at: "2020-10-08T18:48:43.075Z"
    username: "tyler"
    workplace: null
}
```

### **User Login** 
[back to top](#api-user-guide)
#### POST */api/login*

Validates user's credentials.
Returns an object with user info and a JSON web token.

Request:
```javascript
{
  username: "firstnamelastname", // string (required)
  password: "testing123!", // string (required)
}
```

Response:
```javascript
{
    "user": {
        "id": 1,
        "username": "tyler",
        "bio": "I am a software engineer",
        "profileimg": null,
        "coverimg": null,
        "relationship": null,
        "created_at": "2020-10-08T18:48:43.075Z",
        "updated_at": "2020-10-08T18:48:43.075Z",
        "phone_number": null,
        "nickname": null,
        "location": null,
        "workplace": null,
        "education": "Lambda School",
        "birthdate": "1999-03-28"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0eWxlciIsImlhdCI6MTYwMjYwNjM2OCwiZXhwIjoxNjAyNjA5OTY4fQ.W7M0mbnjOqjuHhul3XJoVAdXj4tytD4demBvjNlrLhA"
}
```

## **User Routes**
[back to top](#api-user-guide)

#### GET *api/users*

Returns an array of users. Available to all users.

Request:
```javascript
// No input needed
```
Response:
```javascript
[
    {
        "id": 2,
        "username": "jackson"
    },
    {
        "id": 3,
        "username": "piper"
    }
]
```

#### GET *api/users/:id*

Return a user object at the specified id.

Request:
```javascript
// No input needed
```
Response:
```javascript
{
    "id": 1,
    "username": "tyler",
    "bio": "I am a software engineer",
    "profileimg": null,
    "coverimg": null,
    "relationship": null,
    "created_at": "2020-10-08T18:48:43.075Z",
    "updated_at": "2020-10-08T18:48:43.075Z",
    "phone_number": null,
    "nickname": null,
    "location": null,
    "workplace": null,
    "education": "Lambda School",
    "birthdate": "1999-03-28"
}
```
#### PUT *api/users/:id*

Updating an user profile. You must be logged in as owner of the user account. You cannot modify id. 

Request:
```javascript
{
	"name": "tylert" // required
}
```
Response:
```javascript
{
    "id": 1,
    "username": "tylert",
    "bio": "I am a software engineer",
    "profileimg": null,
    "coverimg": null,
    "relationship": null,
    "created_at": "2020-10-08T18:48:43.075Z",
    "updated_at": "2020-10-08T18:48:43.075Z",
    "phone_number": null,
    "nickname": null,
    "location": null,
    "workplace": null,
    "education": "Lambda School",
    "birthdate": "1999-03-28"
}
```
#### DELETE *api/users/:id*

Return a user object at the specified id.

Request:
```javascript
// No input needed
```
Response:
```javascript
true
```


## **Follow Routes**
[back to top](#api-user-guide)

#### GET *api/friends:id*

Return a list of all users that you follow.

Request:
```javascript
// No input needed
```
Response:
```javascript
[
    {
        "id": 3,
        "user_id": 1,
        "friend_id": 3,
        "username": "piper",
        "password": "$2a$10$1ICzOCv5dCi0OFxpW5xKau.WI./77OwacYuxQdinHNueMaDkqHMnS",
        "bio": "food critic",
        "profileimg": null,
        "coverimg": null,
        "relationship": null,
        "created_at": "2020-10-08T22:13:20.892Z",
        "updated_at": "2020-10-08T22:13:20.892Z",
        "phone_number": null,
        "nickname": null,
        "location": null,
        "workplace": null,
        "education": "none",
        "birthdate": "2020-09-27"
    },
    {
        "id": 2,
        "user_id": 1,
        "friend_id": 2,
        "username": "jackson",
        "password": "$2a$10$r4tGsMTOnPwiK6phZdml/.GslOH8.vHGQ/4Kq3fLEAIoem38nWdBW",
        "bio": null,
        "profileimg": null,
        "coverimg": null,
        "relationship": null,
        "created_at": "2020-10-08T22:11:47.335Z",
        "updated_at": "2020-10-08T22:11:47.335Z",
        "phone_number": null,
        "nickname": null,
        "location": null,
        "workplace": null,
        "education": null,
        "birthdate": "2020-10-01"
    }
]
```
### GET *api/friends/:id/opp*

Return a list of all users who follow you.

Request:
```javascript
// No input needed
```
Response:
```javascript
[
    {
        "id": 3,
        "user_id": 3,
        "friend_id": 1,
        "username": "piper",
        "password": "$2a$10$1ICzOCv5dCi0OFxpW5xKau.WI./77OwacYuxQdinHNueMaDkqHMnS",
        "bio": "food critic",
        "profileimg": null,
        "coverimg": null,
        "relationship": null,
        "created_at": "2020-10-08T22:13:20.892Z",
        "updated_at": "2020-10-08T22:13:20.892Z",
        "phone_number": null,
        "nickname": null,
        "location": null,
        "workplace": null,
        "education": "none",
        "birthdate": "2020-09-27"
    },
    {
        "id": 4,
        "user_id": 4,
        "friend_id": 1,
        "username": "luis",
        "password": "$2a$10$mCsJBY4fOJGVrtWhVIdzAuABoeGHqlyjILwc/pPvFp3AkfTOR9gvK",
        "bio": null,
        "profileimg": null,
        "coverimg": null,
        "relationship": null,
        "created_at": "2020-10-08T22:15:05.311Z",
        "updated_at": "2020-10-08T22:15:05.311Z",
        "phone_number": null,
        "nickname": null,
        "location": null,
        "workplace": null,
        "education": null,
        "birthdate": "1990-08-23"
    }
]
```
#### POST *api/friends/:id*

Follow the user at id {friend} posted to the logged in users id (/:id). This then registers a relationship between the two users. 

Request:
```javascript
{
    friend: 2
}
```
Response:
```javascript
[
    {
        "company_id": 1,
        "company_name": "Lambda School",
        "company_description": "Redefining education"
    },
    {
        "company_id": 2,
        "company_name": "Apple Inc",
        "company_description": "Creating the best products for you"
    },
    {
        "company_id": 3,
        "company_name": "Google Inc",
        "company_description": "Testing a random description here, another one"
    }
]
```

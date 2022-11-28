## Social media API (SMA)


Command line app that helps you to control of your employees.
- Register or Delete users.
- Interact with friends, sharing thoughts.

## Content
- [Functionality](#Functionality)
- [Dependencies](#Dependencies)
- [Installation](#Installation)
- [Deployment](#Deployment)
- [Contact](#Contact)

## Functionality

- Add, delete or update users.
- Share thoughts, update them and react.
- Create a friend list
- Add or remove friends.




## Dependencies

This app was made with:

* Javascript
* Insomnia
* Express
* MONGO DB



## Installation

Clone the repository 

- NPM install 
- Node server.js

install Node JS, MongoDB and Insomnia 



## Deployment

Open Insomnia and follow the routes

For Users:

* Get all users: `GET` ![Captura de Pantalla 2022-11-28 a la(s) 12 40 59](https://user-images.githubusercontent.com/104468646/204355677-81de032c-b9d1-4a65-80da-2e6a6f81b607.png)




* Get user by ID: `GET` http://localhost:3001/api/users/:userID

<img width="1017" alt="Captura de Pantalla 2022-11-28 a la(s) 12 44 08" src="https://user-images.githubusercontent.com/104468646/204355830-a8a5d44c-cc36-4f36-b298-0b49213c5ba1.png">


* Create a new user: `POST` http://localhost:3001/api/users
* 
<img width="965" alt="Captura de Pantalla 2022-11-28 a la(s) 12 45 32" src="https://user-images.githubusercontent.com/104468646/204356095-3adc800e-a754-4687-b92c-695be6c8090e.png">


```

{
    "username": "Erick",
    "email": "erick@mail.com"
}
```

* Update a user: `PUT` http://localhost:3001/api/users/:userID
```
{
    "email": "erickNajera@mail.com"
}
```
<img width="957" alt="Captura de Pantalla 2022-11-28 a la(s) 12 48 36" src="https://user-images.githubusercontent.com/104468646/204356625-bb4acfc8-a432-456a-a95d-895cd98328ee.png">


* Delete a user: `DELETE` http://localhost:3001/api/thoughts/:thoughtID
* 

<img width="1106" alt="Captura de Pantalla 2022-11-28 a la(s) 12 49 46" src="https://user-images.githubusercontent.com/104468646/204356854-51d0b569-28c6-4f3b-8610-04fe7cb0fe09.png">


For friends:

* Add a friend to user's friend list: `POST` http://localhost:3001/api/users/:userID/friends/:friendID

<img width="1139" alt="Captura de Pantalla 2022-11-28 a la(s) 12 50 54" src="https://user-images.githubusercontent.com/104468646/204357071-b9b8b0e3-2bc3-4546-b666-62989b282111.png">


* Delete a friend from a user's friend list: `DELETE` http://localhost:3001/api/users/:userID/friends/:friendID

<img width="1074" alt="Captura de Pantalla 2022-11-28 a la(s) 12 51 09" src="https://user-images.githubusercontent.com/104468646/204357118-f3a36c41-cacd-422c-bab0-6fb83c1c16ec.png">

 thoughts:

* Create a new thought: `POST` http://localhost:3001/api/thoughts
```
{
    "thoughtText": "love food",
    "username": "Pedro",
    "userId": "6384f7c035f4b53bb8fd0f7a"
}
```
<img width="979" alt="Captura de Pantalla 2022-11-28 a la(s) 12 51 40" src="https://user-images.githubusercontent.com/104468646/204357218-b2cea398-87da-4349-add7-b48bafa1fa84.png">


* Get all thoughts: `GET` http://localhost:3001/api/thoughts
* Get thought By ID: `GET` http://localhost:3001/api/thoughts/:thoughtID
* Update a thought: `PUT` http://localhost:3001/api/thoughts/:thoughtID
* Delete a thought: `DELETE` http://localhost:3001/api/thoughts/:thoughtID

For Reactions:

* Add a reaction to thought's list: `POST` http://localhost:3001/api/thoughts/:thoughtID
```
{
    "reactionBody": "Loving food too!",
	"username": "Larissa"
}
```


<img width="1130" alt="Captura de Pantalla 2022-11-28 a la(s) 12 55 06" src="https://user-images.githubusercontent.com/104468646/204357912-add3c197-8456-4474-93c6-583b80283e7d.png">

* Delete a reaction: `DELETE` http://localhost:3001/api/thoughts/:thoughtID/reactions/:reactionID



## Contact

- David Vallejo 


(https://github.com/Vallejo1194/SNA-C18)
 mailto:adrian.vallejo94@gmail.com

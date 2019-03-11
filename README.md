# READ ME

## Project information
1. [Client Deployed Site](https://nathanfee.github.io/iron-client/)

2. [Client Repository](https://github.com/NathanFee/iron-client)

3. [API Deployed Site](https://iron-api.herokuapp.com/)

4. [API Repository](https://github.com/NathanFee/iron-api)

## Project Idea
```md
A single-page web application to create and post workout challenges.
```

## Write between 3-5 user stories

```md
1. As a user, I want to be able to sign-up, sign-in and log-out of my own account.
2. As a user, I want all forms to clear after I fill them to protect my information.
3. As a user, I want to be notified all actions, including successful/failed actions.
4. As a user, I want to be able to see when I am logged in.
5. As a user, I want to be able to change my password.
6. As a user, I want to be able to create a workout challenge.
7. As a user, I want to be able to see a challenge I have created.
8. As a user, I want to be able to see challenges others have created.
9. As a user, I want to be able to update a challenge I have created.
10. As a user, I want to be able to delete a challenge I have created.
```

## Planned tables and columns

```md
A users table with columns for username, email, password.
A challenge table, with a column for name and a description of the challenge.
```

## ERD (entity relationship diagram)
![ERD](https://i.imgur.com/oQKSeQQ.jpg)

## Routing
```md
POST	/sign-up	users#signup
POST	/sign-in	users#signin
DELETE	/sign-out	users#signout
PATCH	/change-password	users#changepw
GET	/challenge	workouts#index
POST	/challenges	games#create
GET	/challenges/:id	games#show
PATCH	/challenges/:id	games#update
```

## Wireframes
![Wireframes](https://i.imgur.com/my5Wnhz.jpg)

## Mock-up
![Mock-up](https://i.imgur.com/PbvyEvH.png)

## Timetable
```md
I plan to follow the provided schedule allowing one day for each section,
moving to the next section if I complete a section early.
```

## Technologies Used
```md
1. Atom
2. Be Focused (pomodoro app)
3. HTML
4. CSS
5. Javascript
6. Bootstrap
7. Ruby/Rails
8. Heroku
9. Handlebars
10. Pages (Mock-up)
11. Postgresql
```

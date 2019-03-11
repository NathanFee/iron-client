# READ ME

## Project Idea
```md
A web application to create workouts. I wanted to create an application that would be useful and be able to be expanded upon.
```

## Write between 3-5 user stories

```md
1. As a user, I want to be able to sign-up, sign-in and log-out of my own account.
2. As a user, I want all forms to clear after I fill them to protect my information.
3. As a user, I want to be notified all actions, including successful/failed actions.
4. As a user, I want to be able to see when I am logged in.
5. As a user, I want to be able to change my password.
6. As a user, I want to be able to create multiple workouts.
7. As a user, be able to select which excersizes get added to each workout.
8. 7. As a user, be able to change which excersizes are in each workout after it has been created.
9. As a user, I want to be able to scroll through my workouts.
```

## Planned tables and columns

```md
A users table with columns for username, email, password.
A workouts table with a column for the name of the workout.
A excersizes table with a column for the excersize name, category, muscle_goup,
reps and sets.
```

## Create an ERD (entity relationship diagram)

These are the diagrams that show how your tables are related to one another
(one to many, many to many, etc).

Include an image (or a link to image) below.

```md
[Imgur](https://i.imgur.com/WGyGcB1.jpg)
```
## Routing

What routes will you need to make the proper request to your API?

```md
POST	/sign-up	users#signup
POST	/sign-in	users#signin
DELETE	/sign-out	users#signout
PATCH	/change-password	users#changepw
GET	/workouts	workouts#index
POST	/workouts	games#create
GET	/workouts/:id	games#show
PATCH	/workouts/:id	games#update
GET	/excersizes	workouts#index
POST	/excersizes	games#create
GET	/excersizes/:id	games#show
PATCH	/excersizes/:id	games#update

```

## Wireframes

Please create a wireframe of your planned front end.

```md
[Imgur](https://i.imgur.com/8C5uSby.jpg)
```

## Timetable

Write a basic timetable for yourself, you don't have to stick to it but it
helps to go in with a plan.

```md
I plan to follow the provided schedule allowing one day for each section,
moving to the next section if I complete a section early.
```

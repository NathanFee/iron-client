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

## Wireframes
![Wireframes](https://i.imgur.com/my5Wnhz.jpg)

## Mock-up
![Mock-up](https://i.imgur.com/PbvyEvH.png)

## Timetable
```md
I plan to follow the provided schedule allowing one day for each section,
moving to the next section if I complete a section early.

Mon 3/11 - Planning / Set-up
Tues 3/12 - API
Wed 3/13 - Client
Thur 3/14 - Bugs / Final Touches
Fri 3/15 - Present Project
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
## Development Process Story

## Phase 1: Project Planning
```
  During the planning process I reviewed the full-stack project study, and made a rough schedule with timelines, based on the recommended schedule. I created a new user stories that reflected the project requirements and built new wireframes better capture the layout of my page. Then I created an ERD to map the relationships of each entity.

  I had originally set out to create an app for creating workouts. However, I decided that I would want more relationships than I would have time for and went with a different design to ensure I met requirements in the timeframe given. This was also a very busy week personally so my free time was extra limited.

  I decided on a single one to many relationship in which a user could CRUD workout challenges. As a person who loves challeneges, especially those that seem absurd to others, I wanted to create a site where people could see and post these challeges.

```
## Phase 2: Set up
```
During this phase, I downloaded the templates, created my two git hub repositories and deployed a basic site to Github pages and heroku.
```
## Phase 3: The API
```
I started by reviewing our studies and then scaffolded my challenges. Then created curl scripts for each CRUD action and tested them against my resource. After I had my resource inherit from ProtectedController and once again tested it with curl scripts. Finally I added the relationships between the users and tested one more time.

```
## Phase 3: The Client
```
I noticed a number of areas where my code could be reused from a pervious project so I first added all the reusable parts. Then I created a menu view, where I placed a bunch of buttons for my CRUD actions. Then one by one, I created an event listeners, events, api calls, and ui displays for each action. I had started with get challenges and at that time created my handlebars template to format the results of the get action.

```

## Phase 4: Break Me / Final Touches
```
After touching up on the appearence a little, I slacked out my project to be evaluated for bugs or issues. No technical issues where noticed by my classmates so I added a little more style to my project to finish it up.
```

## Fixes/Update for Future Iterations
```
While my project meets requirements it isnt as user friendly as I would like. I could be more intuitive, with buttons on the challeges themselves. I would have also liked to have an option to see only the challeges the user created.

In addition to making my project more user friendy I would like to add the ability to accept and complete challeges from those that are posted. I would also like to display on each challenge the number of users who have accepted and completed each challenge.

```

# HARVEST - Ironhack full Stack Project 03


**The FRONT-END can be found in this link: https://github.com/pedroneto2/IRONHACK-PROJECT-03-FRONT-END**



## WHAT IS THIS APP ABOUT?

This app was designed in order to provide a way of rating the feedbacks and selective process of the companies.

## HOW IT WORKS?

**You can access the deployed site in this link: https://harvest-ironhack.netlify.app/** :point_left: :point_left: :point_left:

The back-end API can be accessed in this link: https://ironhack-harvest-app.herokuapp.com/

The companies rating can be freely accessed

In order to rate any company you must log in in the site.

The login is only trhough LINKED IN, therefore you must have a LINKED IN account.

## FEATURES

- REACT SPA
- Full Stack App
- Jest tests
- Authentication trhough LINKED IN
- clearbit Logo API integration: https://clearbit.com/logo
 
## TECHNOLOGIES

- Express
- Mongoose
- Nodemon
- Yup
- Axios
- Babel cli/core/node/preset-env
- Dotenv
- Cors
- Jest
- Supertest
- Eslint

## DEPLOYMENT

- FRONT-END: Netlify
- BACK-END: Heroku
- Data Base: MongoDB Atlas

## DEVELOPMENT SCHEMAS

**In order to develop this app, the following tools was used: Miro, Trello, Figma**

- Figma link: https://www.figma.com/file/lwChDkN0XB5SlN6DRjBsuR/Harvest?node-id=0%3A1
- Miro link: https://miro.com/app/board/o9J_lkdy84g=/?invite_link_id=409380392697

---------------------

Some screenshots of the developed ideas and structures:

Idea structure:
![idea-structure](https://github.com/pedroneto2/IRONHACK-PROJECT-03-FRONT-END/blob/master/src/images/problema-solution-schema.png?raw=true)

Database structure:
![data-base-structure](https://user-images.githubusercontent.com/66081389/146197115-c128e7c0-ad5c-478c-826d-80bfbc4612b2.png)

Back-end structure:
![back-end-structure](https://github.com/pedroneto2/IRONHACK-PROJECT-03-FRONT-END/blob/master/src/images/back-end-structure-schema.png?raw=true)

---------------------

### Available Scripts

In the project directory, you can run:

#### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.


#### `npm run test`

Runs the jest tests


#### `npm run start`

Runs the app in the production mode. Used for deployment.


----------------------------------------------------------------

#### PS: In order to run the app properly, a .ENV file must be added with the following variables:
- PORT
- CLIENT_ID
- CLIENT_SECRET
- REDIRECT_URL
- MONGODB_URL
- CORS_URL

# Meal Finder
An application made to help decide the next meal for those who are indecisive!

Fun Fact: This application was inspired by me and my wifes inability to decide on what to have for dinner. 

**Link to project:** https://meal-finder-jbsl.onrender.com
![Screenshot](./client/src/assets/mealfinder.png)

## How It's Made:

**Tech used:** React, Redux, Node, Express, Material-UI, Spoontacular API, Typescript(Backend only) 

Meal Finder has 3 ways a user can go about getting recipe suggestions.

Inputting ingredients in the search bar, browsing collections of cuisines(ex: American, Chinese, etc) and randomly using the random recipe feature.

All the options provide recipes that are fetched from the Spoontacular API. Because the recipe data from each of them has a very similar format (title, url, image), I was able to create one react component called PaginatedResults and utilized it multiple times to display the recipe results to the user based on the method they went about getting the recipes.

Users also have the ability to save recipes they want for later use. This was simply done using local storage. 

## Lessons Learned:
• You can use one react component to display different types of data if they share a similar format instead of making multiple files to display only one set of data. 

## Installation Guide:
Click on the green button on the right side of the repo that says "Code" and copy the link of the repo.

After forking the repo, in the terminal of your IDE of choice, enter the command "git clone" followed by the repository link.

The next step is to install the dependencies, in your terminal enter "npm install" to install the backend dependencies, once done enter "cd client" to and then enter "npm install" again to install the frontend dependencies. It may be easier to have two seperate terminals for this step.

The last step is to start both the backend server and the client side of the application.

  • To start the backend, make sure you are in the root directory and enter "npm run start" in the terminal. If it starts up correctly, you should see "Server listening on Port 3001"
  
  • To start the frontend, change the directory to client by entering "cd client" in the terminal, then enter "npm run start again". If you can see the landing page of the application after this than you have successfully installed MealFinder!

NOTE: To have the application successfully make API calls you need to make an account at https://spoonacular.com/food-api and set up your API key in the project. Your API key can be found in the dashboard after an account
is made.
Once you have your API key, create a .env file in your application and enter REACT_APP_KEY = *enter your API key here*

## Deployment Guide:
The application is currently deployed on render. To deploy your own version of the application, here are the steps. 
Before anything else, You need to have an account on https://dashboard.render.com/ and have your copy of the project on your github.
On the dashboard of render web service choose new web service, and then choose build and deploy from a git repository.
Connect your github account to render, and choose the copied repository.
On the next page the only two things you will change is the build command and the start command.
The build command should be set to - npm run heroku-postbuild
The start command should be set to - npm run start
Make sure you choose the free option for the deployment as it is initally set to starter, which is $7 a month.
You will also need to add your API key for so that the deployed application will be able to connect with the Spoontacular API. This can be done on the same page at the bottom under Environment Variables, the key should be REACT_APP_KEY, and the value should be your API key.

Once you have all that you should be able to deploy it by clicking create web service at the bottom of the page.

## Optimizations:
  A list of things I plan on doing in the near future
  • Implementing Typescript on client side.
  • Implementing Testing
  • Reworking redux store to use redux toolkit





  



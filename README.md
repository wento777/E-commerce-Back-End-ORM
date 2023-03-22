# E-commerce Back End Starter Code




 ## Description 

- This project was designed as a homework assignment for KU coding bootcamp in Module 13 
Object-Relational Mapping (ORM) Challenge: E-commerce Back End

-  Internet retail, also known as e-commerce, is the largest sector of the electronics industry, having generated an estimated US$29 trillion in 2017 (Source: United Nations Conference on Trade and Development). E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.


- Your challenge is to build the back end for an e-commerce site. You’ll take a working Express.js API and configure it to use Sequelize to interact with a MySQL database.


- Testing is key to making code maintainable, you’ll also write unit tests for each part of your code and ensure that it passes all of them.


- A major aspect of this challenge was the balance between figuring out which solution made sense and the solution that would be most efficient.


- Because this application won’t be deployed, you’ll also need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project

- Refer to the Video Submission GuideLinks to an external site. on the Full-Stack Blog for additional guidance on creating a video.



 ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Tests](#tests)
 
 
 
 ## Installation


- You’ll need to use the MySQL2Links to an external site. and SequelizeLinks to an external site. packages to connect your Express.js API to a MySQL database and the dotenv packageLinks to an external site. to use environment variables to store sensitive data, like your MySQL username, password, and database name.

- Use the schema.sql file in the db folder to create your database using MySQL shell commands. Use environment variables to store sensitive data, like your MySQL username, password, and database name.


  - Make sure to clone the starter code repository and make your own repository with the starter code. Do not fork the starter code repository!

  - In order to install inquirer, i used npm i inquirer@8.2.4.

  - Before you start, clone the starter code.

## Usage

  - Your database should contain the following four models, including the requirements listed for each model:

Category

id

Integer

Doesn't allow null values

Set as primary key

Uses auto increment

category_name

String

Doesn't allow null values

Product

id

Integer

Doesn't allow null values

Set as primary key

Uses auto increment

product_name

String

Doesn't allow null values

price

Decimal

Doesn't allow null values

Validates that the value is a decimal

stock

Integer

Doesn't allow null values

Set a default value of 10

Validates that the value is numeric

category_id

Integer

References the category model's id

Tag

id

Integer

Doesn't allow null values

Set as primary key

Uses auto increment

tag_name

String

ProductTag

id

Integer

Doesn't allow null values

Set as primary key

Uses auto increment

product_id

Integer

References the product model's id

tag_id

Integer

References the tag model's id


  - Make sure that you remove dist from the .gitignore file so that Git will track this folder and include it when you push up to your application's repository.

 

## User Story

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Acceptance Criteria
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database




 ## Contribute 

 -  You'll need to execute association methods on your Sequelize models to create the following relationships between them:

* Product belongs to Category, as a category can have multiple products but a product can only belong to one category.

* Category has many Product models.

* Product belongs to many Tag models. Using the ProductTag through model, allow products to have multiple tags and tags to have many products.

* Tag belongs to many Product models.

- Fill out the unfinished routes in product-routes.js, tag-routes.js, and category-routes.js to perform create, read, update, and delete operations using your Sequelize models.

- Seed the Database
After creating the models and routes, run npm run seed to seed data to your database so that you can test your routes.

Sync Sequelize to the Database on Server Start
Create the code needed in server.js to sync the Sequelize models to the MySQL database on server start.
 

  
## Tests

  none

 

  # This project has been deployed to GitHub, here is the link:

  * 
  
  # Project recording link:

  * https://drive.google.com/file/d/1PW3oUHfDzfY_F1I_Yw8Zga7_sWqshNES/view
  
  
  # Team-Profile-Generator-OOP Screenshots


   * ![Screenshot (15)](https://user-images.githubusercontent.com/70625665/226804014-553176f6-f036-46ce-b504-11928a064234.png)

   * ![Screenshot (16)](https://user-images.githubusercontent.com/70625665/226804061-152c61d8-f569-4de4-b1d4-accac919ac54.png)

   * ![Screenshot (17)](https://user-images.githubusercontent.com/70625665/226804085-a5c4b971-dcd4-4fc4-8d05-7f4639b1fb07.png)










## Author
 * ANDREI FLOREA - Initial work - Git Hub Profile
 * Challenge 13 | Object-Relational Mapping (ORM) Challenge: E-commerce Back End

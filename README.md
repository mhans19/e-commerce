# <div align="center">**E-COMMERCE**</div>

## **TABLE OF CONTENTS**    
[1. TABLE OF CONTENTS](#TABLE-OF-CONTENTS)  
[2. LICENSE](#LICENSE)  
[3. PROJECT DESCRIPTION](#PROJECT-DESCRIPTION)  
[4. APPLICATION LINKS](#APPLICATION-LINKS)  
[5. CONTRIBUTIONS](#CONTRIBUTIONS)  
[6. DEVELOPMENT](#DEVELOPMENT)  
[7. INSTALLATION](#INSTALLATION)   
[8. USAGE](#USAGE)   
[9. TESTING](#TESTING)  
[10. USER STORY](#USER-STORY)  
[11. ACCEPTANCE CRITERIA](#ACCEPTANCE-CRITERIA)   
[12. GRADING REQUIREMENTS](#GRADING-REQUIREMENTS)    
[13. FUNCTIONALITY](#FUNCTIONALITY)  

---

## **LICENSE**  
![MIT](https://img.shields.io/badge/License-MIT-blue.svg)
> This application is covered under the [MIT License](https://opensource.org/licenses/MIT)    

---

## **PROJECT DESCRIPTION**
> The purpose of this challenge was to build a back end for an [e-commerce site](https://en.wikipedia.org/wiki/E-commerce) to better understand the fundamental architecture of this prevalent platform. Additionally, the challenge was to work with [Express.js API](https://www.npmjs.com/package/express) and [Sequelize](https://www.npmjs.com/package/sequelize) to interact with a MySQL database.  

---

## **APPLICATION LINKS**
> Live Application (Not relevant for this project)  
> [GitHub Repository](https://github.com/mhans19/e-commerce)  
> [Video Demonstration](!!!!!!!!!!!!!!!)  

---

## **CONTRIBUTIONS**   
Please contact **MORGAN HANSEN** for all application inqueries.
| Email | GitHub | LinkedIn |  
| :------: | :------: |  :------: |  
| <mdhansen19@gmail.com> | [GitHub](https://github.com/mhans19?tab=repositories) |  [LinkedIn](https://www.linkedin.com/in/morgan-hansen-47235872/?challengeId=AQF6MR471a-pZgAAAXMTL5e4xLqg_LNW5yawcXgk_uUmLrzsXk5ehOnzlQuK2dOVeX4ARtJwxmcHQrQhtgL_jM96wbBzhLvmAA&submisksionId=813167e8-8027-1e16-5911-1c143c23561f) |    
*Note: Starter code provided by the University of Utah Coding Bootcamp*
  
---

## **DEVELOPMENT**  
This application was developed with the following application structures:  
1. [Node.js](https://nodejs.org/en/)  
2. [Node Package Manager (NPM)](https://www.npmjs.com/)
    + [NPM dotenv](https://www.npmjs.com/package/dotenv)    
    + [NPM Express](https://www.npmjs.com/package/express)
    + [NPM Sequelize](https://www.npmjs.com/package/sequelize)  
    + [MySQL2](https://www.npmjs.com/package/mysql2)  
3. [JavaScript (js)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)    
4. [Insomnia](https://insomnia.rest/)  

---

## **INSTALLATION**
> Prior to using the application, a user *must* complete the following:  
> 1. Download the [GitHub repository](https://github.com/mhans19/e-commerce) to a local repository. 
> 2. [Install dependencies](#DEVELOPMENT) such as Node.js and NPM packages.  
> 3. Ensure installation of a Command Line Interface (CLI) utility such as *Git Bash* or *Terminal*.

---

## **USAGE**
> The application must be operated with a Command Line Interface (CLI) software. Using the command line, navigate to the local repository containing the *server.js* file. Then, complete the following steps:   
> 1. Initiate the MySql server (e.g., 'mysql -u root -p')  
> 2. Source the schema.sql file to create the database (e.g., 'source db/schema.sql;')  
> 3. Exit the MySQL server (e.g., 'quit;')  
> 4. Seed the test data to the database (e.g., 'npm run seed')  
> 5. Initiate the server (e.g., 'npm start')  
> 6. Open [Insomnia](https://insomnia.rest/) for testing localhost:3001/api/ API enpoints (i.e., **GET**, **POST**, **PUT**, and **DELETE** routes for **categories**, **products**, and **tags**)  
> 
> [Walkthrough Demonstration](!!!!!!!!!!!!!)  

---

## **TESTING**
> All API Routes were tested using [Insomnia](https://insomnia.rest/).  

---

## **USER STORY**  
> AS A manager at an internet retail company  
> I WANT a back end for my e-commerce website that uses the latest technologies  
> SO THAT my company can compete with other e-commerce companies  

---

## **ACCEPTANCE CRITERIA**
> GIVEN a functional Express.js API  
> WHEN I add my database name, MySQL username, and MySQL password to an environment variable file  
> THEN I am able to connect to a database using Sequelize  
> WHEN I enter schema and seed commands  
> THEN a development database is created and is seeded with test data  
> WHEN I enter the command to invoke the application  
> THEN my server is started and the Sequelize models are synced to the MySQL database  
> WHEN I open API GET routes in Insomnia for categories, products, or tags  
> THEN the data for each of these routes is displayed in a formatted JSON  
> WHEN I test API POST, PUT, and DELETE routes in Insomnia  
> THEN I am able to successfully create, update, and delete data in my database  
  
---

## **GRADING REQUIREMENTS**
#### <div align="center">This Challenge is graded based on the following criteria:</div>
### **<div align="center">Deliverables: 10%</div>**
- [x] Your GitHub repository containing your application code.

### **<div align="center">Walkthrough Video: 37%</div>**
- [x] A walkthrough video that demonstrates the functionality of the e-commerce back end must be submitted, and a link to the video should be included in your README file.
- [x] The walkthrough video must show all of the technical acceptance criteria being met.
- [x] The walkthrough video must demonstrate how to create the schema from the MySQL shell.
- [x] The walkthrough video must demonstrate how to seed the database from the command line.
- [x] The walkthrough video must demonstrate how to start the application’s server.
- [x] The walkthrough video must demonstrate GET routes for all categories, all products, and all tags being tested in Insomnia.
- [x] The walkthrough video must demonstrate GET routes for a single category, a single product, and a single tag being tested in Insomnia.
- [x] The walkthrough video must demonstrate POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia.

### **<div align="center">Technical Acceptance Criteria: 40%</div>**
#### **Satisfies all of the preceding acceptance criteria plus the following:**
- [x] Uses the [MySQL2 package](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database.
- [x] Uses the [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables to store sensitive data, like a user’s MySQL username, password, and database name.
- [x] Syncs Sequelize models to a MySQL database on the server start.
- [x] Includes column definitions for all four models outlined in the Challenge instructions.
- [x] Includes model associations outlined in the Challenge instructions.

### **<div align="center">Repository Quality: 13%</div>**
- [x] Repository has a unique name.
- [x] Repository follows best practices for file structure and naming conventions.
- [x] Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
- [x] Repository contains multiple descriptive commit messages.
- [x] Repository contains a high-quality README with description and a link to a walkthrough video.

---

## **FUNCTIONALITY**  
1. From the command line interface (CLI), navigate to the local repository containing the *server.js* file.   
![](/assets/images/localRepo.PNG)   
2. Initiate the MySql server by typing 'mysql -u root -p'. Provide your MySQL credentials.  
![](/assets/images/startSQL.PNG)   
3. Source the schema.sql file to create the database by typing 'source db/schema.sql;'. To check that the source worked, type 'show databases;' to verify the new e-commerce database was created.   
![](/assets/images/sourceSchema.PNG)   
4. Type 'quit;' to exit the MySQL server. Then, from the command-line, type 'npm run seed' to seed the database with the test data.  
![](/assets/images/sourceSeed.PNG)  
5. Initiate the server by typing 'npm start' in the command-line.   
![](/assets/images/startServer.PNG)   
6. Using Insomnia, test the API endpoints for localhost:3001/api/{endpoint}.   
    + **Category Routes**:   
        **GET** localhost:3001/api/categories   
        **POST** localhost:3001/api/categories  
        **GET** localhost:3001/api/categories/:id  
        **PUT** localhost:3001/api/categories/:id  
        **DELETE** localhost:3001/api/categories/:id    
    + **Product Routes**:   
        **GET** localhost:3001/api/products   
        **POST** localhost:3001/api/products  
        **GET** localhost:3001/api/products/:id  
        **PUT** localhost:3001/api/products/:id  
        **DELETE** localhost:3001/api/products/:id    
    + **Tag Routes**:   
        **GET** localhost:3001/api/tags   
        **POST** localhost:3001/api/tags  
        **GET** localhost:3001/api/tags/:id  
        **PUT** localhost:3001/api/tags/:id  
        **DELETE** localhost:3001/api/tags/:id     
        
![](/assets/images/insomniaCategories.PNG) 
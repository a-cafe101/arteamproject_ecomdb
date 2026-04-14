# Automotive Product CRUD Tester: E-Commerce Store Module

A full-stack e-commerce application using MongoDB Atlas and Node.js, retrofitted from the Module 10 mini-exercise.

### Project Structure

```
arteamproject_ecomdb
|-- models/
|   |-- db.js
|   |-- product.js
|-- public/
|   |-- index.html
|-- server/
|   |-- seed.js
|   |-- server.js
|-- test/
|   |-- getAll.axios.test.js
|   |-- getAll.fetch.test.js
|   |-- getAll.jacob.test.js
|-- .env
|-- .gitignore
|-- automate.js
|-- package-lock.json
|-- package.json
```

### Setup
1. Install dependencies
```bash
npm install express mongodb dotenv mongoose cors
```
2. Configure environment variables
```
Add your MongoDB Atlas connection string to a newly created .env file in the project root folder:

DB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/ecommerceDB?retryWrites=true&w=majority
PORT=3000
```
3. Seed 5 products into Atlas
```bash
npm run seed
```
4. Start the server
```bash
npm start
```

Visit the deployed URL to use the CRUD tester: https://arteamproject-ecomdb.onrender.com

### Product Field Details
All fields must be filled.
| Field       |  Type  | Notes                      |
|-------------|--------|----------------------------|
|storeId      | String | e.g. `STORE-001`           |
|storeName    | String | e.g. `CanadianTire`        |
|productId    | String | e.g. `PROD-006`            |
|productName  | String | e.g. `Coolant`             |
|price        | Number | Non-negative dollar amount |
 
### Integration of Team Modules

##### For this store's products, call:

```
GET https://arteamproject-ecomdb.onrender.com/products
```

##### For the combined team's products, call:
```
GET https://arteamproject-ecomdb.onrender.com/all-products
```

This returns a JSON array of all products with fields like storeId and storeName so that each result can be easily identified.

### Testing
##### Run all Tests
```bash
node automate.js
```
##### Expected Output
```
studentemail@algonquinlive.com - getAll to show all product - 200 - PASSED
```
// Tests the GetAll endpoint using axios HTTP client
// Run with: node test/aasiyah.getAll.axios.test.js

const axios = require ('axios');

const STUDENT_EMAIL = 'rash0093@algonquinlive.com';
const BASE_URL = 'https://arteamproject-ecomdb.onrender.com';

async function testGetAll() {
    const testName = 'getAll to show all products';
  try {
    const res = await axios.get(`${BASE_URL}/products`);
    const status = res.status;
    const result = status === 200 ? 'PASSED' : 'FAILED';
    console.log(`${STUDENT_EMAIL} - ${testName} - ${status} - ${result}`);
  } catch (err) {
    console.log(`${STUDENT_EMAIL} - ${testName} - ERROR - FAILED`);
  }
}

testGetAll();
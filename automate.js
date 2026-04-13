// Runs team member tests sequentially, adds each teammate's test file path once available
// Run with: node automate.js

const { execSync } = require('child_process');

// List of tests to run
const tests = [
  'node test/getAll.fetch.test.js',        // My first test
  'node test/getAll.axios.test.js',        // My second test
  'npx jest test/getAll.jacob.test.js -- no coverage',  // Teammate's test
];

tests.forEach(test => {
  try {
    // Run each test and print its output directly to terminal
    console.log(execSync(test, { encoding: 'utf8' }).trim());
  } catch (err) {
    console.log(`ERROR: ${err.message}`);
  }
});

console.log('\nAll tests complete.');
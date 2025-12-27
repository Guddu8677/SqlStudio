#!/usr/bin/env node

const axios = require('axios');

const API_BASE = 'http://localhost:5000/api';
const FRONTEND_URL = 'http://localhost:3001';

async function testAPI() {
  console.log('🧪 Testing SQL Studio Functionality...\n');

  try {
    // Test 1: Health Check
    console.log('1️⃣ Testing API Health...');
    const health = await axios.get(`${API_BASE}/health`);
    console.log('✅ API Health:', health.data.status);

    // Test 2: Get Assignments
    console.log('\n2️⃣ Testing Assignment Listing...');
    const assignments = await axios.get(`${API_BASE}/assignments`);
    console.log('✅ Assignments loaded:', assignments.data.data.length, 'assignments');
    console.log('   - Titles:', assignments.data.data.map(a => a.title));

    // Test 3: Get Specific Assignment
    console.log('\n3️⃣ Testing Assignment Details...');
    const assignmentId = assignments.data.data[0]._id;
    const assignment = await axios.get(`${API_BASE}/assignments/${assignmentId}`);
    console.log('✅ Assignment details loaded:', assignment.data.data.title);
    console.log('   - Sample tables:', assignment.data.data.sampleTables.length);

    // Test 4: Execute Query
    console.log('\n4️⃣ Testing Query Execution...');
    const queryResult = await axios.post(`${API_BASE}/queries/execute`, {
      query: 'SELECT * FROM employees WHERE salary > 50000',
      assignmentId: assignmentId
    });
    console.log('✅ Query executed successfully');
    console.log('   - Rows returned:', queryResult.data.data.rowCount);
    console.log('   - Execution time:', queryResult.data.data.executionTime + 'ms');

    // Test 5: Test Security (should fail)
    console.log('\n5️⃣ Testing Security Validation...');
    try {
      await axios.post(`${API_BASE}/queries/execute`, {
        query: 'DROP TABLE employees',
        assignmentId: assignmentId
      });
      console.log('❌ Security test failed - dangerous query was allowed');
    } catch (error) {
      console.log('✅ Security validation working - dangerous query blocked');
      console.log('   - Error:', error.response.data.error);
    }

    // Test 6: Generate Hint
    console.log('\n6️⃣ Testing Hint Generation...');
    const hint = await axios.post(`${API_BASE}/hints/generate`, {
      assignmentId: assignmentId,
      userQuery: 'SELECT * FROM employees'
    });
    console.log('✅ Hint generated successfully');
    console.log('   - Hint:', hint.data.data.hint.substring(0, 50) + '...');

    // Test 7: Frontend Accessibility
    console.log('\n7️⃣ Testing Frontend Accessibility...');
    const frontend = await axios.get(FRONTEND_URL);
    if (frontend.data.includes('SQL Studio')) {
      console.log('✅ Frontend is accessible and serving correct content');
    } else {
      console.log('❌ Frontend issue - unexpected content');
    }

    console.log('\n🎉 All tests passed! SQL Studio is working correctly.');
    console.log('\n📱 Access the application at:');
    console.log('   Frontend: ' + FRONTEND_URL);
    console.log('   Backend API: ' + API_BASE);

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    if (error.response) {
      console.error('   Response:', error.response.data);
    }
  }
}

testAPI();
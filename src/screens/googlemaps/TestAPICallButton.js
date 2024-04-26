import React from 'react';

const TestAPICallButton = () => {
  const testAPICall = async () => {
    try {
      // Example data to send in the request
      const data = {
        longitude: 45.678,
        latitude: 23.456,
        order: 2,
      };

      // API endpoint URL
      const apiUrl = 'http://localhost:3000/coordinates';

      // Make a POST request to the API
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if required
        },
        body: JSON.stringify(data),
      });

      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the JSON response
      const result = await response.json();

      console.log('API call successful:', result);
      // Do something with the result if needed
    } catch (error) {
      console.error('Error calling API:', error);
      // Handle errors here
    }
  };

  return (
    <div>
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
        }}
        onClick={testAPICall}
      >
        Test API Call
      </button>
    </div>
  );
};

export default TestAPICallButton;

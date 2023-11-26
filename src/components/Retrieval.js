import React, { useEffect } from 'react';

const YourComponent = () => {
    useEffect(() => {
        // Replace 'https://your-api-gateway-url/your-endpoint' with your actual API Gateway URL
        const apiUrl = 'https://your-api-gateway-url/your-endpoint';

        // Make a GET request to the API Gateway endpoint
        fetch(apiUrl)
            .then((response) => {
                // Check if the request was successful (status code 2xx)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // Parse the JSON response
                return response.json();
            })
            .then((data) => {
                // Handle the response data
                console.log(data);
            })
            .catch((error) => {
                // Handle errors
                console.error('Error fetching data:', error);
            });
    }, []); // The empty array means this effect runs once after the initial render

    // Your component's rendering logic goes here
    return <div>{/* Render your component content here */}</div>;
};

export default YourComponent;

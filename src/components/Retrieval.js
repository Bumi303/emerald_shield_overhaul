import React, { useEffect, useState } from 'react';

const YourComponent = () => {
    const [value, setValue] = useState('');

    useEffect(() => {
        // Replace 'https://your-api-gateway-url/your-endpoint' with your actual API Gateway URL
        const apiUrl =
            'https://ayw2cvofqgm42e2tvbgojikxme0itvtz.lambda-url.us-east-1.on.aws/';

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
                setValue(data);
            })
            .catch((error) => {
                // Handle errors
                console.error('Error fetching data:', error);
            });
    }, []); // The empty array means this effect runs once after the initial render

    // Your component's rendering logic goes here
    return (
        <div>
            {value.symbol} {value.latest_price} {value.latest_timestamp}
        </div>
    );
};

export default YourComponent;

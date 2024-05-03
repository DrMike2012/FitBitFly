import { HeartRateSensor } from "heart-rate";
import fetch from "node-fetch";

if (HeartRateSensor) {
   console.log("This device has a HeartRateSensor!");
   const hrm = new HeartRateSensor();
   hrm.addEventListener("reading", () => {
     console.log(`Current heart rate: ${hrm.heartRate}`);
     setHeartRate(hrm.heartRate);
   });
   hrm.start();  //start listening to the sensor
} else {
   console.log("This device does NOT have a HeartRateSensor!");
}


function setHeartRate (heartRate){

// Define the data to be sent in the request body
const postData = {
   "heartrate": heartRate
};
 
 // Define the URL of the API endpoint
 const url = 'http://localhost:3000/heartrate';
 
 // Define the request options, including the method, headers, and body
 const requestOptions = {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json' // Specify the content type as JSON
   },
   body: JSON.stringify(postData) // Convert the data to JSON format
 };
 
 // Make the POST request using the fetch API
 fetch(url, requestOptions)
   .then(response => {
     // Check if the request was successful (status code 200-299)
     if (response.ok) {
       return response.json(); // Parse the response body as JSON
     }
     throw new Error('Network response was not ok.');
   })
   .then(data => {
     // Handle the response data
     console.log('Response data:', data);
   })
   .catch(error => {
     // Handle any errors that occurred during the request
     console.error('Error:', error);
   });
}
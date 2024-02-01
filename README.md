# Personal Portfolio Project
My [website] (https://muluworkgeremew.com) 
## Overview
This GitHub repository contains the code and documentation for my personal portfolio website. The project is divided into four days of development, focusing on both front-end and back-end implementation using React, AWS services, and serverless architecture.

### Day 1: Front-end Setup and Basic AWS Services
#### Morning Session
- Set up a new React project.
- Create basic components for different sections (Intro, About, Skills, Work Experience, Education, Blog, Contact Me).
- Implement a simple layout and styling for each section.

#### Afternoon Session
- Create a new S3 bucket on AWS for hosting the static website.
- Deploy the React app to the S3 bucket.
- Configure CloudFront for the S3 bucket to enhance performance.

### Day 2: Back-end Implementation with Serverless Services
#### Morning Session
- Design the back-end API using serverless services (Lambda, API Gateway, DynamoDB, etc.).
- Set up a DynamoDB table to store data (for the Contact Me section).

#### Afternoon Session
- Implement Lambda functions to handle API requests.
- Connect the front end to the back end by making API calls from the Contact Me section.
- Test the integration between the front end and back end.

### Day 3: Configure Domain Name and Certificate, and Implement Idea
#### Morning Session
- Purchase a domain name (if not already owned) from GoDaddy or AWS.
- Set up a hosted zone for the domain in Route 53.
- Configure ACM for an SSL certificate.

#### Afternoon Session
- Configure CloudFront with the domain name and SSL certificate.
- Implement an interesting idea (e.g., real-time user tracking dashboard, integration with Cognito).
- Blog about the idea and its implementation.

### Day 4: Final Touches and Recording
#### Morning Session
- Finalize styling and customization of the front end.
- Implement client-side validation for the Contact Me form.
- Add success/error messages for form submission.

#### Afternoon Session
- Ensure all components work seamlessly together.
- Record a 15-minute video explaining the project and its implementation.
- Commit changes to Git and update the readme file with a summary of each day's tasks.

## How to Run Locally
- Clone the repository: `git clone https://github.com/yourusername/your-portfolio.git`
- Navigate to the project directory: `cd your-portfolio`
- Install dependencies: `npm install`
- Start the development server: `npm start`

Feel free to explore the code and reach out if you have any questions or suggestions!

# Startup
## Elevator Pitch
Have you ever been searching for a job, but you don't know what would be best suited for your schedule, life style or major? Well this Job Configurator is created to address this problem. The user puts in their major, prefered hours and interests and the application will give the result that is best suited for the user.
## Design
![Avatars](https://github.com/NealSmalley/startup/assets/54277322/f42531ba-e8b5-482a-9e77-50cb77b2c4fb)
## Key features
- login over HTTPS
- The ability to input information

- Returns a job based on the inputs
- The ability to re-edit input information after job result
- The ability to save job results
## Technologies
- HTML - Three HTML structured pages. The first for the login. The second will be where you input your information for the job results(Career machine) and third results of search).
- CSS - An application that looks clean and professional. It easy to use on computer and phone.
- JavaScript - Login, applying information inputs, displaying job result
- Service
  - Login
  - Career Machine
  - Results
- DB/Login - Register, login information, store input choices and job result to database.
- WebSocket - They can share their job results with other users.
- React - This application will be particially constructed in React.
## HTML deliverable
For this deliverable I will structure it using HTML.
- HTML pages - Three HTML pages for loging in, career machine page and results page.(Done)
- Links - The login page links to the career machine page and the resutls page.(Done)
- Images - Cartoon image of individual that represents your avatar.(Done)
- DB/Login - Input box and submit button of login page. The login information will be sent to the database. The inputed other inputed information will also be sent to the database.(Done: placeholder for login. No database yet.)
- WebSocket - The user can show their job result with another user.(Done: placeholder for WebSocket)
## CSS deliverable
- Header, footer, and content
- Navigation elements - buttons and input boxes with borders.
- Responsive to window resizing - The website will adjust from computer screens to phone screens.
- Application elements - Well constructed visually.
- Application text content - easy to read font.
- Application images - Avatar image is well placed and given a border.
## JavaScript deliverable
- Login - pressing login button will take you to information input page.
- Database - This will recieve input results and contain all the potential job options.
- WebSocket - WebSocket messages to share Job results.
- Application logic - The job will change depending on the user's inputs.
## Service deliverable
For this deliverable I will use backend endpoints to get the users inputs and return a job result.
- Node.js/Express HTTP service
- Backend service endpoints - Stores login of user on server.
- Frontend calls service endpoints
## DB/Login deliverable
- MongoDB Atlas database created
- Stores data in MongoDB
- User registration - Makes a new account in the database.
- Existing user - Saves job result under the same user.
- Use MongoDB to store credentials - Stores both user and their job results.
- Restricts functionality - You cannot vote without being logged in.
## WebSocket deliverable
- Backend listens for WebSocket connection
- Frontend makes WebSocket connection
- Data sent over WebSocket connection
- WebSocket data displayed - Job result can be shared with any user.
## React deliverable
- Bundle and transpiled
- Components - login and input information.
- Router - Between loging and input information components.

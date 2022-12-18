# cs465-fullstack
cs-465 fullstack development project with MEAN

## Architecture
### Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA). Why did the backend use a NoSQL MongoDB database?

Express is used in the HTML of the pages to use handlebars. Handlebars allow you to insert items into the HTML and dynamically render them with these inserted items. Express is also a type of node.js framework. Javascript is a language that allows webpages to render dynamically. HTML is usually static and thus javascript is used to make the site dynamic. Javascript was used to allow the site to dynamically pull from a database and update the website with updated trip information. The backend uses mongoDB, which is a non relational database. The SPA uses angular and the database to make an SPA, which stands for a single page application. The SPA is used to interact with the database. The page allows you to login and edit or add trips to the site. The page will only allow registered users to login and edit the trips.

The backend uses a NoSQL database, like MongoDB because these types of databases tend to balance speed and flexibility very well. MongoDB is fast and flexible and is well suited to the task we have given it.

## Functionality

### How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces? Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

JSON is a format for an object or item, whereas javascript is a language. JSON helps tie the frontend and backend together, because it is a format that both javascript and MongoDB can read, use, and output. One instance of refactoring code is when the code was refactored to use handlebars throughout the HTML. The use of handlebars allowed the insertion of repeated code in the HTML files and cleaned the code up immensely. Another instance is when code was refactored to pull trip data from the database instead of being hard coded in. This is a huge improvement and allows updates to be made to the database and rendered on the SPA and webpage at the same time instead of having to go back and edit the hardcoded data. Reusable UI components allow the component to be rendered once and reused, which saves on resources and also saves on data transmission to the user. An example would be a navigation bar. Instead of resending the nav bar on each new page you can send the item to the user once and reuse it and flag which page the user is currently on.

## Testing

### Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
In this project the methods are used to interact with the database and the data. Some methods used include get and put. These methods are used to get the data in the database and put new data into the database respectively. Using these the user is able to interact and alter the data in the database from the SPA. The methods each call their own database functions. Endpoints are basically the end result of the methods that were called. All of these alter or access data that should not be accessible without the proper permissions. User control is implemented in this project so that only properly registered users are able to log in and alter the data. This is a layer of security that should be implemented to ensure data is kept secure and away from users that do not have the proper permissions.

## Reflection

### How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course has helped me a lot in my journey. This course helped me learn a lot more about full stack development. This is my first time working with MEAN and I learned a lot. I have learned a lot about express, angular, and node. I learned how to make HTML pages dynamic. I learned how to create an SPA and use it to interact with a database. I learned more about webapps and I have started looking into making my own side project to work on this more. Each of the skills that I have learned will help me become more marketable. I have learned so much and it has really made me want to look into it even more and I want to work on improving as a developer even more

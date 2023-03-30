# Front End Home Task

The project requires the use of TypeScript and SCSS for developing a form with validation using react-hook-form and zod. The code should be written in a readable format, and reusable components should be created to ensure scalability for other services. The form should display errors to the user in a user-friendly manner, in Hebrew, by highlighting the relevant field in red. Upon submission, the form should be validated and submitted to a global state (Zustand).

The form should include features such as validating the user's ID according to Israeli standards, populating the 'city' and 'street' fields using the gov.il site, where the street is dependent on the city code chosen from the gov.il site. Additionally, the user should not be allowed to enter a value that is not in the array of options provided by the API for 'street' and 'city' fields.
## Figma Design

The Figma design can be accessed via this [Link](https://www.figma.com/file/7L6pEMRGbgdbh6JVgKV4No/Untitled?node-id=11%3A1059&t=3QqyBjJdF3QYhT2j-0)

## Setup

To get started with the project, please follow these steps:

- Fork the repository to your Github account
- Run the command `npm i` in your terminal
- Run the command `npm run dev` to start the development server



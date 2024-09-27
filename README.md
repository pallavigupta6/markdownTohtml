# Markdown to HTML Converter

This project is a simple Markdown to HTML converter with a frontend built using React and a backend using Express.js. The backend converts Markdown text to HTML using the `marked` library, and the frontend provides a user interface for inputting Markdown and displaying the converted HTML.

## Features

- Convert Markdown text to HTML
- CORS support for cross-origin requests
- JSON support for request bodies
- Syntax highlighting for HTML preview

## Installation

### Backend

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/markdown-to-html-converter.git
   cd markdown-to-html-converter/backend

   ```

2. Install the dependencies:
   npm install

3. Start the server:
   npm server.js

Frontend

1.  Navigate to the frontend directory:
    cd ../frontend

2.  Install the dependencies:
    npm install

3.  Start the development server:
    npm start

Backend

1.  Start the server:
    node server.js

2.        The server will be running on http://localhost:8000.

Frontend

1. Start the development server:
   npm start

2. Open your browser and navigate to http://localhost:3000.

Converting Markdown

1. In the frontend, type your Markdown text into the textarea.
2. The converted HTML will be displayed with syntax highlighting.

Project Structure

markdown-to-html-converter/
├── backend/
│ ├── server.js
│ └── package.json
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ └── MarkdownEditor.js
│ │ ├── App.js
│ │ └── index.js
│ ├── public/
│ ├── package.json
│ └── README.md
└── README.md

1. Dependencies
   Backend
   express
   cors  
    marked
   Frontend
   react
   axios
   highlight.js
   lodash

2. Acknowledgements
   Express.js
   Marked
   React
   Highlight.js
   Lodash

This README file now includes instructions for setting up both the backend and frontend parts of your project. If you have any other questions or need further assistance, feel free to ask!

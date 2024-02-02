// Import necessary Node.js modules.
const express = require('express'); // Express framework for building web applications.
const path = require('path'); // Path module for handling and transforming file paths.

// Create an Express application. This is the foundation of your web application.
const app = express();

// Define the port to run the server on. Utilizes the PORT environment variable if available, otherwise defaults to 3000.
const PORT = process.env.PORT || 3000;

// Middleware to serve static files. This tells Express to serve files (images, CSS, JavaScript, etc.)
// from the 'src' directory relative to where the 'index.js' script runs.
// Note: `__dirname` is the current directory where this script is running.
app.use(express.static(path.join(__dirname, '..', 'src')));

// A catch-all route handler. This is used for serving the 'index.html' file regardless of the URL visited.
// It's particularly useful in single-page applications where the routing is handled client-side.
app.get('*', (req, res) => {
    // Respond by sending the 'index.html' file to the client. The path is resolved to ensure it works regardless of the script's location.
    res.sendFile(path.resolve(__dirname, '..', 'src', 'index.html'));
});

// Start the server on the defined PORT. This makes your application listen for incoming requests.
app.listen(PORT, () => {
    // Console log to indicate that the server is running and on which port. This is helpful for debugging and ensuring that your server starts correctly.
    console.log(`Server running on http://localhost:${PORT}`);
});

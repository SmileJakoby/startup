//Set the port to 4000
const port = process.argv.length > 2 ? process.argv[2] : 4000;
//Cause express static middleware to serve files from the public directory
app.use(express.static('public'));

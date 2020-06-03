var fs = require("fs");
var express = require ("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

const notes = [];

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serves resources from public folder
app.use(express.static("public")); 


//======HTML routes===============================================================

//return notes.html
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "/public/notes.html"))
})

//return index.html
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/public/index.html"))
})


//=====API routes=====================================================================

//reads db.json file and return all saved notes as JSON
app.get("/api/notes", function(req, res){
    fs.readFile("./db/db.json", function(err, data){
        if (err) throw err;
        res.json(JSON.parse(data));

    });
    
})

//receive a new note to save on the request body, 
//add it to the db.json file
//and then return the new note to the client.

//receives info from front end
app.post("/api/notes", function(req, res){
    let newNote = req.body;
    req.body.id = Date.now().toString();
    console.log(req.body.id);

    console.log(newNote)
    notes.push(newNote);
    
    fs.writeFile("./db/db.json", JSON.stringify(notes), function(err){
       if(err) throw err;
        console.log("Success!");
    })
    res.json(newNote); 
}); 

//receive a query parameter containing the id of a note to delete,
//give each note a unique "id" when its saved
//to delete a note--read all notes from the db.json file, remove the note with the given "id" property, and then rewrite the notes to the db.json file.
 app.delete("api/notes/:id", function(req, res){
    let noteParamsId = req.params.id;
    console.log(noteParamsId)
}) 


//======Listener========================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
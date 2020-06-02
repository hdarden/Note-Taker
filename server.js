var fs = require("fs");
var express = require ("express");
var app = express();

var PORT = 8080;


//html routes====================================

//return notes.html
app.get("/notes", function(req, res){
    res.send
})

//return index.html
app.get("*", function(req, res){
    res.send
})

//API routes======================================

//reads db.json file and return all saved notes as JSON
app.get("/api/notes", function(req, res){
    res.json
})

//receive a new note to save on the request body, 
//add it to the db.json file
//and then return the new note to the client.
app.post("/api/notes", function(req, res){

})

//receive a query parameter containing the id of a note to delete,
//give each note a unique "id" when its saved
//to delete a note--read all notes from the db.json file, remove the note with the given "id" property, and then rewrite the notes to the db.json file.
app.delete("api/notes/:id", function(req, res){

})

//Listener=============================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

const http = require('http');
const fs = require('fs');
const data = require('./top_2018_movies.json');

//Create a function that list all movies
function getAllMovies(response){
    response.write("this is the first page in the json objects:");
    data.forEach(x => response.write(x.movie + "\n"));
    response.end();
    
}
//Create a function that list the movies that grossed above 20 million and genre is action
function getMoviesGreaterthanTwenty(response){
    
    for(var i =0; i < data.length; i++){
        if(data[i].gross > 20000000){
            
            response.write(data[i].gross);
        }
    }
}
//Create a function that list the movies that rated "PG-13" and number of tickets sold is between 1 and 5 million
function getMoviesratedPG13(response){
   
    for(var i =0; i < data.length; i++){
        if(data[i].mpaa > 1000000 ){
           
            response.write(data[i].mpaa);
        }
    }
}
//Create a function that sorts the movies based on "distributer"
function getMoviedistributors(response){
    
    data.forEach(x => response.write(x.distrubitor + "\n"));
    
}

//server
http.createServer(function(request, response){
    


    if ((request.url="/all_movies") && (request.method ==="GET")){//creating a route for /all_movies
        getAllMovies(response);

    }else
    if((request.url= "/action") && (request.method === "GET")){ //creating a route for /action
        getMoviesGreaterthanTwenty(response);
    }else
    if((request.url= "/pg") && (request.method === "GET")){//creating a route for /pg
        getMoviesratedPG13(response);

    }else
    if((request.url= "/distributor") && (request.method === "GET")){//creating a route for /distributors
        getMoviedistributors(response);
    }

    fs.readFile('index.html', function(err,data){
        response.writeHead(200, {'content-type':'text/html'});
        response.write(data);
        return response.end();

    });
    
        console.log("running on server 3000");
        response.statusCode = 200;
        response.end();  
).listen(3000)

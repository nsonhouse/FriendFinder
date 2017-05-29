


// API Routes
var friends = require("../data/friends.js");
var path = require("path");

module.exports = function(app) {
app.get("data/friends.js", function(req, res) {
   res.json(friendData);
 }); // Get data  

app.post("/data/friends", function(req,res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 0
        };
        console.log(req.body);
        //Result of the user's survey POST and parse info 
        var userData     = req.body;
        var userScores   = userData.scores;
        var userScore    = 0;
        var myArr        = []; 

        for(var i=0; i<10; i++){
            myArr.push(req.body.scores[i]);
            userScore += parseInt(myArr[i]);
        }
        
        // Friend Data
        var candidateScore = 0;
        for(var i=0; i<10; i++){
            candidateScore += parseInt(friends[0].scores[i]);
        }
       console.log('User: ' + req.body.name + "'s score equals " + candidateScore +'\n');

       var potentialCandidateScore = 0;
       var matchArr                = [];

       for(var i=0; i<friends.length; i++){
            for(var j=0; j<friends[i].scores.length; j++){
                    potentialCandidateScore += parseInt(friends[i].scores[j]);  
            } 

            console.log('The difference in score between ' + req.body.name + ' and '+ friends[i].name + ' is '+ 
            Math.abs(userScore - potentialCandidateScore) );
            
            var diffInScore =  Math.abs(userScore - potentialCandidateScore);
            var currentScore = diffInScore;           
            
            matchArr.push(diffInScore);            
            potentialCandidateScore = 0;       
        }
            console.log(matchArr);
            var i = 1;
            var minIdx = 0;
            for( i; i<matchArr.length; i++){
                    if(matchArr.length === 0){
                        console.log('There are no potential cadidates.');
                        return -1;
                    }
                    
                    if(matchArr[minIdx] > matchArr[i]){
                        minIdx = i;                         
                    } 
            }

            console.log('Min Index = ' + minIdx);
            console.log(matchArr[minIdx]  );

            //bestMatch new friend reset
            bestMatch.name = friends[minIdx].name;
            bestMatch.photo = friends[minIdx].photo;

             //user's info saved to the database 
            //friends.push(userData);

            //return JSON with the user's bestMatch.
            res.json(bestMatch);
           
        })
    };

    
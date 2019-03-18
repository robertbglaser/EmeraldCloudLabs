

function scores (){


    const Scores = [{"score":8795136, "id": "d2e257c282b54347ac14b2d8d0da814c", "x": "foo", "y": 7, "z": 11,"payload": "some large amount of data"},
    {"score":5317020,"id": "619236365add4a0ca6e501fc62cfbaba", "type": "purple", "payload":"some small amount of data"},
    {"score":16774838,"id": "9ab7247c02044c65936a467016fff6b6", "type": "aqua", "payload":"another small amount of data"}
]; 
 /* const Scores = {"8795136": {"id": "d2e257c282b54347ac14b2d8d0da814c", "x": "foo", "y": 7, "z": 11,
  "payload": "some large amount of data"},
  "5317020": {"id": "619236365add4a0ca6e501fc62cfbaba", "type": "purple", "payload":
  "some small amount of data"},
  "16774838": {"id": "9ab7247c02044c65936a467016fff6b6", "type": "aqua", "payload":
  "another small amount of data"}
  }
  */
   
   
    var scoreArr = JSON.stringify(Scores);
    var newScores = []
        
        
    
    for (let idx of Scores){
        
        newScores.push({
            score:idx.score,
            id:idx.id
        });
         
        }
        console.log(newScores)

        newScores.sort(function(obj1, obj2) {
            // Ascending: first age less than the previous
            return obj1.score - obj2.score;
            
        });



  /*  var userData =[];
    fetch('./data.json')
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
        let authors = data;
        authors.map(function(author) {
            console.log(author.id)
        });



      }) // end of the then
      .catch(function(error) {
             console.log("***** ", error, "*************");
         });   

    //     console.log(outputData)
    // return inputData;
// } */
}

scores();
  
/*
function fetchData(){
    console.log("inside fetch data");



   fetch('./data.json')
        .then(function(res) {
            res.json())
        });
        .then(function (data){
            console.log("inside the then " data))
        })
       
           
        
        .catch(function(error) {
            console.log("***** ", error, "*************");
        });   
    }

   // console.log(inputData)
   // return inputData;
} */




function scores (){
    const Scores = {"8795136": {"id": "d2e257c282b54347ac14b2d8d0da814c", "x": "foo", "y": 7, "z": 11,"payload": "some large amount of data"},
    "5317020": {"id": "619236365add4a0ca6e501fc62cfbaba", "type": "purple", "payload":"some small amount of data"},
    "16774838": {"id": "9ab7247c02044c65936a467016fff6b6", "type": "aqua", "payload":"another small amount of data"}
    };
  
   // console.log(Object.entries(Scores)[0])
   // console.log(Object.values(Scores))
   // console.log(Object.keys(Scores))
    try{
        console.log(JSON.parse(Scores))
    }catch (objError) {
        if (objError instanceof SyntaxError) {
            console.log("&&&&&&&&&&&", objError.name);
            new Error("2") ;
        } else {
            console.log("************* ",objError.message);
        }
    }
   
   // console.log(JSON.stringify(Scores))


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


 const inputData = () => {
   return fetch('./data.json')
        .then((res) => res.json())
        .then(posts =>  console.log("inside the then ", posts))
           
        
        .catch(function(error) {
            console.log("***** ", error, "*************");
        });   
    }

   // console.log(inputData)
   // return inputData;
} */


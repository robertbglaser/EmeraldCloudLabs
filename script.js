console.log("Hi");

fetch('./data.json')
.then((resp) => resp.json())
.then(function(data) {
    console.log(data);
});
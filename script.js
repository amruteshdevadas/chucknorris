
//header where the user is provided with some information about how to use it
//whenever the user clicks the get joke button the user will get a joke and an icon 
var header = document.createElement("div")
header.className = "header"
header.innerHTML=`
<h2>To get a Chuck Norris Joke Hit the the "Get Joke" Button</h2>
<button class = "button" onclick = "getJoke()"> Get Joke </button>
`
document.body.append(header)


    //this function is called whenever the user clicks get joke button 
    async function getJoke()
    {
        try {
             //the refreshList is called to remove the already present content on the page
        refreshList()

        let response = await fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", {
        "method": "GET",
        "headers": {
            "accept": "application/json",
            "x-rapidapi-key": "dc94022df2msh7a82afedb6287ddp162a78jsn9ceab46906c4",
            "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com"
	        }
        })
    
        data = await response.json();
        loadJoke(data)
            
        } 
        //to catch the error 
        catch (error) 
        {
            noResults(error)      
        }
       
}
   // fuction to render data on the webpage 
function loadJoke(data)
{
    var jokes = document.createElement('div')
    jokes.className ="jokes"
    jokes.innerHTML=`
    <img class ="image" src = ${data.icon_url}>
    <p>"${data.value}" </p>
    `
    document.body.append(jokes)
}

// function to remove the contents of the already existing data
function refreshList()
{
    $(".jokes").remove();
}
// whenever there is any error in fetching data this function is called 
function noResults(err)
{
    alert(err)
}
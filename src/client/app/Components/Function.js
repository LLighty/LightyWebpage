

/* Function which sends a fetch request to the Reddit JSON file
* Returns the JSON file and maps all the responses to an array of image urls
* Reason for the mapping is I can randomise from the downloaded images in other functions*/
function getFluffyPicture(){
    return fetch("https://www.reddit.com/r/aww/top.json")
    .then((response) => response.json())
    .then(response => response.data.children)
    .then( (response) => {
        return response.map( (post) => {
            if (post.data.is_video || post.data.media != null){
                return null;
            } else {
                return post.data.url
            }
        })
    })
    .catch(function(error){
        return "error";
    })
}

/*Gets a programming quote from the website "quotes.stormconsultancy.co.uk" */
export async function GetProgrammingQuote(){
    return fetch("http://quotes.stormconsultancy.co.uk/random.json")
    .then((response) => response.json())
    .then((response) => {
        return '"' + response.quote + '"' + ", " + response.author;
    })
    .catch(function(error){
        return "error";
    })
}

/*Uses the getFluffyPicture to grab a bunch of picture URLS
* Then selects the first one and returns it */
export async function GetCutePicture(){
    var JSONfile = await getFluffyPicture();
    for(var i = 0; i < JSONfile.length; i++){
        //console.log(JSONfile[i]);
        if(JSONfile[i] !== null) {
            JSONfile = JSONfile[i];
            break;
        }
    }
    return JSONfile.indexOf("http") !== -1 ? JSONfile : "error";
}
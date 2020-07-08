

var potentialQuotes = [
    '"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."- Martin Golding',
    '"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program." - Linus Torvalds',
    '“To iterate is human, to recurse divine.” - L. Peter Deutsch',
    '“Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.” - Alan Kay',
    '"Measuring programming progress by lines of code is like measuring aircraft building progress by weight." - Bill Gates',
    '"People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones." - Donald Knuth',
    '“Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris.” - Larry Wall',
    '“The best programmers are not marginally better than merely good ones. They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability.” - Randall E. Stross',
    '“If McDonalds were run like a software company, one out of every hundred Big Macs would give you food poisoning, and the response would be, ‘We’re sorry, here’s a coupon for two more.’ “ - Mark Minasi',
    '"Beware of bugs in the above code; I have only proved it correct, not tried it." - Donald E. Knuth',
    '"If Java had true garbage collection, most programs would delete themselves upon execution." - Robert Sewell',
    '"If debugging is the process of removing software bugs, then programming must be the process of putting them in." - E. W. Dijkstra'
];

/* Function which sends a fetch request to the Reddit JSON file
* Returns the JSON file and maps all the responses to an array of image urls
* Reason for the mapping is I can randomise from the downloaded images in other functions*/
function getFluffyPicture(){
    return fetch("https://www.reddit.com/r/Floof/top.json")
    .then((response) => response.json())
    .then(response => response.data.children)
    .then( (response) => {
        return response.map( (post) => {
            if (post.data.is_video || post.data.media != null || post.data.url.includes("gifv")){
                return null;
            } else {
                return post.data.url
            }
        })
    })
    .catch(function(error){
        console.log(error);
        return "error";
    })
}

/* Very basic function which randomly selects a quote stored in the var potentialQuotes */
export function GetProgrammingQuote(){
    //console.log(potentialQuotes[Math.floor(Math.random() * potentialQuotes.length)]);
    return potentialQuotes[Math.floor(Math.random() * potentialQuotes.length)];
}

/*Gets a programming quote from the website "quotes.stormconsultancy.co.uk" 
* Deprecated since it references an insecure resource
export async function GetProgrammingQuotes(){
    return fetch("http://quotes.stormconsultancy.co.uk/random.json")
    .then((response) => response.json())
    .then((response) => {
        return '"' + response.quote + '"' + ", " + response.author;
    })
    .catch(function(error){
        return "error";
    })
} */

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
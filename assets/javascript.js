var search = $("#search");
var beginDate = parseInt($("#beginDate"));
var endDate = parseInt($("#endDate"));
 
if (typeof(beginDate) === "number" || typeof(endDate) === "number") {
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&begin_date=" + beginDate + "&end_date=" + endDate + "&api-key=1SNC7sbdGIAMRDwrF2rNdfUgOKlJh5vL";
}
else {
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=1SNC7sbdGIAMRDwrF2rNdfUgOKlJh5vL";
}


$.ajax( {
    url: queryURL,
    method: "GET"
}).then(function(response) {
    for (i = 0; i < 5; i++) {
    
    var newDiv = $("<div>");
    //title
    newDiv.append("<div>" + response.response.docs[i].headline.main + "</div>")  
    //author
    newDiv.append("<div>" + response.response.docs[i].byline.original + "</div>")  
    //snippet
    newDiv.append("<div>" + response.response.docs[i].snippet + "</div>")  
    //link
    newDiv.append("<div>" + response.response.docs[i].web_url + "</div><br>")    
    console.log(newDiv);
    $("#addhere").append(newDiv);
    }
    
    console.log(response.response.docs[0].snippet);
})
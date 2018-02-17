function loadRepo(url, callback) {
  const gitHubRequest = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              document.getElementById("example").innerHTML = this.responseText;
  
          }
      };
      xhttp.open("GET", "info.txt", true);
      xhttp.send();
  
  }

  jQuery.githubUser = function(username, callback) {
    jQuery.getJSON('https://api.github.com/users/'+username+'/repos?callback=?',callback)
 }
  
 jQuery.fn.loadRepositories = function(username) {
     this.html("<span>Querying GitHub for " + username +"'s repositories...</span>");
      
     var target = this;
     $.githubUser(username, function(data) {
         var repos = data.data; // JSON Parsing
         sortByName(repos);    
      
         var list = $('<dl/>');
         target.empty().append(list);
         $(repos).each(function() {
             if (this.name != (username.toLowerCase()+'.github.com')) {
                 list.append('<dt><a href="'+ (this.homepage?this.homepage:this.html_url) +'">' + this.name + '</a> <em>'+(this.language?('('+this.language+')'):'')+'</em></dt>');
                 list.append('<dd>' + this.description +'</dd>');
             }
         });      
       });
       
     function sortByName(repos) {
         repos.sort(function(a,b) {
         return a.name - b.name;
        });
     }
 };


  $(function() {
    $("#my-github-projects").loadRepositories(creeksidehome);
});


    // Finish your request here
    // Don't forget the callback()
// }

// function loadRepoCallback(gitHubRequest) {


  // Callback function needs to parse the JSON
  // Using the DOM get the element ID from your <ul> in your HTML
  // You will need a forEach to loop through the parsed object
  // Using the DOM create new list elements
  // Plug in the .html_url and .name from the parsed object.  To make this a link you'll need 
  // Append the new list items to the element you retrieved from HTML

//   {"name"; "first-one"}
//   {"html_url"; "https://github.com/creeksidehome/first-one",}




$(document).ready(function(){    
  $("a href").hover(function(){
      $(this).css("width", "250%");
      $(this).css("height", "250%");
  // }, function(){
  //     $(this).css("height", "100%");
  //     $(this).css("width", "100%");
  });
});




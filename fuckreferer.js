var myHeaders = new Headers();
myHeaders.append('referer', 'fuckyou');

var myInit = { 
    method: 'GET',
    headers: myHeaders,
    cache: 'default' 
            };

var myRequest = new Request('./flowers.jpg',myInit);

console.log(myRequest)
fetch(myRequest).then(function(response) {
    console.log(response);
});
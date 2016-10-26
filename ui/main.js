//Counter code
var button=documrnt.getElementbyId('counter');

button.onclick=function()
{
    //create a request object
    var request = new XMLHttpRequest();
    
    //capture the response & store it in variable 
    
    request.onreadystatechange=function()
    {
        if(request.readyState === XMLHttpRequest.DONE)
        {
            //take some action 
            if(request.status === 200)
            {
                var counter=request.responseText;
                var span=document.getElementbyId('count');
                span.innerHTML=counter.toString();
            }
        }
    };
    
    //make the request
    request.open('GET','http://shauryab.imad.hasura-app.io/counter',true);
    request.send(null);
};

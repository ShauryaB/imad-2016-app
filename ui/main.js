//counter code
var button = document.getElementById('counter');

button.onclick = function() {

//create a request object
var request = new XMLHttpRequest();


//capture the response and store it in a variable
request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE){
        //Take some action
      if(request.status === 200){
         var counter = request.responseText;
         var span = document.getElementById('count');
         span.innerHTML = counter.toString();

      }

    }

       //Not done
};

//make request
request.open('GET', 'http://shauryab.imad.hasura-app.io/counter',true);
request.send(null);
};


//submit name
	var nameInput= document.getElementById('comment_box'); //capture the input name  
	var name=nameInput.value;
	var submit = document.getElementById('submit_btn');
	submit.onclick = function() {       //pseudocode for the function
		//make a req to server and send the name 
		//capture a list of name and render it as a list
		var names = ['name1','name2','name3','name4'];
		var list='';
		for (var i=0;i<names.length;i++)
		{
			list=list + '<li>' +names[i] + '</li>';  //convert it into htnl string ad string to list element
			
		}
		var ul=document.getElementById('namelist');
		ul.innerHTML=list;
		
		};



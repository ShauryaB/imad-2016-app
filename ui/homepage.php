<!doctype html>
<html>
    <head>
        <title>Blog World</title>
        <!-- Adding bootstrap files -->
		<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet">
		<link href="/ui/style.css" rel="stylesheet" />
    </head>    
    <!--here i have ued bootstrap which are a set of predefined libraries for styling and various other things.I used the cdn maxcdn-->
    <body>                                      <!--everything for structuring happens in the body-->
		<div class="container-fluid">           <!--container fluid is already a predefined class which uses the full width of the page-->     
		    <nav class="navbar navbar-default navbar-fixed-top"> <!--nav defines a set of navigation links-->   
                <div class="container-fluid">
                    <div class="navbar-header">
                       <a class="navbar-brand" href="#">Blog World</a>
                    </div>
                    <div>
                        <ul class="nav navbar-nav navbar-right">     <!--unordered list-->
                        <li><a href="#Modal_login" role="button" data-toggle="modal"><span class="glyphicon glyphicon-log-in"></span> Log In</a></li>
						</ul>
                    </div> 
                </div>
            </nav>
        </div>
		<!--this is the end of navigation bar at top-->
		<!--Modal_login structure here.I used Modal_login as id-->
		<div class="modal fade" id="Modal_login">
		<div class="modal-dialog">
		    <div class="modal-content">
			    <div class="modal-header">
				    <button class="close" data-dismiss="modal"></button>
						<h4 class="modal-title" style="color:#000; font-family: 'Kaushan Script', cursive;">LOGIN</h4>
				</div>
				<div class="modal-body">
				    <form role="form" action="" method="POST">
						<div class="form-group">
							<input type="email" class="form-control"  placeholder="Email" name="e-mail">
						</div>
						<div class="form-group">
							<input type="password" class="form-control" placeholder="Password" name="password">
						</div>
						    <button type="submit" name="submit" class="btn btn-primary">Login</button>
					</form><br/>
	            </div>
			</div>	
	    </div>
		</div>
        <script type="text/javascript" src="/ui/main.js">
        </script>
    </body>
</html>
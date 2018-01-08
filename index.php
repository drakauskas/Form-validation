<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <title> Form validator </title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous">
  </head>
  <body>
  <div style="width: 100px; margin: 10% 40%;">
    <form>
	  First name:<br>
	  <input 			type="text" 	id= "firstname" name="firstname" onchange="check_textbox(this.id)">	<br>
	  Last name:<br>
	  <input 			type="text" 	id= "lastname" 	name="lastname" onchange="check_textbox(this.id)"> 	<br>
	  Email:<br>
	  <input 			type="text" 	id= "email" 	name="email"	onchange="check_email(this.id)">	<br>
	  <div id="submit">
	  Submit 
	  <input id="submitinput" type="submit" name="submit"> 
	  </div>
	</form>
</div>    
  </body>


  <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
  
  <script src="script.js"></script>
</html>

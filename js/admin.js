function pasuser(form)
{
	if(form.username.value=="admin" && form.password.value=="admin123")
	{
		window.location.replace("https://kakchaudhary.github.io//teacherpanel//home.html");
		//window.open('teacherpanel/home.html')
	}
	else
	{
        alert("Sorry !!  Invalid username or password")

	}
}
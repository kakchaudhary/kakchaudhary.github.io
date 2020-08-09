function pasuser(form)
{
	if(form.username.value=="admin" && form.password.value=="admin123")
	{
		window.open('studentpanel/home.html')
	}
	else
	{
        alert("Sorry !!  Invalid username or password")

	}
}
function pasuser(form)
{
	if(form.username.value=="kaushik" && form.password.value=="kaushik123")
	{
		window.open('studentpanel/home.html')
	}
	else
	{
        alert("Sorry !!  Invalid username or password")
	}
}
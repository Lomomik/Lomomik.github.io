var x=parseInt(prompt("Введите x"))
var y=parseInt(prompt("Введите y"))
var a=parseInt(prompt("Введите номер операции a"))

if ((1<=a)&&(a<=4)) {
	switch(a)
	{
	case 1:
	c=x+y
	alert(c)
	break
	case 2:
	c=x-y
	alert(c)
	break
	case 3:
	c=x*y
	alert(c)
	break
	case 4:
	c=x/y
	alert(c)
	break
	}
}else {
	alert("Введите корректное значение! от 1 до 4")
}

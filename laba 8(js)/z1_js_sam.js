var n=parseInt(prompt("Введите кол-во угглов n-угольника",""))
var r=parseInt(prompt("Введите радиус n-угольника",""))
if (n==3) {
	s=(3*r*r*Math.sqrt(3)/4)
	p=r*Math.sqrt(3)
}
if (n == 4) {
	p=8*r
	s=4*r*r
}
if (n > 4) {
	var pi = Math.PI
	a=R*2*Math.sin(pi/n)
	p=a*n
	s=(n*r*a)/2	
}
if (n < 3) {
	alert("ErroR")
}
alert(s +" Площадь")
alert(p + " Периметр")
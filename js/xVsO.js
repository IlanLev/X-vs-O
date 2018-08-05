
var p = "X";

function jucator(){
	if (p=="X"){
		p="0";
	} else {
		p="X";
	}
}

for (n = 1;n <= 9; n++) {
	var str1 = "c"+n;
	var str1= document.getElementById(str1);
	str1.onclick = function(){
		if(this.innerHTML != "X" && this.innerHTML !="0"){
		this.innerHTML = p;

		castigator();
		jucator();

		};
	};
}

function castigator(){
	if(
		(c1.innerHTML == p && c2.innerHTML == p && c3.innerHTML == p ) ||
		
		(c4.innerHTML == p && c5.innerHTML == p && c6.innerHTML == p ) ||

		(c7.innerHTML == p && c8.innerHTML == p && c9.innerHTML == p ) ||

		(c1.innerHTML == p && c5.innerHTML == p && c9.innerHTML == p ) ||

		(c3.innerHTML == p && c5.innerHTML == p && c7.innerHTML == p ) ||

		(c1.innerHTML == p && c4.innerHTML == p && c7.innerHTML == p ) ||

		(c2.innerHTML == p && c5.innerHTML == p && c8.innerHTML == p ) ||

		(c3.innerHTML == p && c6.innerHTML == p && c9.innerHTML == p ) 

		) {
		document.getElementById("table").innerHTML = p ;
	}
}



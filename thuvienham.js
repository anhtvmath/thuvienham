function tp(a,b) {
    return "\\displaystyle\\int\\limits_{"+String(a)+"}^{"+String(b)+"}f(x)\\mathrm{d}x";
}
function ngoac(n) {
    if (n >= 0) {
        return String(n);
    }
    else {
        return "("+String(n)+")";
    }
}
function giatrituyetdoi(n) {
    if (n >= 0) {
        return n;
    }
    else {
        return -n;
    }
}
function bacbacongtrucong(x1,x2,y1,y2) {
    return "<center>$$" + 
    "\\usetikzlibrary{calc,angles,quotes,patterns,intersections,through,fillbetween,shapes,arrows}" +
    "\\begin{tikzpicture}[very thick,yscale=0.8,xscale=1.4,font=\\fontsize{18}\\selectfont\\bfseries]" + 
    "\\def\\a{8}" + 
    "\\def\\b{7}" + 
    "\\draw (-0.5,0.5) rectangle (\\a-0.5,-\\b+0.5);" + 
    "\\draw (-0.5,-0.5)--(\\a-0.5,-0.5);" + 
    "\\draw (-0.5,-1.5)--(\\a-0.5,-1.5);" + 
    "\\draw (0.5,0.5)--(0.5,-\\b+0.5);" + 
    "\\path" + 
    "(0,0) node{$x$}" + 
    "(0,-1) node{$f'(x)$}" + 
    "(0,-4) node{$f(x)$}" + 
    "(1,0) node{$-\\infty$}" + 
    "(1,-6) node(A){$-\\infty$}" + 
    "(3,0) node{$"+String(x1)+"$}" + 
    "(3,-1) node{$0$}" + 
    "(3,-3) node(B){$"+String(y1)+"$}" + 
    "(5,0) node{$"+String(x2)+"$}" + 
    "(5,-1) node{$0$}" + 
    "(5,-5) node(C){$"+String(y2)+"$}" + 
    "(7,0) node{$+\\infty$}" + 
    "(7,-2) node(D){$+\\infty$}" + 
    "(2,-1) node{$+$}" + 
    "(4,-1) node{$-$}" + 
    "(6,-1) node{$+$};" + 
    "\\draw[->,>=stealth] (A)--(B);" + 
    "\\draw[->,>=stealth] (B)--(C);" + 
    "\\draw[->,>=stealth] (C)--(D);" + 
    "\\end{tikzpicture}$$</center>";
}
function bangxetdaudaohamtrucongtru(x1,x2) {
    return "<center>$$" + 
    "\\usetikzlibrary{calc,angles,quotes,patterns,intersections,through,fillbetween,shapes,arrows}" +
    "\\begin{tikzpicture}[very thick,yscale=0.8,xscale=1.4,font=\\fontsize{18}\\selectfont\\bfseries]" + 
    "\\def\\a{8}" + 
    "\\def\\b{2}" + 
    "\\draw (-0.5,0.5) rectangle (\\a-0.5,-\\b+0.5);" +    
    "\\draw (-0.5,-0.5)--(\\a-0.5,-0.5);" + 
    "\\draw (0.5,0.5)--(0.5,-\\b+0.5);" + 
    "\\path" + 
    "(0,0) node{$x$}" + 
    "(1,0) node{$-\\infty$}" + 
    "(3,0) node{$"+String(x1)+"$}" + 
    "(5,0) node{$"+String(x2)+"$}" +
    "(7,0) node{$+\\infty$}" + 
    "(0,-1) node{$f'(x)$}" + 
    "(2,-1) node{$-$}" + 
    "(3,-1) node{$0$}" + 
    "(4,-1) node{$+$}" + 
    "(5,-1) node{$0$}" + 
    "(6,-1) node{$-$};" +   
    "\\end{tikzpicture}$$</center>";
}
function trungphuongcongtrucongtru(a,b,c) {
    return "<center>$$" + 
    "\\usetikzlibrary{calc,angles,quotes,patterns,intersections,through,fillbetween,shapes,arrows}" +
    "\\begin{tikzpicture}[very thick,yscale=0.8,xscale=1.4,font=\\fontsize{18}\\selectfont\\bfseries]" + 
    "\\def\\a{10}" +
    "\\def\\b{7}" +
    "\\draw (-0.5,0.5) rectangle (\\a-0.5,-\\b+0.5);" +
    "\\draw (-0.5,-0.5)--(\\a-0.5,-0.5);" +
    "\\draw (-0.5,-1.5)--(\\a-0.5,-1.5);" +
    "\\draw (0.5,0.5)--(0.5,-\\b+0.5);" +
    "\\path" +
    "(0,0) node{$x$}" +
    "(0,-1) node{$f'(x)$}" +
    "(0,-4) node{$f(x)$}" +
    "(1,0) node{$-\\infty$}" +
    "(1,-6) node(A){$-\\infty$}" +
    "(3,0) node{$"+String(-a)+"$}" +
    "(3,-1) node{$0$}" +
    "(3,-2) node(B){$"+String(b)+"$}" +
    "(5,0) node{$0$}" +
    "(5,-1) node{$0$}" +
    "(5,-5) node(C){$"+String(c)+"$}" +
    "(7,0) node{$"+String(a)+"$}" +
    "(7,-1) node{$0$}" +
    "(7,-2) node(D){$"+String(b)+"$}" +
    "(9,0) node{$+\\infty$}" +
    "(9,-6) node(E){$-\\infty$}" +
    "(2,-1) node{$+$}" +
    "(4,-1) node{$-$}" +
    "(6,-1) node{$+$}" +
    "(8,-1) node{$-$};" +    
    "\\draw[->,>=stealth] (A)--(B);" +
    "\\draw[->,>=stealth] (B)--(C);" +
    "\\draw[->,>=stealth] (C)--(D);" +
    "\\draw[->,>=stealth] (D)--(E);" +
    "\\end{tikzpicture}$$</center>";
}
function bachai(a,x) {
    if (a > 0) {
        return "("+x+"-"+String(a)+")^2";
        }
    if (a === 0) {
        return x+"^2";
    }
    if (a < 0) {
        return "("+x+"+"+String(-a)+")^2";
    }
}
function ucln(m, n) {
	while (m !== n) {
		if (m > n) {
			m = m - n;
		} else {
			n = n - m;
		}
	}
	return m;
}
function kiemtracp(n) {
	var i = 0;
	while (i**2 < n) {
		i++;
	}
	return n === i**2;
}
function uoccpmax(n) {
	var danhsachuoc = [];
	for (let i = 1; i <= n; i++) {
		if (n % i === 0 && kiemtracp(i) === true) {
			danhsachuoc.push(i);
		}
	}
	return Math.max(...danhsachuoc);
}
function canbachai(n) {
	var a = Math.sqrt(uoccpmax(n));
	var b = n / uoccpmax(n);
	if (a === 1) {
		if (b === 1) {
			return "1";
		} else {
			return "\\sqrt{"+String(b)+"}";
		}
	} else {
		if (b === 1) {
			return String(a);
		} else {
			return String(a)+"\\sqrt{"+String(b)+"}";
		}
	}
}
function hesodau(a,x) {
	if (a > 1 || a < -1) {
		return String(a) + x;
	}
	if (a === 1) {
		return x;
	}
	if (a === 0) {
		return "";
	}
	if (a === -1) {
		return "-" + x;
	}
}
function hesosau(a,x) {
	if (a > 1) {
		return "+" + String(a) + x;
	}
	if (a === 1) {
		return "+" + x;
	}
	if (a === 0) {
		return "";
	}
	if (a === -1) {
		return "-" + x;
	}
	if (a < -1) {
		return String(a) + x;
	}
}
function kiemtrakhacnhau(a, b, c, d) {
	return (a !== b && a !== c && a !== d && b !== c && b !== d && c !== d);
}
function phansoduong(m,n) {
	var a = m/ucln(m,n);
	var b = n/ucln(m,n);
	if (b === 1) {
		return String(a);
	} else {
		return "\\dfrac{"+String(a)+"}{"+String(b)+"}"
	}
}
function phanso(m, n) {
	if (m*n > 0) {
		return phansoduong(Math.abs(m), Math.abs(n));
	} else if (m * n < 0) {
		return "-"+phansoduong(Math.abs(m), Math.abs(n));
	} else {
		return "0";
	}
}
function randomchoice(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomchoicelist(danhsach) {
    if (danhsach.length === 0) {
        return "Danh sách trống";
    } else {
        return danhsach[Math.floor(Math.random() * danhsach.length)];
    }
}
function C(n,k) {
	if (k === 0 || k === n) {
		return 1;
	}
	else {
		return C(n-1,k-1) + C(n-1,k);
	}
}
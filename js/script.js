function mode_nuit(){
	let texte = document.getElementsByTagName('p');
	let col_titre = document.getElementsByTagName('h1')[0].style.color;
	for (let i = 0; i < texte.length; i++) {
    	texte[i].style.color = "#FFFFFF";
    	texte[i].style.backgroundColor = "#222222";
    }
	document.body.style.backgroundColor = "#2d2d2d";
	document.getElementsByTagName('h1')[0].style.color =col_titre;
	document.getElementsByClassName("mode-nuit")[0].value="Mode jour";
}

function mode_jour(){
	let texte = document.getElementsByTagName('p');
	let col_titre = document.getElementsByTagName('h1')[0].style.color;
	for (let i = 0; i < texte.length; i++) {
    	texte[i].style.color = "#000000";
    	texte[i].style.backgroundColor = "#DDDDDD";
    }
	document.body.style.backgroundColor = "#dbdbdb";
	document.getElementsByTagName('h1')[0].style.color =col_titre;
	document.getElementsByClassName("mode-nuit")[0].value="Mode nuit";
}

function change_color(secret){
	let mode = document.getElementsByClassName("mode-nuit")[0].value;
	if(mode=="Mode nuit"){
		mode_nuit();
	}
	else if(mode=="Mode jour"){
		mode_jour();
	}
	if(secret){
		if(mode=="Mode nuit"){
			change_secret(0);
		}
		else{
			change_secret(1);
		}
	}
}

function change_photo(img1, img2, change_name, name){
	document.getElementById("photo").src = photo.src.replace(img1,img2);
	if(change_name){
		document.getElementById("nom-album").innerText = name;
	}
}

function like(){
	if(document.getElementsByClassName("like")[0].value=="like"){
		document.getElementsByClassName("like")[0].value="dislike";
		document.getElementById("emoji").src = emoji.src.replace("emoji_triste.png","emoji_content.png");
	}
	else if(document.getElementsByClassName("like")[0].value=="dislike"){
		document.getElementsByClassName("like")[0].value="like";
		document.getElementById("emoji").src = emoji.src.replace("emoji_content.png","emoji_triste.png");
	}
}

function secret(){
	let attribut = document.getElementsByTagName("bdo");
	for(let i=0; i<attribut.length; i++){
		if(attribut[i].getAttribute("dir")=="ltr"){
			document.getElementsByTagName("bdo")[i].setAttribute("dir", "rtl");
		}
	else{
			document.getElementsByTagName("bdo")[i].setAttribute("dir", "ltr");
		}
	}
}

function change_secret(num){
	if(num==1){
		document.getElementsByClassName("chut")[0].style.backgroundColor="#dbdbdb";
		document.getElementsByClassName("chut")[0].style.color="#BBBBBB";
	}
	else{
		document.getElementsByClassName("chut")[0].style.backgroundColor="#2d2d2d";
		document.getElementsByClassName("chut")[0].style.color="#1f1f1f";
	}
}
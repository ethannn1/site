// Définitions de variables qui vont servir pour le dégradé
let stop=false;
let periode;
let col=0;
let signe=1;

// Met le site en mode nuit
function mode_nuit(){
	let texte = document.getElementsByTagName('p');
	let col_titre = document.getElementsByTagName('h1')[0].style.color;
	for (let i = 0; i < texte.length; i++) {
    	texte[i].style.color = "#FFFFFF";
    	texte[i].style.backgroundColor = "#222222";
    }
    let bouttons = document.getElementsByTagName("input");
    for (let j=0; j<bouttons.length; j++){
    	bouttons[j].style.color = "#FFFFFF";
    	bouttons[j].style.backgroundColor = "#222222";
    	bouttons[j].style.borderColor = "#BBBBBB"
    }
	document.body.style.backgroundColor = "#2d2d2d";
	document.getElementsByTagName('h1')[0].style.color =col_titre;
	document.getElementsByClassName("mode-nuit")[0].value="Mode jour";
}

// Met le site en mode jour
function mode_jour(){
	let texte = document.getElementsByTagName('p');
	let col_titre = document.getElementsByTagName('h1')[0].style.color;
	for (let i = 0; i < texte.length; i++) {
    	texte[i].style.color = "#000000";
    	texte[i].style.backgroundColor = "#DDDDDD";
    }
    let bouttons = document.getElementsByTagName("input");
    for (let j=0; j<bouttons.length; j++){
    	bouttons[j].style.color = "#000000";
    	bouttons[j].style.backgroundColor = "#CCCCCC";
    	bouttons[j].style.borderColor = "#A0A0A0"
    }
	document.body.style.backgroundColor = "#dbdbdb";
	document.getElementsByTagName('h1')[0].style.color =col_titre;
	document.getElementsByClassName("mode-nuit")[0].value="Mode nuit";
}

// Gère le bouton jour/nuit
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

// Change la photo et optionnellement le nom de l'album pour index2
function change_photo(img1, img2, change_name, name){
	document.getElementById("photo").src = photo.src.replace(img1,img2);
	if(change_name){
		document.getElementById("direction-nom-alb").innerText = name
	}
}

// Gère le like (change le texte du boutton et l'emoji)
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

// Change la couleur des boutons cachés pour qu'ils le reste en mode nuit ou en mode jour
function change_secret(num){
	if(num==1){
		document.getElementsByClassName("mystere")[0].style.backgroundColor="#dbdbdb";
		document.getElementsByClassName("mystere")[0].style.color="#BBBBBB";
	}
	else{
		document.getElementsByClassName("mystere")[0].style.backgroundColor="#2d2d2d";
		document.getElementsByClassName("mystere")[0].style.color="#1f1f1f";
	}
}

// Change le fichier css au quel la page est lié
function change_style(){
	let style = document.getElementsByTagName("link")[0];
	if(style.getAttribute("href")=="css/style.css"){
		style.setAttribute("href","css/style2.css");
	}
	else{
		style.setAttribute("href","css/style.css");
	}
}

// Génère un code hexa decimal en fonction de la variable col
// Crée un dégradé en appellant régulièrement la fonction 
let degrade = function(){
	col+=signe;
	document.getElementsByTagName('h1')[0].style.color=`#FF${((col)%15).toString(16)}${((col)%15).toString(16)}00`
	if(((col%15)>13)||(col<1)){
		signe*=-1;
	}
};

// Appelle la fonction degrade() toutes les 85ms si le bouton secret est pressé
function mystere(){
	if(!(stop)){
		periode = setInterval(degrade, 85); 
		stop = true;
	}
	else{
		clearInterval(periode);
		stop=false;
	}
}

// Change la direction de toutes les balises <bdo>
function mystere2(){
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
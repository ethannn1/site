// Définitions de variables qui vont servir pour le dégradé
let stop=false;
let periode;
let col=0;
let signe=1;

// Met le site en mode nuit
function mode_nuit(){
	// Change la couleur de toutes les balises p
	let texte = document.getElementsByTagName('p');
	for (let i = 0; i < texte.length; i++) {
    	texte[i].style.color = "#FFFFFF";
    	// Choisi la couleur du background des balises p en fonction du style utilisé
    	if(document.getElementsByTagName("link")[0].getAttribute("href")=="css/style.css"){texte[i].style.backgroundColor = "#222222";}
    	else{texte[i].style.backgroundColor = "#2d2d2d";}
    }
    // Change la couleur du texte, du background et de la bordure de toutes les balises input
    let bouttons = document.getElementsByTagName("input");
    for (let j=0; j<bouttons.length; j++){
    	bouttons[j].style.color = "#FFFFFF";
    	bouttons[j].style.backgroundColor = "#222222";
    	bouttons[j].style.borderColor = "#BBBBBB";
    }

    // Sert pour index3, Change la couleur des td, (Nom, Prénom...)
    let tds = document.getElementsByTagName("td");
    for (let k = 0; k < tds.length; k++) {
    	tds[k].style.color="#FFFFFF";
    }
    
    // Uniquement pour index3, change la couleur de la légende du formulaire
    // Mais aussi du champ select et des champs option pour la livraison en point-relais
    if(document.getElementsByTagName("legend").length>0){
    	let select = document.getElementsByTagName("select")[0];
    	document.getElementsByTagName("legend")[0].style.color="#FFFFFF";
    	select.style.color="#FFFFFF";
    	select.style.backgroundColor="#222222";
    	select.style.borderColor = "#BBBBBB";
    	for(let m=0; m<2;m++){
    		document.getElementsByTagName("option")[m].style.color="#FFFFFF";
    		document.getElementsByTagName("option")[m].style.backgroundColor="#222222";
    	}
    }
    // Change le fond de la page et la class du bouton pour que lorsque l'on rappuie ça mettera la page en mode jour
	document.body.style.backgroundColor = "#2d2d2d";
	document.getElementsByClassName("mode-nuit")[0].value="Mode jour";
}

// Met le site en mode jour
function mode_jour(){
	let texte = document.getElementsByTagName('p');
	for (let i = 0; i < texte.length; i++) {
    	texte[i].style.color = "#000000";
    	texte[i].style.backgroundColor = "#DDDDDD";
    	if(document.getElementsByTagName("link")[0].getAttribute("href")=="css/style.css"){texte[i].style.backgroundColor = "#C0C0C0";}
    	else{texte[i].style.backgroundColor = "#dbdbdb";}
    }
    let bouttons = document.getElementsByTagName("input")
    for (let j=0; j<bouttons.length; j++){
    	bouttons[j].style.color = "#000000";
    	bouttons[j].style.backgroundColor = "#CCCCCC";
    	bouttons[j].style.borderColor = "#A0A0A0";
    }

    let tds = document.getElementsByTagName("td");
    for (let k = 0; k < tds.length; k++) {
    	tds[k].style.color="#000000";
    }
   if(document.getElementsByTagName("legend").length>0){
    	document.getElementsByTagName("legend")[0].style.color="#000000";
    	let select = document.getElementsByTagName("select")[0];
    	select.style.color="#000000";
    	select.style.backgroundColor="#CCCCCC";
    	select.style.borderColor = "#A0A0A0";
    	for(let m=0; m<2;m++){
    		document.getElementsByTagName("option")[m].style.color="#000000";
    		document.getElementsByTagName("option")[m].style.backgroundColor="#CCCCCC";
    	}
    }
	document.body.style.backgroundColor = "#dbdbdb";
	document.getElementsByClassName("mode-nuit")[0].value="Mode nuit";
}

// Gère le bouton jour/nuit
function change_color(secret){
	// Met la page en mode jour si elle est en mode nuit et inversement
	let mode = document.getElementsByClassName("mode-nuit")[0].value;
	if(mode=="Mode nuit"){
		mode_nuit();
	}
	else if(mode=="Mode jour"){
		mode_jour();
	}
	// Permet de changer la couleur des boutons secrets présents dans index et index2
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
		document.getElementById("direction-nom-alb").innerText = name;
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

// Génère un code hexadecimal en fonction de la variable col
// Crée un dégradé en appellant régulièrement la fonction 
let degrade = function(){
	col+=signe;
	document.getElementsByTagName('h1')[0].style.color=`#FF${((col)%15).toString(16)}${((col)%15).toString(16)}00`;
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

/*
	---------------- FORMULAIRE ----------------
*/

// fonction appelée lorsque le focus entre dans le champ de saisie de l'adresse mail
function resetColor(email){
	email.style.color = "black";
}

// fonction appelée lorsque le focus sort du champ de saisie de l'adresse mail
function checkEmail(email) {
	// Recherche d'un "@"
	var atPos = email.value.indexOf('@');
	// Recherche du dernier "."
	var lastDotPos = email.value.lastIndexOf('.');
	// Vérifier qu'il y a bien un "@" suivi d'un "." encadré par au moins un caratère
	if (atPos != -1 && lastDotPos != -1){
		// Si la vérification réussie, mettre le texte en vert
		email.style.color = "green";
		return true;
	}
	else{
		// Si la vérification échoue, mettre le texte en rouge
		email.style.color = "red";
		return false;
	}
}

// fonction appelée lorsque la liste déroulante est pise à jour
function cacherMontrerAdresse(selectTShirt){
	// Le paramètre de la fonction est la liste déroulante
	var AdresseCanvas = document.getElementById("AdresseCanvas");
	// Valeur ("Non") => cacher le champ de saisie
	if (selectTShirt.selectedIndex == 0){
		AdresseCanvas.style.visibility = "hidden";
		// réinitialiser le champs de saisie
		AdresseCanvas.getElementsByTagName("input")[0].value = "";
	} else {
		// Supprimer la classe CSS cachant le canvas
		AdresseCanvas.style.visibility = "visible";
	}
}

// fonction appelée lorsque l'utilisateur valide la saisie du formulaire
function valider() {
	// Vérifier que les champs requis sont bien renseignés
	var champsRequis = document.getElementsByClassName('Required');
	for (let champ of champsRequis){
		if (champ.value == ""){
			alert("Formulaire incomplet");
			return;
		}
	}
	
	// Vérifier que l'email est valide
	if (!checkEmail(document.getElementById("Email"))){
		alert("Email incorrect");
		return;
	}
	
	// Soumettre le formulaire au serveur
	document.formulaire.submit();
}
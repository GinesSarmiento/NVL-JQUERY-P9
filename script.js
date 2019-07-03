
$(document).ready(function() {
	
	//-----Añade una clase a las decadas

	//Obtenemos todos los elementos decadas y los almacenamos en una matriz
	var decadas = $("div#container").children("div");

	//Creamos un bucle para recorrer los elementos de la matriz
	for (i = 0; i < decadas.length ; i++) {
		//Añadimos la clase con el mismo texto que tiene el atributo id
		decadas[i].classList.add($(decadas[i]).attr("id"));
	}

	//-----Otenemos el tipo y la decada del grupo Héroes del silencio

	//Obtenemos los elementos padre del grupo Héroes
	var info_heroes = $("p#heroes").parents("div");

	//Obtenemos los datos buscando en las clases de los elementos padre y los almacenanos cada uno en una variable
	var decada_heroes = $(info_heroes[1]).attr("class");
	var tipo_heroes =$(info_heroes[0]).attr("class");
	//Mostramos los datos obtenidos en la consola
	console.log("Los datos del grupo Héroes del silencio son:")
	console.log("     Decada: " + decada_heroes);
	console.log("     Tipo: " + tipo_heroes);

	//-----Añadimos un identificador a los grupos siguientes a Héroes(dentro de la misma categoría)

	//Obtenemos todos los elementos hermanos que hay a continuación de Héroes y los almacenamos en una matriz
	var heroes_hermanos = $("p#heroes").nextAll("p");
	
	//Creamos un bucle que recorra todos los elementos hermanos encontrados
	for (i = 0; i < heroes_hermanos.length; i++) {
		//Añadimos un atributo id con el texto almacenado en el elemento
		$(heroes_hermanos[i]).attr("id",$(heroes_hermanos[i]).text());
	}

	//-----Añadimos el grupo Queen si no existe

	//Buscamos si existe un grupo llamado Queen dentro de los internacionales
	var queen = $(".internacional").find("#queen");
	//Comprobamos si existe o no
	if (queen.length==0){
		//En caso de que no exista, creamos un elemento nuevo
		var reina = $("<p>Queen</p>");
		//Añadimos dicho elemento a continuación de los existentes dentro de los grupos internacionales de los ochenta
		$(".ochenta").find(".internacional").append(reina);
	}else{
		//En caso de que ya exista, mostramos un mensaje en la consola
		console.log("El elemento Queen ya existe");
	}
});
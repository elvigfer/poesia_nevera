$(document).ready(function(){$("#adelante").fadeIn(4000);});

$(document).ready(function() {	
    //Pop up con las instrucciones
    var id = '#instrucciones';
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    $('#mask').css({'width':maskWidth,'height':maskHeight});
    $('#mask').fadeIn(500);	
    $('#mask').fadeTo("slow",0.9);
    var winH = $(window).height();
    var winW = $(window).width();
    $(id).css('top',  winH/2-$(id).height()/2);
    $(id).css('left', winW/2-$(id).width()/2);
    $(id).fadeIn(2000);
    $('.window .close').click(function (e) {
    e.preventDefault();

    $('#mask').hide();
    $('.window').hide();
    });   
    });

//configuración del drag and drop para el juego
const items = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.droparea');

items.forEach(item => {
    item.addEventListener('dragstart', () => {
        item.classList.add('dragging');
        console.log("dragging");
    });
    item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
    });
});

//Pop up cuando se acierta
function felicitacion (){
    setTimeout(function(){var nombre = '#enhorabuena';
    var mascaraHeight = $(document).height();
    var mascaraWidth = $(window).width();
    $('#mascara').css({'width':mascaraWidth,'height':mascaraHeight});
    $('#mascara').fadeIn(500);	
    $('#mascara').fadeTo("slow",0.9);
    var venH = $(window).height();
    var venW = $(window).width();
    $(nombre).css('top',  venH/2-$(nombre).height()/2);
    $(nombre).css('left', venW/2-$(nombre).width()/2);
    $(nombre).fadeIn(2000); 	
        
    // //if close button is clicked
    // $('.ventana .cerrar').click(function (e) {
    // //Cancel the link behavior
    // e.preventDefault();
    
    // $('#mascara').hide();
    // $('.ventana').hide();
    // });
},1000);
}
//animación cuando se falla (no funciona :)))
// function error (){
//     $(".dragging").shake();
// }
containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        const draggableId = draggable.getAttribute('id');
        const containerId = e.target.getAttribute('data-draggable-id')
        if(draggableId === containerId){
        container.appendChild(draggable);
        felicitacion();
        // setTimeout( function() { window.location.href = "menu.html"; }, 1000 );
    }
        else{
            $(".dragging").shake(); 
        }
    });

    // const draggableId = draggable.getAttribute("id");
    // const dropareaId = e.target.getAttribute("data-draggable-id");
    // if(draggableId === dropareaId){

});
//Código para el juego libre
//Obtener palabras random del array
function getMultipleRandom(palabras, num) {
    const shuffled = [...palabras].sort(() => 0.5 - Math.random());
  
    return shuffled.slice(0, num);
  }
  const palabras = ["yo", "tú", "nosotros", "ellos", "ellas", "él", "ella", "piedra", "corazón", "amigo", "amiga", "quiero", "tienes", "buscamos", "querría", "siento", "he", "has", "hemos", "han", "tienen", "miento", "besas", "abrazo", "oscuro", "sé", "rompe", "roto", "nuevo", "noche", "día", "amores", "risa", "dije", "creo", "hecho", "había", "marchado", "yo", "estrella", "s", "s", "s", "lujo", "victoria", "inicio", "robado", "enamorados", "loca", "loco", "locura", "Madrid", "Barcelona", "mamá", "azul", "rojo", "veo", "creer" , "pienso", "esperas", "tenemos", "tiempo", "castillo", "veces", "todas", "siempre", "nunca", "amanecer", "antes", "después", "habías", "sol", "salir", "beber", "intentado", "libre", "cansado", "querido", "amable", "sonrisa", "ansiedad", "feliz", "llorando", "llorado", "encerrado", "encerrada", "nadie", "libro", "poema", "poesía", "mis", "tus", "sus", "los", "las", "lo", "la", "le", "mi", "tu", "sueño", "prohibido", "guerra", "perro", "he", "has", "hemos", "han", "debo", "sé", "se", "ellas", "nosotras", "verdad", "de", "de", "himno", "la", "orgasmo", "sangre", "puedo", "parar", "puedes", "podemos", "dormir", "dormido", "dolor", "sueño", "cerveza", "vaso", "cantar", "cantando", "besando", "tocar", "café", "muera", "muerto", "muerta", "teoría", "quizás", "mejor", "peor", "malo", "tan", "tanto", "pestañas", "árbol", "que", "que", "que", "aquel", "ese", "esa", "bonito", "lugar", "vida", "chico", "chica", "recordar", "en", "en", "en", "me", "pregunto", "si", "fiesta", "flor", "una", "uno", "un", "unas", "unos", "hay", "pétalo", "dije", "mentí", "besé", "fui", "fue", "papel", "color", "contigo", "sin", "con", "fumando", "sufrir", "escuchando", "escuché", "ni", "dime", "di", "le", "vas", "van", "qué", "vez", "estaba", "parar", "a", "a", "suerte", "calor", "mira", "miro", "porque", "por", "de", "de", "es", "veces", "encontrar", "perder", "lugar", "es", "frío", "estrella", "nube", "miedo", "revolución", "foto", "pasaba", "encender", "escapa", "vimos", "vi", "nos", "les", "dé", "pistola", "dibujo", "pondré", "nuestra", "ganas", "quedan", "historia", "cuenta", "escribo", "ruido", "silencio", "pido", "morena", "mía", "mío", "tuyo", "y", "y", "de", "futuro"]
  //probar si funciona
  console.log(getMultipleRandom(palabras, 2)); 
  let aleatorias = getMultipleRandom(palabras, 30);
  //crear los imanes
  aleatorias.forEach(aleatoria => {
      let nuevaPalabra = document.createElement("div");
      nuevaPalabra.innerHTML = aleatoria;
      document.querySelector("#opcioneslibre").appendChild(nuevaPalabra);
      nuevaPalabra.classList.add("iman");
      nuevaPalabra.classList.add("dragfree");
    //   nuevaPalabra.setAttribute("draggable", "true");
  } )
  //habilitar drag and drop
  window.onload = () => {
      
    /** Drag with interact.js */
    let item;
    interact('.dragfree')
        .draggable({
            // inertia: true,            
            // modifiers: [
            // interact.modifiers.restrictRect({
            //     restriction: 'parent',
            //     endOnly: true
            // })
            // ],
            // autoScroll: true,
            listeners: {      
                end (e){
                    let target = e.target
                    if(e.relatedTarget == null){
                        // translate the element
                        target.style.webkitTransform =
                        target.style.transform =
                        'translate(0px, 0px)'

                        // update the posiion attributes
                        target.setAttribute('data-x', 0)
                        target.setAttribute('data-y', 0)
                    }
                },                     
                move (e) {
                    let target = e.target
                    // keep the dragged position in the data-x/data-y attributes
                    let x = (parseFloat(target.getAttribute('data-x')) || 0) + e.dx
                    let y = (parseFloat(target.getAttribute('data-y')) || 0) + e.dy
                    
                    // translate the element
                    target.style.webkitTransform =
                        target.style.transform =
                        'translate(' + x + 'px, ' + y + 'px)'
                    
                    // update the posiion attributes
                    target.setAttribute('data-x', x)
                    target.setAttribute('data-y', y)
                },
            }
        });

    interact('#arealibre')
        .dropzone({
            accept: '.dragfree',
            ondragenter: function (event) {
                event.target.classList.add('drop-activated')
            },
            ondragleave: function (event) {
                event.target.classList.remove('drop-activated')
            },
        })

    }
    document.querySelector('.download').addEventListener('click', function() {
    html2canvas(document.querySelector("#elemcaptura"), {
        onrendered: function(canvas)
        {
            canvas.toBlob(function(blob) {
                saveAs(blob, "poesia_nevera.png");
                });
                }
                });
            })
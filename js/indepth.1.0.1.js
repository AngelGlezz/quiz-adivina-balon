
var ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
var ventana_ancho = $(window).width();
var disable=true;
var active_ace=false;
var input_text=false;
var input_text2=false;
var input_goles=false;
var input_radio=false;
var tenis_name="";
var respuestas_array = new Array();
var final_time = 0;
var aciertos = 0;

$("#indepth_boton_empezar").on("click",function(){
	$("#indepth_boton_empezar").click(false);
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	 
	 var data = {

  "preguntas": [
    {
      "pregunta": "¿Dónde está el balón?",
      "respuestas": [
        {
          "respuesta": "a",
          "tipo": "false"
        },
        {
          "respuesta": "b",
          "tipo": "false"
        },
        {
          "respuesta": "c",
          "tipo": "true"
        }
      ]
    },
    {
      "pregunta": "¿Dónde está el balón?",
      "respuestas": [
        {
          "respuesta": "a",
          "tipo": "false"
        },
        {
          "respuesta": "b",
          "tipo": "false"
        },
        {
          "respuesta": "c",
          "tipo": "true"
        }
      ]
    },
    {
      "pregunta": "¿Dónde está el balón?",
      "respuestas": [
        {
          "respuesta": "a",
          "tipo": "true"
        },
        {
          "respuesta": "b",
          "tipo": "false"
        },
        {
          "respuesta": "c",
          "tipo": "false"
        }
      ]
    },
    {
      "pregunta": "¿Dónde está el balón?",
      "respuestas": [
        {
          "respuesta": "a",
          "tipo": "false"
        },
        {
          "respuesta": "b",
          "tipo": "false"
        },
        {
          "respuesta": "c",
          "tipo": "true"
        }
      ]
    },
    {
      "pregunta": "¿Dónde está el balón?",
      "respuestas": [
        {
          "respuesta": "a",
          "tipo": "false"
        },
        {
          "respuesta": "b",
          "tipo": "false"
        },
        {
          "respuesta": "c",
          "tipo": "true"
        }
      ]
    },
    {
      "pregunta": "¿Dónde está el balón?",
      "respuestas": [
        {
          "respuesta": "a",
          "tipo": "false"
        },
        {
          "respuesta": "b",
          "tipo": "true"
        },
        {
          "respuesta": "c",
          "tipo": "false"
        }
      ]
    },
    {
      "pregunta": "¿Dónde está el balón?",
      "respuestas": [
        {
          "respuesta": "a",
          "tipo": "true"
        },
        {
          "respuesta": "b",
          "tipo": "false"
        },
        {
          "respuesta": "c",
          "tipo": "false"
        }
      ]
    },
    {
      "pregunta": "¿Dónde está el balón?",
      "respuestas": [
        {
          "respuesta": "a",
          "tipo": "true"
        },
        {
          "respuesta": "b",
          "tipo": "false"
        },
        {
          "respuesta": "c",
          "tipo": "false"
        }
      ]
    },
    {
      "pregunta": "¿Dónde está el balón?",
      "respuestas": [
        {
          "respuesta": "a",
          "tipo": "true"
        },
        {
          "respuesta": "b",
          "tipo": "false"
        },
        {
          "respuesta": "c",
          "tipo": "false"
        }
      ]
    },
    {
      "pregunta": "¿Dónde está el balón?",
      "respuestas": [
        {
          "respuesta": "a",
          "tipo": "false"
        },
        {
          "respuesta": "b",
          "tipo": "true"
        },
        {
          "respuesta": "c",
          "tipo": "false"
        }
      ]
    }
  ]
};
		  preguntas=data.preguntas;
		 
		 $("#indepth_pregunta_cont").html("");
		 
		 $.each(preguntas, function( i, item ) {
			 
			var div=' <div class="indepth_pregunta_item"><div class="indepth_pregunta">'+(i+1)+'- '+item.pregunta+'</div><div class="indepth_pregunta_main"><div class="indepth_pregunta_img"><img src="'+urlIndepth+'images/preguntas/'+(i+1)+'.png" /></div><div class="indepth_respuestas_cont" num="'+i+'">';
				
			var div_items="";
			$.each(item.respuestas, function( j, items ) {
				div_items+='<div class="indepth_respuesta_item active" num="'+j+'"><img src="'+urlIndepth+'images/boton/'+items.respuesta+'.png"></div>';
			});						
										
			var div_fin='</div></div></div>';
			 
			 $("#indepth_pregunta_cont").append(div+div_items+div_fin);			 
		 });

		 
		 $("#indepth_page1").css({
			"top":ventana_alto-100,
			"visibility":"visible",
			"height": "auto"
		});
		
		$("#nav-bar-stats,#top-bar-wrapper,#body-wrapper").hide();
		
		$("#indepth_page1").show();
		
		$("#indepth_page1").animate({
      top: 0
    },2000);
		
		$(document).on("click",".indepth_respuesta_item",function(){
				
			var respuesta_cont = $(this).parent();
			var pregunta_num = respuesta_cont.attr("num");
			var respuesta_num = $(this).attr("num");
			var pregunta_obj = preguntas[pregunta_num];
			var respuesta_obj = pregunta_obj.respuestas[respuesta_num];

      var content = parseInt($(".indepth_pregunta_item").css("height"));
      var margin = parseInt($(".indepth_pregunta_item").css("margin-bottom"));
      var padding = parseInt($(".indepth_pregunta_item").css("padding-top"));
      var mov = content + margin + padding;
      var image_c = $(this).parent().prev().find('img')[0];
      $(image_c).attr('src', 'images/resueltas/'+(parseInt(pregunta_num)+1)+'.png');
      $(".indepth_pregunta_item").animate({"top": "-="+mov+"px"}, 4000);
			
			tipo= (respuesta_obj.tipo === "true");
			
			if(tipo){
				$(this).addClass("bien");
				respuestas_array[pregunta_num]=true;
			}else{
				$(this).addClass("mal");
				respuestas_array[pregunta_num]=false;
			}
			
			respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
			respuesta_cont.find('.indepth_respuesta_item').click(false);
						
						
						
			if(preguntas.length == respuestas_array.length){
				respuestas_num=0;
				
					$.each(respuestas_array, function( i, item ) {
					  	if(item!=undefined)
					  		respuestas_num++;
				  	});
				  	
				 console.log("respuestas " + respuestas_num);
				 console.log(respuestas_num);
				
				if(respuestas_num == preguntas.length){
					window.setTimeout(finish_test, 700);
				}
				
			}
			
		});
		
		
});


var totalfb = "";
function finish_test(){

  ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();;
  var ventana_ancho = $(window).width();

  $("#indepth_resultados").css({
      "visibility": "visible",
      "position":"fixed",
      "top": 0,
      "left": -ventana_ancho
    });
    
    $("#indepth_resultados").animate({
      "left": 0
    },2000, function(){
      $("html, body, #indepth_page1").css("overflow","hidden");
    });

    $.each(respuestas_array, function( i, item ) {
      if(item){
        aciertos++;
      }
    });
    
    aficionado="";
    msg="";
    
    if(aciertos<=4){
      msg="Claramente no sabes ni lo que es un balón… mejor dedícate al box, al póker o qué sé yo";
      totalfb = "mal";
      $("#indepth_resultados").css({
      "background-image": "url("+urlIndepth+"images/Resultados-1.jpg)"
    });
    }

    if(aciertos>=5 && aciertos<=7){
      msg="Mñeh, pudiste salir mejor. Ni muy muy, ni tan tan. Échale más ganitas. Sí se puede.";
      totalfb = "maso";
      $("#indepth_resultados").css({
      "background-image": "url("+urlIndepth+"images/Resultados-2.jpg)"
    });
    }

    if(aciertos>=8){
      msg="¡Eres un D10S! ¡El balón y tú son uno mismo!";
      totalfb = "bien";
      $("#indepth_resultados").css({
      "background-image": "url("+urlIndepth+"images/Resultados-3.jpg)"
    });
    }
    
    $(".indepth_result_container").html(msg);

  $("#indepth_resultados").animate({
      "left": 0
    },2000, function(){
      $("html, body, #indepth_page1").css("overflow","hidden");
    });

    $("#indepth_twittear").click(function(){
      var text = "";
    if (aciertos <= 4) {
      text = encodeURIComponent("Claramente no sabes ni lo que es un balón… mejor dedícate al box, al póker o qué sé yo");
    } else if (aciertos >= 5 && aciertos <= 7) {
      text = encodeURIComponent("Mñeh, pudiste salir mejor. Ni muy muy, ni tan tan. Échale más ganitas. Sí se puede.");
    } else if (aciertos >= 8) {
      text = encodeURIComponent("¡Eres un D10S! ¡El balón y tú son uno mismo!");
    }
    
    var url = encodeURIComponent("http://juanfutbol.com/indepth/adivina-juan-balon");
    window.open("https://twitter.com/share?text="+text+"&hashtags=JFQuiz&url="+url,"","width=500, height=300");
  });

  $("#indepth_facebook").click(function(){
    var url = encodeURIComponent("http://juanfutbol.com/indepth/adivina-juan-balon?m="+totalfb);
    console.log(url);
    window.open("https://www.facebook.com/sharer/sharer.php?u="+url,"","width=500, height=300");
  });
}



$('.indepth_num').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}

});

$('.idepth_marcador, .idepth_marcador2').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}
});


$('.indepth_num').keyup(function(event) {
	
	if(parseInt($(".indepth_num").val())>0){
		input_goles=true;
	}else{
		input_goles=false;
	}
	indepth_comprobar();

});


$('.idepth_marcador').keyup(function(event) {
	if($(this).val()!="" ){
		input_text=true;
	}else{
		input_text=false;
	}
	
	indepth_comprobar();
});

$('.idepth_marcador2').keyup(function(event) {
	if($(this).val()!="" ){
		input_text2=true;
	}else{
		input_text2=false;
	}
	
	indepth_comprobar();
});


var indepth_comprobar = function(){
	console.log(input_text + " - " + input_text2 + " - " + input_goles);
	
	if(input_text && input_text2 && input_goles){
		$(".indepth_boton").removeClass("disable");
		disable=false;
	}else{
		$(".indepth_boton").addClass("disable");
		disable=true;
	}
	
	console.log(disable);
}


var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

   
 function loadDisqus(source, identifier, url) {
if (window.DISQUS) {
   jQuery('#disqus_thread').insertAfter(source);
   /** if Disqus exists, call it's reset method with new parameters **/

    DISQUS.reset({
  reload: true,
  config: function () { 
   this.page.identifier = identifier.toString();    //important to convert it to string
   this.page.url = url;
  }
 });
} else {
//insert a wrapper in HTML after the relevant "show comments" link
	source.append('<div id="disqus_thread"></div>');
   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
   disqus_identifier = identifier; //set the identifier argument
   disqus_url = url; //set the permalink argument
   disqus_per_page=3;
   //append the Disqus embed script to HTML
   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
   jQuery('head').append(dsq);
}
};


$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();
	
	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	$("#indepth_resultados").css({
		"width":ventana_ancho+"px",
		"height":ventana_alto+"px"
	});

$("#indepth_twittear").click(function(){

	if(!disable){

		
		var text = encodeURIComponent("Mi predicción es: México "+$("input[name=goleador]").val()+"-"+$("input[name=goleador2]").val())+ " Chile primer gol al minuto "+$("input[name=goles_anotados]").val()+" @juanfutbol";
		var url = encodeURIComponent("http://juanfutbol.com/indepth/pizzafut-seleccion-mexicana");
		window.open("https://twitter.com/share?text="+text+"&hashtags=juanpizza&url="+url,"","width=500, height=300");

	}else{
		
		
		
	}
	
	});
	
	$(document).on("click", "#indepth_button_ver" ,function(){
		$.fn.fullpage.moveSectionDown();
	});
});

$(window).on("resize", function(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();

	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	    $("#indepth_resultados").css({
			"width":ventana_ancho+"px",
			"height":ventana_alto+"px"
		});
});



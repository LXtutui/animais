var gato=0;
var cachorro=0;
var leao=0;
var classificadora;

function som_animais(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classificadora = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/HlZTY8vLk/model.json",{probabilityThreshold:0.7},modelo_carregado);
}

function modelo_carregado(){
    classificadora.classify(resultados);
}

function resultados(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        var vermelho = Math.floor(Math.random()*255)+1;
        var azul = Math.floor(Math.random()*255)+1;
        var verde = Math.floor(Math.random()*255)+1;
        var rgb = "rgb("+vermelho+","+verde+","+azul+")";

        document.getElementById("quantidade").innerHTML="cachorro detectado: "+cachorro+" leão detectado: "+leao+ "gato detectado: "+gato;
        document.getElementById("animal").innerHTML="o som detectado de : "+results[0].label;
        document.getElementById("quantidade").style.color=rgb;
        document.getElementById("animal").style.color=rgb;

        var img=document.getElementById("img_ouvido");
        if(results[0].label=="latido"){
            img.src="https://www.petz.com.br/blog/wp-content/uploads/2019/05/cachorro-independente-1-1280x720.jpg";
            cachorro=cachorro+1;
        }else if(results[0].label=="miado"){
            img.src="https://www.petz.com.br/blog/wp-content/uploads/2019/04/quantos-anos-vive-um-gato.jpg";
            gato=gato+1;
        }else if(results[0].label=="rugido"){
            img.src="https://s4.static.brasilescola.uol.com.br/be/2021/04/casal-de-leoes.jpg";
            leao=leao+1;
        }else{
            img.src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-2m9Xx63AfU3xkdEqwtpy8VcOBBiRPCyCasURpyHRSPqagkyu"
        }
    }
}
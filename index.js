var quiztitle = "Bem-Vindo ao Quiz sobre Covid-19!";
   
    var quiz = [
        {
            "question"      :   "Q1: É possível transmitir Coronavírus com um aperto de mão?",
            "image"         :   "https://www.sbcoaching.com.br/blog/wp-content/uploads/2019/06/aperto-de-mao-o-que-e.jpg",            
            "choices"       :   [
                                    "SIM",
                                    "NÃO",
                                ],
            "correct"       :   "SIM",
        },
        {
            "question"      :   "Q2: Para lavar as mãos, é importante tirar anéis, pulseiras e acessórios?",
            "image"         :   "https://www.rbsdirect.com.br/imagesrc/17383078.jpg?w=1200&h=630&a=c&version=1575255600",
            "choices"       :   [
                                    "SIM",
                                    "NÃO",
                                ],
            "correct"       :   "SIM",
        },
        {
            "question"      :   "Q3: Esmaltes oferecem perigo na pandemia??",
            "image"         :   "https://nbnoticias.com.br/images-teste/g1572191465794.jpg",
            "choices"       :   [
                                    "SIM",
                                    "NÃO",
                                ],
            "correct"       :   "SIM",
        },
        {
            "question"      :   "Q4: Homens não devem manter barba ou bigode nesse período de Pandemia?",
            "image"         :   "https://hypescience.com/wp-content/uploads/2013/02/76447376.jpg",
            "choices"       :   [
                                    "SIM",
                                    "NÃO",
                                ],
            "correct"       :   "NÃO",
        },
        {
            "question"      :   "Q5: O coronavírus mata mais do que a Varíola?",
            "image"         :   "https://cdn.riddle.com/embeds/v2/images/q_80,f_png,c_fill,w_960,h_540/b6a/b6ae92bc0b1697c5c57fac4299cb5eeb.png",
            "choices"       :   [
                                    "SIM",
                                    "NÃO",
                                ],
            "correct"       :   "NÃO",
        },
        {
            "question"      :   "Q6: Cães e gatos podem infectar os donos??",
            "image"         :   "https://blogs.correiobraziliense.com.br/maisbichos/wp-content/uploads/sites/7/2018/02/c%C3%A3o-e-gato-juntos.jpg",
            "choices"       :   [
                                    "SIM",
                                    "NÃO",
                                 ],
            "correct"       :   "NÃO",
        },
        {
            "question"      :   "Q7: Doses altas de vitamina C matam o coronavírus?",
            "image"         :   "https://d26lpennugtm8s.cloudfront.net/stores/746/397/products/laranja_ceu1-53852a66aa8037bd7415221636647098-640-0.jpg",
            "choices"       :   [
                                    "SIM",
                                    "NÃO",
                                ],
            "correct"       :   "NÃO",
        },
        {
            "question"      :   "Q8: Os sintomas podem durar até 10 dias?",
            "image"         :   "https://rlv.zcache.com.br/adesivo_quadrado_calendario_mensal_da_hortela-rc955556893714c7a894191993c06e6b7_0ugmc_8byvr_540.jpg",
            "choices"       :   [
                                    "SIM",
                                    "NÃO",
                                ],
            "correct"       :   "SIM",
        },
        {
            "question"      :   "Q9: Diabéticos são mais vulneráveis à Covid-19?",
            "image"         :   "https://static.tuasaude.com/media/article/ep/zw/remedio-caseiro-para-diabetes_35916_l.jpg",
            "choices"       :   [
                                    "SIM",
                                    "NÃO",
                                ],
            "correct"       :   "SIM",
        },
        {
            "question"      :   "Q10: Gargarejo com água quente mata o vírus?",
            "image"         :   "https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2015/01/21/saudebucalgargarejorepre.jpg",
            "choices"       :   [
                                    "SIM",
                                    "NÃO",
                                ],
            "correct"       :   "NÃO",
        },
    ];


    /******* No need to edit below this line *********/
  var currentquestion=0,score=0,submt=true,picked;jQuery(document).ready(function(e){function h(i){return e(document.createElement("div")).text(i).html()}function b(k){if(typeof k!=="undefined"&&e.type(k)=="array"){e("#choice-block").empty();for(var j=0;j<k.length;j++){e(document.createElement("li")).addClass("choice choice-box").attr("data-index",j).text(k[j]).appendTo("#choice-block")}}}function d(){submt=true;e("#explanation").empty();e("#question").text(quiz[currentquestion]["question"]);e("#pager").text("Questão "+Number(currentquestion+1)+" de "+quiz.length);if(quiz[currentquestion].hasOwnProperty("image")&&quiz[currentquestion]["image"]!=""){if(e("#question-image").length==0){e(document.createElement("img")).addClass("question-image").attr("id","question-image").attr("src",quiz[currentquestion]["image"]).attr("alt",h(quiz[currentquestion]["question"])).insertAfter("#question")}else{e("#question-image").attr("src",quiz[currentquestion]["image"]).attr("alt",h(quiz[currentquestion]["question"]))}}else{e("#question-image").remove()}b(quiz[currentquestion]["choices"]);c()}function f(i){if(quiz[currentquestion]["choices"][i]==quiz[currentquestion]["correct"]){e(".choice").eq(i).css({"background-color":"#50D943"});e("#explanation").html("<strong>Certo!</strong> "+h(quiz[currentquestion]["explanation"]));score++}else{e(".choice").eq(i).css({"background-color":"#D92623"});e("#explanation").html("<strong>Errado.</strong> "+h(quiz[currentquestion]["explanation"]))}currentquestion++;e("#submitbutton").html("PRÓXIMA QUESTÃO &raquo;").on("click",function(){if(currentquestion==quiz.length){a()}else{e(this).text("Verifique a resposta").css({color:"#222"}).off("click");d()}})}function c(){e(".choice").on("mouseover",function(){e(this).css({"background-color":"#e1e1e1"})});e(".choice").on("mouseout",function(){e(this).css({"background-color":"#fff"})});e(".choice").on("click",function(){picked=e(this).attr("data-index");e(".choice").removeAttr("style").off("mouseout mouseover");e(this).css({"border-color":"#222","font-weight":700,"background-color":"#c1c1c1"});if(submt){submt=false;e("#submitbutton").css({color:"#000"}).on("click",function(){e(".choice").off("click");e(this).off("click");f(picked)})}})}function a(){e("#explanation").empty();e("#question").empty();e("#choice-block").empty();e("#submitbutton").remove();e("#question").text("você acertou "+score+" de "+quiz.length+" Questões.");e(document.createElement("h2")).css({"text-align":"center","font-size":"4em"}).text(Math.round(score/quiz.length*100)+"%").insertAfter("#question")}function g(){if(typeof quiztitle!=="undefined"&&e.type(quiztitle)==="string"){e(document.createElement("h1")).text(quiztitle).appendTo("#frame")}else{e(document.createElement("h1")).text("Quiz").appendTo("#frame")}if(typeof quiz!=="undefined"&&e.type(quiz)==="array"){e(document.createElement("p")).addClass("pager").attr("id","pager").text("Questão 1 de "+quiz.length).appendTo("#frame");e(document.createElement("h2")).addClass("question").attr("id","question").text(quiz[0]["question"]).appendTo("#frame");if(quiz[0].hasOwnProperty("image")&&quiz[0]["image"]!=""){e(document.createElement("img")).addClass("question-image").attr("id","question-image").attr("src",quiz[0]["image"]).attr("alt",h(quiz[0]["question"])).appendTo("#frame")}e(document.createElement("p")).addClass("explanation").attr("id","explanation").html("&nbsp;").appendTo("#frame");e(document.createElement("ul")).attr("id","choice-block").appendTo("#frame");b(quiz[0]["choices"]);e(document.createElement("div")).addClass("choice-box").attr("id","submitbutton").text("Verifique a resposta").css({"font-weight":700,color:"#222",padding:"30px 0"}).appendTo("#frame");c()}}g()});
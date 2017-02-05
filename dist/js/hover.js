function init(){
//THE HOVER ON EVENT FOR LINKS - BIND ARRAY OF PROFILES
    $(".container_row").find("a").on("mouseover",getQuote.bind(this, profiles));

}
//TOGGLE HOVER TO SHOW AND HIDE QUOTE
$(".container_row a").hover(
  function(){
    //GIVE HOVERED IMAGE .current CLASS
    var image = $(this).find("img");
    $(image).addClass("current");
    //CHANGE OPACITY ON ALL IMAGES EXCEPT THE ONE HOVERED ON
    $(".container_row img:not(.current)").stop().animate({opacity: 0.6});
    //SHOW TEXT THAT BELONGS TO THE IMAGE
    $(".quote").fadeTo(700,1);
  },
  function(){
    //REMOVE .current CLASS FROM IMAGES ON HOVER OUT
    var image = $(this).find("img");
    $(image).removeClass("current");
    //CHANGE THE OPACITY BACK
    $(".container_row img").stop().animate({opacity: 1});
    //HIDE THE TEXT
    $(".quote").stop().fadeTo(1,0);
  });
//QUOTE CONSTRUCT AND APPEND TO DOCUMENT
function getQuote(p,e){

  $(".quote").html("");

  var anchor = e.currentTarget; //current image on hover
  var profile = $(anchor).parent(); //column of the image
  var profile_index = $(".column").index(profile); //index of the column in the tree

  var name = p[profile_index].name;
  var quote = p[profile_index].quote;

  var box = document.createElement("div");
  var h = document.createElement("h6");
  var n = document.createTextNode(name)
  var p = document.createElement("p");
  var q = document.createTextNode('"'+quote+'"');

  h.appendChild(n);
  p.appendChild(q);
  box.appendChild(h);
  box.appendChild(p);

  $(".quote").append(box);
}

init();

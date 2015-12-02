function Navigator(){
//navigator generator
	this.createNavBar =  function(numberOfImg){
    var ul = document.createElement('UL');
    ul.style.width = '100%';
    ul.style.height = 'auto';
    ul.style['list-style'] ="none";
    for (var i = 0; i < numberOfImg; i++) {
      var li1 = document.createElement('li');
      li1.style.float = 'left';
      var div1 = document.createElement('DIV');
      div1.setAttribute("id","div"+i);
      div1.addEventListener("click",navigateOnClick(activeState));
      div1.style.width = '20px';
      div1.style.height = '20px';
      if (i == 0) {
        div1.style.background = 'red';
      }
      else{
        div1.style.background = 'blue';
      }
      div1.style['border-radius'] ='10px';
      div1.style['margin-left'] = '10px';
      li1.appendChild(div1);
      ul.appendChild(li1);
    }

    var myid = document.getElementById('navDiv');
    myid.style.top = '250px';
    myid.style.left = imgWidth/2 - (slides.length/2) * 30;
    myid.appendChild(ul);
  }


  //position navigator
  this.changeState = function(pos,length){
    var navbar = document.getElementById("navDiv");
    var navul = navbar.children[0];
    var navlist = navul.children;
    for (var i = 0; i < length; i++) {
      if (i == pos -1 ) {
        navlist[i].children[0].style.background = 'red';
      }
      else{
         navlist[i].children[0].style.background = 'blue';
      }
    }
  }
}
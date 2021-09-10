function responsive() {
    document.getElementById('navmenu').classList.toggle('responsive');
    document.getElementById('blockquote').classList.toggle('unresponsive');	    	    
}

function chevron() {
   var chevrons = document.querySelectorAll('#chevron .chevron li a');
   var designItems = document.querySelector('#designCarousel .carousel-inner');
   var lastClicked = 0;
   var n
   
    chevrons[0].classList.add('active');

   for (i = 0; i < chevrons.length; i++) {
   chevrons[i].addEventListener('click', function(e) {
      e.currentTarget.classList.add('active');
	  chevrons[lastClicked].classList.remove('active');
	  lastClicked=e.target.parentNode.attributes[1].nodeValue;
	  n=-90*lastClicked;
	  designItems.style.transform = 'translateX('+n+'vw)';
  });  
  }
}
chevron();

//PROCESS MODAL
var f, g, clicked, modalid;

var modals = document.querySelectorAll('#process .container .modal');
var btns = document.querySelectorAll('#designCarousel .carousel-inner .item .card .card-body .btn');
var span = document.querySelectorAll("#process .container .modal .close") ;
var ftrClose = document.querySelectorAll('.modal .modal-dialog .modal-content .modal-footer button:nth-child(1)')
var ftrNext = document.querySelectorAll('.modal .modal-dialog .modal-content .modal-footer button:nth-child(2)')


for (f = 0;  f < btns.length; f++) {
	btns[f].onclick = function() {
		clicked = this.dataset.target;
		for (g = 0;  g < modals.length; g++) {
			modalid = modals[g].id;
			if (clicked.includes(modalid)) {
				modals[g].classList.remove('fade');
				span[g].onclick = function(e) {
				  e.path[4].className = 'modal fade';
				}
				modals[g].onclick = function(e) {
				  if (e.path[0].className == 'modal') {
					e.path[0].className = 'modal fade';
				  }  else if (e.path[0].className == 'modal-dialog') {
					e.path[1].className = 'modal fade';
				  }
				}
			}	
			ftrClose[g].onclick = function(e) {
				  e.path[4].className = 'modal fade';
			}
			if (g !== (btns.length-1)) {
				ftrNext[g].onclick = function(e) {
					  e.path[4].className = 'modal fade';
					  e.path[4].nextSibling.nextSibling.classList.remove('fade');
				}
			}

			
		}
	}
}

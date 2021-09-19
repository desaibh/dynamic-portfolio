//FONT-AWESOME
var faCSS, docHead;
faCSS = document.createElement('link');
faCSS.setAttribute('rel', 'stylesheet');
faCSS.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css');
faCSS.setAttribute('type','text/css');
docHead = document.getElementsByTagName('head')[0];
docHead.appendChild(faCSS);



//IGNORE
function responsive() {
    document.getElementById('navmenu').classList.toggle('responsive');
}

//CHEVRON
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

//RESUME - CiRCULAR PROGRESS BAR
var h, svg, circle, txt, circumference;
var slate =  getComputedStyle(document.documentElement).getPropertyValue('--slate');
var skillsbox = document.querySelectorAll('#skills-sub-types .boxes .box');

for  (h = 0; h < skillsbox.length; h++) {
	svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
	svg.setAttribute('class','progressbar');
    svg.setAttribute('width','60');
    svg.setAttribute('height','60');
	
	circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
	circle.setAttribute('class','progressbar__circle');
	circle.setAttribute('stroke',slate);
	circle.setAttribute('stroke-width','5');
	circle.setAttribute('fill','transparent');
	circle.setAttribute('r','25');
	circle.setAttribute('cx','30');
	circle.setAttribute('cy','30');
	
	txt = document.createElementNS("http://www.w3.org/2000/svg", 'text');
	txt.setAttribute('x','50%');
	txt.setAttribute('y','50%');
	txt.setAttribute('text-anchor','middle');
	txt.setAttribute('stroke', slate);
	txt.setAttribute('stroke-width','1px');
	txt.setAttribute('dy','.3em');
	if (skillsbox[h].classList.contains('eighty')) {
		txt.innerHTML = '80%';
	} else if (skillsbox[h].classList.contains('eightyfive')) {
		txt.innerHTML = '85%';
	} else if (skillsbox[h].classList.contains('ninety')) {
		txt.innerHTML = '90%';
	} else if (skillsbox[h].classList.contains('ninetyfive')) {
		txt.innerHTML = '95%';
	}
	
	svg.prepend(txt);
	svg.prepend(circle);
	skillsbox[h].prepend(svg);

}

/*COLOR PICKER*/
var palette = document.createElement('div');
palette.setAttribute('id','palette');
palette.innerHTML = '<input type="color" id="c" tabindex=-1 class="hidden"> <i class="fas fa-palette"></i>';
document.body.appendChild(palette);

document.getElementById("palette").addEventListener("click", function() {
  document.getElementById("c").focus();
  document.getElementById("c").addEventListener('blur', function(e) {
	  document.documentElement.style.setProperty('--seafoam', e.target.value);
  });
  document.getElementById("c").click();
});

/*TABS*/
var a, ti = 0
var navTabs = document.querySelectorAll('nav ul li a');
var homeTabs = document.querySelectorAll('#home a');
var portfolioTabs = document.querySelectorAll('#portfolio a');
var processTabs = document.querySelectorAll('#process a');
var resumeTabs = document.querySelectorAll('#resume a');
var contactTabs = document.querySelectorAll('#contact a');
var x = [...navTabs, ...homeTabs, ...portfolioTabs, ...processTabs, ...resumeTabs, ...contactTabs];

function createTabIndex(arr) {
	for (a = 0; a < arr.length; a++) {
		arr[a].setAttribute('tabIndex',a);
	}
}
createTabIndex(x);
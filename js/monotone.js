//FONT-AWESOME
var faCSS, docHead;
faCSS = document.createElement('link');
faCSS.setAttribute('rel', 'stylesheet');
faCSS.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css');
faCSS.setAttribute('type','text/css');
docHead = document.getElementsByTagName('head')[0];
docHead.appendChild(faCSS);




//MENU & NAVIGATION
var a, c, i;
var iconList = ['fa-home', 'fa-pencil-alt', 'fa-cog', 'fa-book-open', 'fa-comments', 'fa-spider', 'fa-microphone', 'fa-balance-scale-right', 'fa-balance-scale-left',  'fa-moon'];
var navLinks = document.querySelectorAll('.menuitems ul li a');

navLinks[0].classList.add('active');
c=0;

for (a = 0; a<navLinks.length; a++) {
	var txt, icon;
	txt = navLinks[a].innerHTML;
	navLinks[a].setAttribute("data-toggle",a);
	navLinks[a].setAttribute("data-placement","top");
	navLinks[a].setAttribute("title", txt);
	navLinks[a].innerHTML = ('<span>'+txt+'</span>')
	if (iconList[a]) {
		icon = document.createElement('i');
		icon.classList.add("fa", iconList[a]);
		navLinks[a].prepend(icon);
	}
	navLinks[a].addEventListener('click', function(e) {
		for (i = 0; i < navLinks.length; i++) {
		 		navLinks[i].classList.remove('active');
		}
 		this.classList.add('active');
			c = this.parentNode.attributes['data-toggle'].value;
		
	});
}

window.addEventListener("hashchange", function () {
     if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 50);
    }
});


//MENU ACTIVE ON RESIZE & SCROLL EVENTS
var i, down, up;
var sections = document.querySelectorAll('article section');
var slocation = [];
var oldc = 0;

function windowSize() {
	for (i=0; i<sections.length; i++) {
		slocation[i] = sections[i].offsetTop - (.1*window.innerHeight) ;
	}
};

windowSize(); 

window.addEventListener("resize", function () {
    	windowSize();
});

window.addEventListener("scroll", function (e) {
         
	    if (this.scrollY <= slocation[1]) {
			c=0;
		} else if (this.scrollY <= slocation[2]) {
			c=1;
		} else if (this.scrollY <= slocation[3]) {
		   	c=2;
		} else if (this.scrollY < slocation[4]-(.2*window.innerHeight)) {
		 	c=3;
		} else if (this.scrollY >= slocation[4]-(.2*window.innerHeight)) {
		 	c=4;
		} else {
		   c=5;
		}
		
		if (c !== oldc) {
			navLinks[oldc].classList.remove('active');
			navLinks[c].classList.add('active');
		}
		
        oldc = c;
		
});


//PROCESS CHEVRON
var b, d;
var chevron = document.querySelectorAll('#chevron ol li a');
var nowActive = 0;
var carouselInner = document.querySelector('#designCarousel div.carousel-inner');
var carouselInnerItem = document.querySelectorAll('#designCarousel div.carousel-inner div.item');
var carouselInnerItems;
var transitionCalculation = 0;

chevron[nowActive].classList.add('active');

carouselInnerItems = document.createElement('div');
carouselInnerItems.setAttribute('id','carousel-items');

for (b = 0; b < carouselInnerItem.length; b++) {	
	carouselInnerItems.appendChild(carouselInnerItem[b]);
}

carouselInner.prepend(carouselInnerItems);

for (d = 0; d < chevron.length; d++) {	
	    
		chevron[d].addEventListener('click', function (e) {
			chevron[nowActive].classList.remove('active');
			this.classList.add('active');
				nowActive = this.parentNode.dataset.slideTo;
			
			var vw = Math.max(document.documentElement.clientWidth);
			if  (vw > 500) {
				transitionCalculation = nowActive * -464;
			} else {
				transitionCalculation = nowActive * -720;
			}
			carouselInnerItems.style.transform = 'translateY('+transitionCalculation+'px)';
			
		});
}


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
						this.parentNode.parentNode.parentNode.parentNode.className = 'modal fade';	
				}
				modals[g].onclick = function(e) {
						if (this.className == 'modal') {
							this.className = 'modal fade';
						  }  else if (this.className == 'modal-dialog') {
							this.parentNode.className = 'modal fade';
						  }
					
				}
			}	
			ftrClose[g].onclick = function(e) {
				  this.parentNode.parentNode.parentNode.parentNode.className = 'modal fade';
			}
			if (g !== (btns.length-1)) {
				ftrNext[g].onclick = function(e) {
					  this.parentNode.parentNode.parentNode.parentNode.className = 'modal fade';
					  this.parentNode.parentNode.parentNode.parentNode.nextSibling.nextSibling.classList.remove('fade');
					  this.parentNode.parentNode.parentNode.parentNode.nextSibling.nextSibling.addEventListener('click', function () {
						  if (this.className == 'modal') {
							  this.className = 'modal fade';
						  }  else if (this.className == 'modal-dialog') {
								this.parentNode.className = 'modal fade';
						  }
					  });
				}
			}			
		}
	}
}



//RESUME - CiRCULAR PROGRESS BAR
var h, svg, circle, txt, circumference;
var skillsbox = document.querySelectorAll('#skills-sub-types .boxes .box');

for  (h = 0; h < skillsbox.length; h++) {
	svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
	svg.setAttribute('class','progressbar');
    svg.setAttribute('width','60');
    svg.setAttribute('height','60');
	
	circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
	circle.setAttribute('class','progressbar__circle');
	circle.setAttribute('stroke','#63cdff');
	circle.setAttribute('stroke-width','5');
	circle.setAttribute('fill','transparent');
	circle.setAttribute('r','25');
	circle.setAttribute('cx','30');
	circle.setAttribute('cy','30');
	
	txt = document.createElementNS("http://www.w3.org/2000/svg", 'text');
	txt.setAttribute('x','50%');
	txt.setAttribute('y','50%');
	txt.setAttribute('text-anchor','middle');
	txt.setAttribute('stroke','#63cdff');
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



// RESUME - SKILLS EXPAND/COLLAPSE

var j, k, m, n, p, q;
var skillsHeading = document.querySelectorAll('#skills-sub-types h4');
var experienceHeading = document.querySelectorAll('#experience div p');
var educationHeading = document.querySelectorAll('#education div h4');
var hobbiesHeading = document.querySelectorAll('#hobbies .content .boxes .box');

for (j = 0;  j < skillsHeading.length; j++) {
   skillsHeading[j].addEventListener('click', function (e) {
	   this.nextSibling.nextSibling.classList.toggle('expand');
		for (p = 0;  p < this.nextSibling.nextSibling.children.length; p++) {
			  this.nextSibling.nextSibling.children[p].firstChild.firstChild.classList.toggle('activate');
		}
	});
}

for (k = 0;  k < experienceHeading.length; k++) {
   experienceHeading[k].addEventListener('click', function (e) {
	   this.nextSibling.nextSibling.classList.toggle("block");
	});
}

for (m = 0;  m < educationHeading.length; m++) {
   educationHeading[m].addEventListener('click', function (e) {
	   this.nextSibling.nextSibling.classList.toggle("block");
	});
}

for (n = 0;  n < hobbiesHeading.length; n++) {
   hobbiesHeading[n].addEventListener('click', function (e) {
	   	   this.nextSibling.nextSibling.classList.toggle("block");
	});
}

/*COLOR PICKER*/
var palette = document.createElement('div');
palette.setAttribute('id','palette');
palette.innerHTML = '<input type="color" id="c" tabindex=-1 class="hidden"> <i class="fas fa-palette"></i>';
document.body.appendChild(palette);

document.getElementById("palette").addEventListener("click", function() {
  document.getElementById("c").focus();
  document.getElementById("c").addEventListener('blur', function(e) {
	  document.documentElement.style.setProperty('--background', e.target.value);
  });
  document.getElementById("c").click();
});

/*TABS*/
var ii, ti = 0
var navTabs = document.querySelectorAll('nav ul li a');
var homeTabs = document.querySelectorAll('#home a');
var portfolioTabs = document.querySelectorAll('#portfolio a');
var processTabs = document.querySelectorAll('#process a');
var resumeTabs = document.querySelectorAll('#resume a');
var contactTabs = document.querySelectorAll('#contact a');
var x = [...navTabs, ...homeTabs, ...portfolioTabs, ...processTabs, ...resumeTabs, ...contactTabs];

function createTabIndex(arr) {
	for (ii = 0; ii < arr.length; a++) {
		arr[a].setAttribute('tabIndex',ii);
		ii++;
	}
}

createTabIndex(x);
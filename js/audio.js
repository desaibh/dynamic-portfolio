
/*CHATBOT*/
var homeContent = document.querySelector('#home .container .card .content');
var homeBtn = document.createElement('p');
homeBtn.classList.add("start-chat");
homeBtn.innerHTML = '<br><a href="https://www.linkedin.com/in/desaibh/" class="btn btn-primary">Let\'s chat!</a>  ';
homeContent.appendChild(homeBtn)


/*TAB INDICES*/
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





/*PORTFOLIO ARROWS*/
var pcontroller = document.querySelector('#portfolios div div.controls');
var arrowup = document.createElement('div');
var arrowdown = document.createElement('div');

arrowup.classList.add('arrowup');
arrowup.innerHTML='<p style="transform: rotateX(180deg);">⛛</span>';
arrowdown.classList.add('arrowdown');
arrowdown.innerHTML='<p>⛛</span>';

pcontroller.append(arrowup);
pcontroller.append(arrowdown);


/*PORTFOLIO SLIDE ROTATION*/
var b, slides, d;
var dy = [0,60,120, 180, 240, 300];
var swap = document.querySelector('#portfolios > div > div.projects-container > div > div:nth-child(4)');
var swapb1 = document.querySelector('#portfolios > div > div.projects-container > div > div:nth-child(3)');
swap.parentNode.insertBefore(swap, swapb1);
var swapb2 = document.querySelector('#portfolios > div > div.projects-container > div > div:nth-child(3)');
var swapb3 = document.querySelector('#portfolios > div > div.projects-container > div > div:nth-child(2)');
swapb2.parentNode.insertBefore(swapb2, swapb3);


slides = document.querySelectorAll('#portfolios div div.projects-container .projects .project');
currentSlide=6;
pcontrols = document.querySelectorAll('#portfolios div div.controls ul li');


/* PORTFOLIO EVENT LISTENERS */
var au = document.querySelector('#portfolios div div.controls .arrowup');
var ad = document.querySelector('#portfolios div div.controls .arrowdown');

au.addEventListener('mouseover', rotateSlidesUp);
ad.addEventListener('mouseover', rotateSlidesDown);
au.addEventListener('click', rotateSlidesUp);
ad.addEventListener('click', rotateSlidesDown);

function rotateSlidesDown() {
	for (d = 0; d < slides.length; d++) {
		dy[d] += 60;
		slides[d].style.transform = 'rotateY(' + dy[d] +'deg) translateZ(400px) perspective(1500px)';
		pcontrols[d].style.transform = 'rotateX(' + dy[d] +'deg) translateZ(50px)';

	}
}
function rotateSlidesUp() {
	for (d = 0; d < slides.length; d++) {
		dy[d] -= 60;
		slides[d].style.transform = 'rotateY(' + dy[d] +'deg) translateZ(400px) perspective(1500px)';
		pcontrols[d].style.transform = 'rotateX(' + dy[d] +'deg) translateZ(50px)';
	}
}


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





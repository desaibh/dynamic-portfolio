
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

				transitionCalculation = carouselInnerItems.children[nowActive].offsetTop * -1;

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

//RESUME ITEMS
var w;
var restopic = document.querySelectorAll('#resume .container .resumetopics .cb');
var activeNow = 0;
var subsections = document.querySelector('.subsections');
var subsectionsDiv = document.querySelectorAll('.subsections > div');
var subsectionsItems;
var moveCalc = 0;

restopic[activeNow].classList.add('active');



for (w = 0; w < restopic.length; w++) {	
		    restopic[w].addEventListener('click', function (e) {
				restopic[activeNow].classList.remove('active');
				this.classList.add('active');
				activeNow = this.children[0].dataset.slideTo;
				
				window.location.hash =  this.children[0].dataset.target;
			
		});
}


//CHATTER BOX
var respLS = 'These are the commands I recognize: <br> (C) or (close) to close this modal.<br> (O) or (open) to open this modal.<br> (N) or (navigation) to learn how to navigate this site without a mouse.<br> (Q) or (questions) to see what I can answer.<br> (S) or (start) or (stop) to switch between talk and text.<br> (Talk) to turn microphone on & issue voice commands. <br> (Text) to chat via text messages. <br> (ls) to view all my commands. <br> Remember "CONQST". ';
var respTxt =  'Great - lets\'s text!  Would you like to see a list of questions?  Type (Q).';
var respTlk =  'Great - lets\'s talk!  Would you like to see a list of questions?  Type (Q).';
var respNav =  ' Sorry, I\'m not ready yet! Soon - to navigate my website without a mouse, you\'ll close this window by saying or typing (C) or (close). Then, select: <br> (' +  '\u21B3'   + 'Tab) to navigate through each link. <br>(M) to select the menu. <br>(L) or (←) to move left.<br> (R)  or (→) to move right.';

var terminalUX = document.createElement('div');
terminalUX.setAttribute('id', 'terminalUX');
terminalUX.setAttribute('class', 'modal');
terminalUX.setAttribute('role', 'dialog');
terminalUX.innerHTML = '<p>Hello World! I\'m Alter-Ego B! ' + respLS + ' <br>Would you like to "Talk" or "Text"?</p>';
document.querySelector('body').appendChild(terminalUX);

var chat = document.querySelector('#terminalUX');
var startstop = true;
var navigation = false;
var chatResponse, response;
var keycode = '';
var textDisplay;
var temp;

txtDisplay();

//KEYPRESS 

document.addEventListener("keydown", function (e) {
    console.log ( e.key, keycode);	
	if (!navigation) {
		
			if (e.key == 'Backspace') {
				keycode = keycode.slice(0, -1);
				textDisplay.innerHTML = keycode + '<blink>_</blink>';
			} else if (e.key == 'Enter') {		
				respond(keycode);
				keycode = '';
			} else {
				keycode += e.key;
				textDisplay.innerHTML = keycode + '<blink>_</blink>';
				chat.appendChild(textDisplay);
			}
	} else {
			var chars = 'oTabLRArrowLeftArrowRight';
			if (chars.includes(e.key)) {
				if (e.key.toLowerCase() == 'o') {
				   respond(e.key);
				}  else if (e.key.toLowerCase() == 'tab') {
				   navQueues(e.key);
				}  if ((e.key.toLowerCase() == 'l') || (e.key.toLowerCase() == 'arrowleft')) {
				   navQueues(e.key);
				}  if ((e.key.toLowerCase() == 'r') || (e.key.toLowerCase() == 'arrowright')) {
				   navQueues(e.key);
				}  
			}
	}
});


//SPEECH RECOGNITION
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {

		var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
		var SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
		var SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
		
		var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral' ];
		var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'
		
		var recognition = new window.SpeechRecognition();
		recognition.interimResults = false;
	
		recognition.addEventListener('result', function(e) {
			if (e.results[0].isFinal) {
				respond(e.results[0][0].transcript);
			}
		});
		
		recognition.addEventListener('end', function (e) {
			if (startstop == true) {
				recognition.start();
			} else if (startstop == false) {
				recognition.stop();	
			}
		});
		
		
}



function respond(convo) {
			chatResponse = document.createElement('p');
			chatResponse.innerHTML = ">> " + convo;
			chat.append(chatResponse);
			convo = convo.toLowerCase();
			response = document.createElement('p');
			if ( convo == 'hello') {
				response.innerHTML = 'Hello! Nice to meet you!';
			} else if ( convo == 'text') {
				startstop = false;
				response.innerHTML = respTxt;
			} else if (convo == 'talk') {
				startstop = true;
				response.innerHTML = respTlk;
				recognition.start();
			}  else if (convo == 'ls') {
				response.innerHTML = respLS;
			}  else if ((convo == 's') || (convo == 'stop') || (convo == 'start')) {
				if (startstop) {
					response.innerHTML = respTxt;
				} else {
					response.innerHTML = respTxt;
					recognition.start();
				}
				startstop = !startstop;
			}  else if ((convo == 'q') || (convo == 'questions')) {
				response.innerHTML = 'Q';
			}  else if ((convo == 'n') || (convo == 'navigation')) {
				response.style.lineHeight = '34px';
				response.innerHTML = respNav;
			}  else if ((convo == 'o') || (convo == 'open')) {
				response.innerHTML = 'Hello again! I\'m open for business. What can I do for you?';				
				chat.classList.remove('fade');
				navigation = false;
			} else if ((convo == 'c') || (convo == 'close')) {
				response.innerHTML = 'That was fun! Chat soon.';
				chat.classList.add('fade');
				navigation = true;
			} else {
				response.innerHTML = 'Sorry - I didn\'t understand ' + convo + '. Please try again.'; 
			}
			temp = document.querySelector('#temp');
			temp.parentNode.removeChild(temp);
			chat.append(response); 
			txtDisplay();
}

function navQueues(que) {
	console.log(que);
	
}

function txtDisplay() {
			textDisplay = document.createElement('p');
			textDisplay.setAttribute('id','temp');
			textDisplay.innerHTML = '<blink>_</blink>';
			chat.appendChild(textDisplay);
			
			if (chat.scrollHeight > (document.body.scrollHeight*.8)) {
				chat.scrollTo(0, chat.scrollHeight);
			};
}
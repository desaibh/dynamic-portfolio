// PROCESS
var chevron = document.querySelectorAll('#process .container  #designCarousel #chevron ol.chevron li');
var carousel = document.querySelectorAll('#process .container  #designCarousel .carousel-inner .item');
var previousItem = 0;
var f,g,h;

 for (f = 0; f < chevron.length; f++)  {
	 chevron[f].addEventListener('click', function (e) {
		carousel[previousItem].style = null;
		previousItem = this.dataset.slideTo;
		carousel[previousItem].style.animation = ' rotateFirst 2000s forwards';
	 });
}

// PROJECTS
 var controls = document.querySelectorAll('#portfolios .container .controls ul li');
 var projectContainer = document.querySelector('#portfolios .container .projects-container');
 var projects = document.querySelector('#portfolios .container .projects');
 var project = document.querySelectorAll('#portfolios .container .projects .project');
 
 projects.classList.add('playing');

 var a,b,c,d, navigation = [], control = 0;
 
 function cube(el) {
	  projects.classList.remove('playing');
	     controls[control].classList.remove('active');
		 currentState = el;
		 projects.style.transition = 'transform 1s';
		 switch (true) {
		    case  el=='HTML5 Animator':
			   projects.style.transform = "rotateY(0deg)";
			   projects.style.mstransform = "rotateY(0deg)";
			   controls[0].classList.add('active');
			   control = 0;
				break;
			 case el=='Birds of Paradise':
			   projects.style.transform = "rotate3d(0,1,0,90deg)";
			   projects.style.mstransform = "rotate3d(0,1,0,90deg)";
			   controls[1].classList.add('active');
			   control = 1;
				break;
		    case el=='Xylophone':
			   projects.style.transform = "rotate3d(0,1,0,180deg)";
			   projects.style.mstransform = "rotate3d(0,1,0,180deg)";
			   controls[2].classList.add('active');
			   control = 2;
				break;
		    case el=='Restaurant Sanitation':
		       projects.style.transform = "rotate3d(0,1,0,270deg)";
			   projects.style.mstransform = "rotate3d(0,1,0,270deg)";
			   controls[3].classList.add('active');
			   control = 3;
				break;
		    case el=='Checkin App':
			   projects.style.transform = "rotate3d(-1,0,0,90deg)";
			   projects.style.mstransform = "rotate3d(-1,0,0,90deg)";
			   controls[4].classList.add('active');
			   control = 4;
				break;
		    case el=='Project Gutenberg':
			   projects.style.transform = "rotate3d(1,0,0,90deg)";
			   projects.style.mstransform = "rotate3d(1,0,0,90deg)";
			   controls[5].classList.add('active');
			   control = 5;
			   break;
		 }
}
 
 for (a = 0; a < controls.length; a++)  {
	 controls[a].addEventListener('click', function (e) {
		 cube(this.innerHTML);
	 });
}

var toggler = ['<','<','>','>']
for (b = 0; b<toggler.length; b++)  {
	        navigation[b] = document.createElement('div');
			navigation[b].classList.add('toggler');
	   		navigation[b].innerHTML=toggler[b];
   if (b==0) {
   			navigation[b].classList.add('uparrow');
			navigation[b].style.transform = 'rotate(90deg)';
			navigation[b].style.left =  '230px';
    		navigation[b].style.top =  '-372px';
			projectContainer.prepend(navigation[b]);
   } else if (b==1) {
   			navigation[b].classList.add('leftarrow');
	   		navigation[b].style.left =  '-50px';
    		navigation[b].style.top =  '-56px';
	   		navigation[b].innerHTML=toggler[b];
			projectContainer.prepend(navigation[b]);
   } else if (b==2) {
   			navigation[b].classList.add('rightarrow');
	   		navigation[b].style.left =  '500px';
    		navigation[b].style.top =  '-25px';
	   		navigation[b].innerHTML=toggler[b];
			projectContainer.appendChild(navigation[b]);
   } else if (b==3) {
   			navigation[b].classList.add('downarrow');
			navigation[b].style.transform = 'rotate(90deg)';
			navigation[b].style.left =  '230px';
    		navigation[b].style.top =  '195px';
			projectContainer.appendChild(navigation[b]);
   }
}
var togglers=document.querySelectorAll('.toggler');
var arrow,currentState, previousState;
// top, bottom, left, right;
var rlocation = [];
rlocation[0] = ['HTML5 Animator',4,5,3,1];
rlocation[1] = ['Birds of Paradise',4,5,0,2];
rlocation[2] = ['Xylophone',4,5,1,3];
rlocation[3] = ['Restaurant Sanitation',4,5,2,0];
rlocation[4] = ['Checkin App',2,0,1,3];
rlocation[5] = ['Project Gutenberg',0,2,3,1];

for (c = 0; c < togglers.length; c++)  {
	 togglers[c].addEventListener('click', function (e) {
				 arrow = this.classList[1];
				 currentState = false;
				 controls[control].classList.remove('active');
				 d = 0;
				 while (currentState==false) {
				         if (rlocation[d][0] == controls[control].innerHTML) {
							 if (arrow=='uparrow') {
								 control = rlocation[d][1];
								 currentState=true;
							 } else if (arrow=='downarrow') {
								 control = rlocation[d][2];
								 currentState=true;
							 } else if (arrow=='leftarrow') {
								 control = rlocation[d][3];
								 console.log(rlocation[d]);
								 currentState=true;
							 } else if (arrow=='rightarrow') {
								 control = rlocation[d][4];
								 currentState=true;
							 }
					  } else {
						  d++;
					  }
				 }
				cube(controls[control].innerHTML);
				e.preventDefault();
	 });
}
 
 
// CANVAS


if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

	function zoomOutMobile() {
	  var viewport = document.querySelector('meta[name="viewport"]');
	
	  if ( viewport ) {
		viewport.content = "width=600";
	  }
	}
	
	zoomOutMobile();	
		
} else {

	var f = new FontFace("Allerta Stencil", 'url(https://fonts.gstatic.com/s/allertastencil/v11/HTx0L209KT-LmIE9N7OR6eiycOe1_Db2.woff2)');
	f.load().then(function() {
	
	var root=document.documentElement;
	
	var pgEl = document.querySelector('body');
	var cvsEl = document.createElement('canvas');
	cvsEl.setAttribute('id','canvas');
	cvsEl.setAttribute('height', root.scrollHeight);
	cvsEl.setAttribute('width', window.screen.width)
	pgEl.prepend(cvsEl);
		
	var canvas = document.querySelector('canvas');
	var ctx = canvas.getContext('2d');
	
	ctx.width = innerWidth;
	ctx.height = innerHeight;
	console.log(ctx.width, ctx.height);
	
	var mouse = {x: 0, y: 0};
	addEventListener('mousemove', function (e) {
	  mouse.x = e.pageX;
	  mouse.y = e.pageY;
	});
	
	addEventListener('resize', function () {
		ctx.height = innerHeight;
		ctx.width = innerWidth;
		init();
	});
	
	var lastScrollTop=0;
	addEventListener('scroll', function () {
	   var st = window.pageYOffset || root.scrollTop; 
	   if (st > lastScrollTop){
		   ctx.height=root.clientHeight + st;
		} else if (st < root.clientHeight) {
		   projects.classList.remove('playing');
		   ctx.height=root.clientHeight + st;
		   init();
		} 
		if (st == root.clientHeight) {
			  projects.classList.add('playing');
		}
	});
	
	
	var colors = [     getComputedStyle(root).getPropertyValue('--text'),  
							getComputedStyle(root).getPropertyValue('--primary'), 
							getComputedStyle(root).getPropertyValue('--secondary'), 
							getComputedStyle(root).getPropertyValue('--tertiary'), 
							getComputedStyle(root).getPropertyValue('--quarternary'), 
							getComputedStyle(root).getPropertyValue('--quinary'), 
							getComputedStyle(root).getPropertyValue('--background')];             
	
	
	
	// Objects
	function Circle(x, y, vx, vy, radius, color, txt, word, font) {
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.radius = radius;
		this.color = color;
		this.txt = txt;
		this.word = word;
		this.font = font;
		this.opacity = 0;
		
	
	   this.update = function() {
		   var friction = Math.random()*.00015;		
		   //var gravity = Math.random()*.2;		
		  
			if (this.y + this.radius  + this.vy > ctx.height ||  this.y - this.radius + this.vy < 0 ) {
				this.vy = -this.vy*friction;
				this.vx = this.vx*friction;
			} else {
			    //this.vy += gravity;
			} 
			if ((this.vy == 0) && (this.y - this.radius < 0)) {
				//this.vy += gravity;
			} 
	
			if (this.x + this.radius > ctx.width || this.x - this.radius <= 0) {
				this.vx = -this.vx*friction/100;
			}  
	
			if  (Math.sqrt(Math.pow((mouse.x - this.x),2) + Math.pow((mouse.y-this.y),2)) < 120) {
				this.opacity += 0.02;
			} else if (this.opacity > 0) {
				this.opacity -= 0.02;
			}
	
	
			this.x += this.vx;
			this.y += this.vy;
			this.draw();
		};
		
	
	
		this.intersects = function(other) {
			var dist = Math.sqrt(Math.pow((this.x-other.x),2) + Math.pow((this.y-other.y),2));
			if (dist <= this.radius + other.radius) {
				return true;
			} else {
				return false;
			}
		}
		
	
	
		this.adjustPositions = function (other) { 
			var rSum = this.radius + other.radius;
			var diffx = other.x - this.x;
			var diffy = other.y - this.y;
			var distance = Math.sqrt(Math.pow(diffx,2) + Math.pow(diffy,2));
	
			if (distance - rSum < 0) {
				var vxdiff = this.vx - other.vx;
				var vydiff =  this.vy - other.vy;
				
				if (vxdiff*diffx + vydiff*diffy >= 0) {				
					var mass1 = this.word.length;
					var mass2 = other.word.length;
					var angle = -Math.atan2(diffy, diffx);
					var vxRotation1 = other.vx * Math.cos(angle) - other.vy * Math.sin(angle);
					var vyRotation1 = other.vx * Math.sin(angle) + other.vy * Math.cos(angle);
					var vxRotation2 = this.vx * Math.cos(angle) - this.vy * Math.sin(angle);
					var vyRotation2 = this.vx * Math.sin(angle) + this.vy * Math.cos(angle);
					var vx1 =  vxRotation1 * (mass1 - mass2) / (mass1 + mass2)  + vxRotation2 * 2 * mass2 / (mass1 + mass2);
					var vx2 =  vxRotation2 * (mass1 - mass2) / (mass1 + mass2)  + vxRotation1 * 2 * mass2 / (mass1 + mass2);
					var vxFinal1 = vx1 * Math.cos(-angle) - vyRotation1 * Math.sin(-angle);
					var vyFinal1 = vx1 * Math.sin(-angle) + vyRotation1 * Math.cos(-angle);
					var vxFinal2 = vx2 * Math.cos(-angle) - vyRotation2 * Math.sin(-angle);
					var vyFinal2 = vx2 * Math.sin(-angle) + vyRotation2 * Math.cos(-angle);
					other.vx = vxFinal1;
					other.vy = vyFinal1;
					this.vx = vxFinal2;
					this.vy = vxFinal2;
					
				}		
			}
		}
	
	
	
		this.draw = function() {
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
				
				ctx.save();
				ctx.globalAlpha = this.opacity;
				ctx.fillStyle = this.color; 
				ctx.fill();
				ctx.restore();
				
				ctx.strokeStyle=this.color;
				ctx.font = this.font;
				ctx.fillText(this.word, this.x, this.y);
				ctx.fillStyle = this.txt;
				ctx.textAlign = 'center';
				ctx.textBaseline = 'middle';
				
				ctx.stroke();
		};
	}
	
	
	// Implementation
	var circle = [], i, j;
	var words = ['software', 'development', 'wireframes', 'revisions', 'testing', 'hypotheses', 'prototype', 'testing', 'analyze', 'prioritize', 'sprint', 'planning', 'bugs', 'release', 'wireframes', 'iterate', 'debug', 'lifecycle', 'build', 'evaluate', 'mockup', 'release', 'feedback', 'mvp', 'metrics', 'uploads', 'maintenance', 'compliance', 'workflow', 'taxonomy', 'versioning', 'strategy', 'indexing', 'font', 'design', 'metadata', 'UAT', 'modular', 'reusable', 'software', 'integration', 'archive', 'search', 'security', 'requirements', 'repository', 'assets', 'cropping', 'servers', 'SEO', 'marketing', 'filter', 'sort', 'optimization', 'updates', 'partners', 'PPC', 'emails', 'microsites', 'Javascript', 'Jira', 'Drupal', 'AEM', 'Photoshop', 'Jquery', 'keyframes', 'animation', 'css', 'mix-ins', 'governance', 'SDLC', 'Visio', 'audits', 'backlog', 'UAT', 'HtML', 'Illustrator', 'Access', 'Firebase', 'SQL', 'XML', 'React', 'animations', 'staging', 'mobile', 'responsive', 'bootstrap', 'flexbox', 'sitemap', 'documentation', 'deploy', 'iterate', 'survey', 'discovery', 'branding', 'guidelines', 'research', 'graphics', 'project', 'findability', 'interactive','social','influencers','email','growth', 'audits', 'TDD' ];
	var noWords;
	
	function init() {
	
		switch (true) {
			case ctx.width< 300:
				noWords = 5;
				break;
			case ctx.width>=300 && ctx.width<900:
				noWords = 20;
				break;
			case ctx.width>=900 && ctx.width<1280:
				noWords = 35;
				break;
			case ctx.width>=1280:
				noWords = 55;
				break;
		}
		circle = [];
		for (i = 0; i < noWords; i++) {
				var cr=words[i].length*6;	
				var cx = Math.floor(Math.random() * (ctx.width - cr - cr) + cr);	
				var cy = Math.floor(Math.random() * (ctx.height - cr - cr) + cr);	
				var cvx=(Math.random() - .5)*1; 
				var cvy=(Math.random() - .5)*1; 
				var clr=[Math.floor(Math.random() * colors.length)];
					if ((clr != 1) && (clr!= 3) && (clr != 6)) {
						txtclr = 'white';
					} else {
						txtclr = 'black';
					}
					var word=words[i];
					var font = '18px \'Allerta Stencil\'';		
		
				circle.push(new Circle(cx, cy, cvx, cvy, cr, colors[clr],txtclr,word, font));
				
				if (i>0) {
				  for (j = 0; j < i; j++) {
					 if (circle[i].intersects(circle[j])) {
						 circle.pop();
						 i--;
					 }
				  }
				}
		}
	}
	
	// Animation Loop
	function animate() {
		requestAnimationFrame(animate);
	
		ctx.clearRect(0, 0, ctx.width, ctx.height);
	
		for (i = 0; i < circle.length; i++) {
			for (j = 1; j < circle.length; j++) {
				if ((i != j) && (circle[i].intersects(circle[j]))) {
									circle[i].adjustPositions(circle[j]);
				} 
			}
			circle[i].update();
		}
	}
	
	init();
	animate();
	
	});

}

//RESUME
 var resumeSubsections = document.querySelectorAll('#resume .container .subsections > div');
 var resumeTopics = document.querySelectorAll('.resumetopics .cb');
 var n, nswap, p, topic, pswap;
  for (n=0; n<resumeSubsections.length;n++){
	  nswap = document.createElement('span');
	  nswap.classList.add('close');
	  nswap.innerHTML = "&times;";
	  resumeSubsections[n].prepend(nswap);
	  resumeSubsections[n].style.display = "none";
  }
  
 for (p=0; p<resumeTopics.length;p++){
	 pswap = "<div class='text'>" + resumeTopics[p].innerHTML + "</div>";
	 resumeTopics[p].innerHTML= pswap;
	 topic = document.createElement('div');
	 resumeTopics[p].prepend(topic);
     topic = document.createElement('div');
	 resumeTopics[p].prepend(topic);
	 resumeTopics[p].addEventListener('click', function (e) {
		 console.log(e.target.value);
		 var btn = e.target.parentNode.parentNode.dataset.slideTo;
		 var modal = document.getElementsByClassName('subsections')[0];
		 var span = document.querySelectorAll(".subsections div .close")[btn];
		 console.log(modal, btn, modal.children[btn]);
	      modal.children[btn].classList.add('modal-content');
		  modal.style.display = "block";
		  modal.children[btn].style.display = "block";
		  
		  span.onclick = function() {
			 modal.children[btn].classList.remove('modal-content');
		 	 modal.children[btn].style.display = "none";
		 	 modal.style.display = "none";
		  }
		
		  window.onclick = function(event) {
			  if (event.target == modal) {
				  		 	 modal.children[btn].style.display = "none";

				modal.style.display = "none";
			  }
			}
	 });
}

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

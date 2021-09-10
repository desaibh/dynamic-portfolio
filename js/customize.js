var r, s;
var linkHref = document.querySelector('head > link:nth-child(11)');
var scriptSrc = document.querySelector('body #jsopt');
var dbody = document.body;
var swapScript;
var droptions = document.querySelectorAll('ul.droptions li');
s=3;

function swapper(value) {
	            if (dbody.firstElementChild.matches('canvas')) {
					dbody.firstElementChild.height = 0;
				}
				dbody.removeChild(scriptSrc);
				document.reload();
				swapScript = document.createElement('script');
				swapScript.setAttribute('type','text/javascript');
				swapScript.setAttribute('src','./js/'+value+'.js');
				swapScript.setAttribute('id','jsopt');
				console.log(value,swapScript,dbody)
				dbody.appendChild(swapScript);
				scriptSrc = document.querySelector('body #jsopt');
}

for (r = 0; r<droptions.length; r++) {
	droptions[r].addEventListener('click', function(e) {
		droptions[s].classList.remove('active');
		this.classList.add('active');

		if (e.path[0].innerHTML.includes('Galaxy')) {
				linkHref.setAttribute('href','./css/animate.css');
				swapper('animate');
				s=3;
		} else if (e.path[0].innerHTML.includes('CorpDark')) {
				linkHref.setAttribute('href','./css/corpdark.css');
				swapper('corpDark');
				s=2;
		} else if (e.path[0].innerHTML.includes('CorpLite')) {
				linkHref.setAttribute('href','./css/corpdark.css');
				swapper('corpDark');
				s=1;
		} else if (e.path[0].innerHTML.includes('Audio')) {
				linkHref.setAttribute('href','./css/animate.css');
				swapper('animate');
				s=0;
		}
		
		document.getElementById('');
	});
	
}
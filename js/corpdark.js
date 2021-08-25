//FONT-AWESOME
var faCSS, docHead;
faCSS = document.createElement('link');
faCSS.setAttribute('rel', 'stylesheet');
faCSS.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css');
faCSS.setAttribute('type','text/css');
console.log(document.getElementsByTagName('head')[0]);
docHead = document.getElementsByTagName('head')[0];
docHead.appendChild(faCSS);

//MENU
var a,  b, c, navLinks;
var iconList = ['fa-home', 'fa-pencil-alt', 'fa-cog', 'fa-book-open', 'fa-comments', 'fa-spider', 'fa-galactic-senate', 'fa-microphone', 'fa-balance-scale-right', 'fa-balance-scale-left' ];
navLinks = document.querySelectorAll('.menuitems ul li a');
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
		this.classList.add('active');
		navLinks[c].classList.toggle('active');
		c = e.path[1].attributes['data-toggle'].value;
		console.log(c, e.path[1].attributes['data-toggle'].value, this);
	});
}
window.addEventListener("hashchange", function () {
     if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 50);
    }
});

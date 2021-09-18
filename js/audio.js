
/*CHATBOT*/
var homeContent = document.querySelector('#home .container .card .content');
var homeBtn = document.createElement('p');
homeBtn.classList.add("start-chat");
homeBtn.innerHTML = '<br><a href="https://www.linkedin.com/in/desaibh/" class="btn btn-primary">Let\'s chat!</a>  ';
homeContent.appendChild(homeBtn)


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


window.onload = function () {
	console.info('Script reg started');
	var appStore = window.localStorage;
	
 // document.getElementsByClassName(".dropdown.icon").innerHTML =
// "Page location is: " + window.location.href;

	// function loginControl() {
		// if(appStore.login  && appStore.pass) {
			// window.location.assign('login.html');	
		// }
	// }
	console.info('hello , this is index.html')

if(!window.sessionStorage.auth){
	window.location.assign('login.html');
}
// Выбор Элементов документа
var byId = document.getElementById('test-elem');
 var byName = document.getElementsByName('test-name');
var byTagName = document.getElementsByTagName('img');
 var byClassName = document.getElementsByClassName('ui inverted header');
 //абота с атрибутами
 // getAttribute();
 // setAttribute();
 // hasAttribute();
 // removeAttribute();


//Универсальные методы для работы с селектоами
 // var oneElement = document.querySelector('#test-elem').lastElementChild.childElementCount;
 // var oneElement = document.querySelector('#test-elem').nextElementSibling;
 //children.lengh
 //childElementCount
 //firstElementChild
 //lastElementChild
 //parentElement
 //nextElementSibling
 //previous0ElementSibling
 // var oneElement = document.querySelector('#test-elem').parentElement.children;
 var oneElement = document.querySelector('#test-elem');
 // oneElement.setAttribute('class','Pidor!!!');
 // oneElement.className = oneElement.className + ' Vasya';
 // oneElement.setAttribute('data-misha', '32');
 // console.log('getAttribute', oneElement.getAttribute('class'));
 //  console.log('hasAttribute', oneElement.hasAttribute('class'));
 //  oneElement.removeAttribute('class');
  	console.log('oneElement', oneElement);
  		oneElement.innerHTML = '<h4 class="ui inverted header">I Love Javascript</h4>';
  		 oneElement.outerHTML = '<div class="ui inverted header">' + oneElement.innerHTML + '</div>';
    console.log('oneElement', oneElement.textContent);
    console.log('oneElement', oneElement.innerHTML);
 // var allElements = document.querySelectorAll('.ui.inverted.header');
// console.log('byId', byId);
// console.log('byName', byName);
// console.log('byTagName', byTagName);
// console.log('byClassName', byClassName);
// console.log('oneElement', oneElement.src);
// oneElement.src = 'ya.ru'
// console.log('oneElement', oneElement.className);
// console.log('allElements', allElements);


}
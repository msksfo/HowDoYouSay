var key = 'key=trnsl.1.1.20170313T181815Z.7270fc26b838de96.fb4b01bc0ba5b35079ae98eb817e6186b2614c20';
var translateButton = document.getElementById('translate');
var select = document.getElementById('languageoptions');
var banner = document.querySelector('.banner');
var textquery = document.getElementById('textquery');
var answer = document.querySelector('.answer');
var resultSpan = document.getElementById('result');


var myRequest = new XMLHttpRequest();

translateButton.addEventListener('click', function(){
	var textquery = document.getElementById('textquery').value;
	var language = document.getElementById('languageoptions').value;
	var resultSpan = document.getElementById('result');

	myRequest.open('GET', 'https://translate.yandex.net/api/v1.5/tr.json/translate?' + key + '&text=' + textquery + '&lang=' + language);


	myRequest.onload = function(){
		
		if (myRequest.status >= 200 && myRequest.status < 400){
			var myData = JSON.parse(myRequest.responseText);
			answer.classList.add('fadein');
			//banner.classList.add('animated');
			resultSpan.innerHTML += myData.text[0];
		} else {
			console.log('server error');
		}
		
	}; // end myRequest.onload function

	myRequest.send();
	

	myRequest.open('GET', 'https://translate.yandex.net/api/v1.5/tr.json/translate?' + key + '&text=' + textquery + '&lang=' + language);


	myRequest.onload = function(){
		if (myRequest.status >= 200 && myRequest.status < 400){
			var myData = JSON.parse(myRequest.responseText);
			answer.classList.add('fadein');
			banner.classList.add('animated');
			resultSpan.innerHTML += myData.text[0];
		} else {
			console.log('server error');
		}
		
	}; // end myRequest.onload function

	myRequest.send();

}); // end click event on translateButton

function resetTextQuery(){
	resultSpan.innerHTML = '';
	textquery.value= '';
	select.selectedIndex = 0;
	banner.classList.remove('animated');
	answer.classList.remove('fadein');
}

function resetSelect(){
	resultSpan.innerHTML = '';
	banner.classList.remove('animated');
}


textquery.addEventListener('focus', resetTextQuery);
select.addEventListener('focus', resetSelect);






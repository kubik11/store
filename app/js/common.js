$(function() {

		$('.list-item').each(function(item){
			$(this).click(function(){
			$('.list-item').removeClass('active-goods-list');
			$('.list-item img').removeClass('disImg');
			$(this).addClass('active-goods-list');
			$(this).children().children().addClass('disImg');
			event();
			setPicture();
			});
		});
			//Переключение посредствот стрелок
				var myArr = document.querySelectorAll('.list-item');
				//var cher = document.querySelector('.fa-chevron-up');
				//var cher1 = document.querySelector('.fa-chevron-down'); 
				var down = document.querySelector('.arrow-down');
				var up = document.querySelector('.arrow-up');
				var copyMyArr = [];

				myArr.forEach(function(elem){
						copyMyArr.push(elem);
				});

				var cher = document.querySelector('.fa-chevron-up');
				var cherDown = document.querySelector('#ziga'); 
				//cherDown.style.color = '#d0d0d0';
				down.addEventListener('click', function(){
					for(var i = 0; i < copyMyArr.length; i++){
						if(copyMyArr[i].classList.contains('active-goods-list') && i < copyMyArr.length -1){
							copyMyArr[i+1].classList.add('active-goods-list');
							copyMyArr[i].classList.remove('active-goods-list');
							break;		
						} 
					}	
					setPicture();
					event();
					
				});
				up.addEventListener('click', function(){
					for(var i = 0; i < copyMyArr.length; i++){
						if(copyMyArr[i].classList.contains('active-goods-list') && i > 0){
							copyMyArr[i-1].classList.add('active-goods-list');
							copyMyArr[i].classList.remove('active-goods-list');
							break;
						}
					}	
					setPicture();
					event();
					
				});	
					
				function event(){		
					for(var i = 0; i < copyMyArr.length; i++){
						if(copyMyArr[i].classList.contains('active-goods-list') && i == 0){
							cherDown.style.color = '#f68235';
							break;
						}
						else{
							cherDown.style.color = '#d0d0d0';
						}
						 if(copyMyArr[i].classList.contains('active-goods-list') && i == copyMyArr.length - 1){
							cher.style.color = '#f68235';
						}
						else{
							cher.style.color = '#d0d0d0';	
						}
					}
				}

var mainPicture = document.querySelector('.mainPicture');
				function setPicture(){
					
					for(var i = 0; i < copyMyArr.length; i++){
						if(copyMyArr[i].classList.contains('active-goods-list')){
							var current = copyMyArr[i];
							var currentChild = current.children[0].children[0];
							var currentAttribute = currentChild.getAttribute('src');
							mainPicture.setAttribute('src', currentAttribute);
						}
					}
				}
});			
	//End of my an interactive list			

	var color = document.querySelectorAll('.colors');
	var col = Array.prototype.forEach;
	 col.call(color, function(elem){

		elem.addEventListener('click', function(e){
			col.call(color, function(i){
				i.classList.remove('colors-active');
			});
				
				e.target.classList.add('colors-active');			
		});

	});
			
// Define a size
var sizeOfGoods = document.querySelectorAll('.size ul li');
var col = Array.prototype.forEach;
	 col.call(sizeOfGoods, function(elem){

		elem.addEventListener('click', function(e){
			col.call(sizeOfGoods, function(i){
				i.classList.remove('active-size');
			});
				
				this.classList.add('active-size');			
		});

	});


var html = document.querySelector('html');
var body = document.querySelector('body');
var pUp = document.querySelector('.popup');
var loc = document.querySelector('.location');
body.addEventListener('click', popUp);
	var contious = false;
function popUp(e){
	
	//var block = document.createElement('div');
	var overlay	= document.createElement('div');

	if(e.target.classList.contains('loc')){
		overlay.classList.add('overlay');
		body.appendChild(overlay);
		//block.classList.add('popup');
		//body.appendChild(block);
		pUp.style.left = 50+'%';
		pUp.style.opacity = 1;
	}
	else if(e.target.classList.contains('popup')){
		pUp.style.opacity = 1;
	}
	//Event to up of the page
	else if(e.target.classList.contains('chev')){
		upPage();
	}
	// hamburger 
	else if(e.target.classList.contains('ham')||e.target.classList.contains('innerHam')){
		mobileList();
	}
	// Определение количества товара добавленного в корзину 
	else if(e.target.classList.contains('minus')){
		subtraction();
	}
	else if(e.target.classList.contains('plus')){
		addition();
	}
	//Добавление в корзину 
	else if(e.target.classList.contains('attend')){
		if(val>0){
			addInBasket();
		}
	}
	else if(e.target.classList.contains('ic')){
		rotate();
	}
	else if(e.target.classList.contains('ic2')){
		rotate2();
	}
	else if(e.target.classList.contains('ic3')){
		rotate3();
	}
	else if(e.target.classList.contains('ic4')){
		rotate4();
	}
	else{
		var first = document.querySelector('.overlay');
		//var second = document.querySelector('.popup');
		first.remove();
		//second.remove();
		pUp.style.opacity = 0;
		setTimeout(function(){pUp.style.left = 500+'%';}, 1000);
		//pUp.style.left = 500+'%';

		//block.parentNode.removeChild('.popup');
	}	
	

}
// Definind of quantity
		var count = document.querySelector('#quan');
		var val = +count.value;
		function addition(){	
				val += 1;
				count.value = val;
			}		
		function subtraction(){
				if(val>0){
				val -= 1;
				count.value = val;
				}
			}
		function lth(){
			var curr = val.toString();
			var len = curr.length;
			return len;
		}
// Addition in basket
		function	addInBasket(){
			var forCycle = document.querySelector('.forCycle');
			var vall = val.toString();
			if(forCycle.childNodes.length >1){
			var er = document.querySelector('.cycle');
			if(lth() > 1){
				er.style.width = 20+"px";
				er.style.height = 20+"px";
				er.style.fontSize = 12+"px";
				er.textContent = val;
			}
			else{
				er.style.width = 19+"px";
				er.style.height = 19+"px";
				er.style.fontSize = 14+"px";
				er.textContent = val;
				}
			}
			else{
			var curr = document.createElement('div');
			curr.classList.add('cycle');
		
			forCycle.appendChild(curr);
			curr.textContent = val;
			//curr.remove();
			}
		}

//End of addition in buscket

//Rotate
	var contiousOfRotate = false;
	function rotate(){
		var elem = document.querySelector('.horizontal');
		var emb = document.querySelector('.embeded');
		if(contiousOfRotate == false){	
		elem.classList.add('no-rotate');
		emb.style.display = 'block';
		contiousOfRotate = true;
		}
		else{
		elem.classList.remove('no-rotate');
		emb.style.display = 'none';
		contiousOfRotate = false;
		}
	}

	var contiousOfRotate2 = false;
	function rotate2(){
		var elem = document.querySelector('.horizontal.ic2');
		var emb = document.querySelector('.embeded.ic2');
		if(contiousOfRotate2 == false){	
		elem.classList.add('no-rotate');
		emb.style.display = 'block';
		contiousOfRotate2 = true;
		}
		else{
		elem.classList.remove('no-rotate');
		emb.style.display = 'none';
		contiousOfRotate2 = false;
		}
	}

	var contiousOfRotate3 = false;
	function rotate3(){
		var elem = document.querySelector('.horizontal.ic3');
		var emb = document.querySelector('.embeded.ic3');
		if(contiousOfRotate3 == false){	
		elem.classList.add('no-rotate');
		emb.style.display = 'block';
		contiousOfRotate3 = true;
		}
		else{
		elem.classList.remove('no-rotate');
		emb.style.display = 'none';
		contiousOfRotate3 = false;
		}
	}
	var contiousOfRotate4 = false;
	function rotate4(){
		var elem = document.querySelector('.horizontal.ic4');
		var emb = document.querySelector('.embeded.ic4');
		if(contiousOfRotate4 == false){	
		elem.classList.add('no-rotate');
		emb.style.display = 'block';
		contiousOfRotate4 = true;
		}
		else{
		elem.classList.remove('no-rotate');
		emb.style.display = 'none';
		contiousOfRotate4 = false;
		}
	}
// End of rotate


var equalH = document.querySelectorAll('.height');
var equalH2 = document.querySelectorAll('.height2');
	var lend = Array.prototype.forEach;
	var h = 0;
	var h2 = 0;	
	var total = lend.call(equalH, function(a){
		var height = a.clientHeight;
		if(height > h){
			h = height;
		}
		
	});
	lend.call(equalH, function(e){
		e.style.height = h+'px';
	});
	var total2 = lend.call(equalH2, function(a){
		var height = a.clientHeight;
		if(height > h2){
			h2 = height;
		}
		
	});
	lend.call(equalH2, function(e){
		e.style.height = h2+'px';
	});
//Resize
	window.onresize = resS;
	function resS(){
		var screenW = window.innerWidth ;
		var currentHam = document.querySelector('.wrap-logo');
		if (screenW < 480 && inCurrHam()){
			phone();
		}

		function inCurrHam(){
			var trigger;
			for( var i = 0; i < currentHam.children.length; i++){
				if (currentHam.children[i].classList.contains('ham')){
					trigger = false;
				}
				else{
					trigger =  true;
				}
			}
			return trigger;
		}
	}

	function phone(){
		var head = document.querySelector('.wrap-logo');
		var hamburger = document.createElement('div');
		var innerHamburger = document.createElement('div');
		var innerHamburger2 = document.createElement('div');
		var innerHamburger3 = document.createElement('div');
		innerHamburger.classList.add('innerHam');
		innerHamburger2.classList.add('innerHam2');
		innerHamburger3.classList.add('innerHam3');
		//innerHamburger.classList.add('iH');
		//innerHamburger2.classList.add('iH');
		hamburger.classList.add('iH');
		hamburger.classList.add('ham');
		hamburger.appendChild(innerHamburger);
		hamburger.appendChild(innerHamburger2);
		hamburger.appendChild(innerHamburger3);
		head.appendChild(hamburger);
	}

	function mobileList(){
		var innerH = document.querySelector('.iH');
		var nav = document.querySelector('.navigation');
		if (!innerH.classList.contains('innerHam-active')){
			innerH.classList.add('innerHam-active');
			innerH.classList.remove('innerHam');
			nav.classList.add('navigation-active');
		}
		else if (innerH.classList.contains('innerHam-active')){
			innerH.classList.remove('innerHam-active');
			nav.classList.remove('navigation-active');
			innerH.classList.add('innerHam');
			
		}
		
	}
	// Scrolling
	var footer = document.querySelector('.info');
	var info = document.querySelector('.info-list');
	var trig = false;
	window.onscroll = function(){
	var placement = footer.getBoundingClientRect().top;
		if(placement<430 && !trig){
		
		var chevron = document.createElement('div');
		var icon = document.createElement('i');
		chevron.classList.add('chev');
		icon.classList.add('fa');
		icon.classList.add('fa-chevron-up');
		chevron.appendChild(icon);
		info.appendChild(chevron);
		trig = true;
		}
		else if(placement>430 && trig){
			
			var appended = document.querySelector('.chev');
			appended.parentNode.removeChild(appended);
			trig = false;
		}
	}
	function upPage(){
		window.scrollTo(0, 0);
	}
	// end of scrolling
	function cloneElem(idElem, deep){
		var elem = document.getElementById(idElem);
		var cloneNode = elem.cloneNode(deep);
		cloneNode.classList.add('embeded');
		cloneNode.classList.add('ic4');
		var parentElem = document.querySelector('.four-item');
		 parentElem.appendChild(cloneNode);
	}

	

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
	resS();
	cloneElem('familiar', true);
});

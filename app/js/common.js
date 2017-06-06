$(function() {

		$('.list-item').each(function(item){
			$(this).click(function(){
			$('.list-item').removeClass('active-goods-list');
			$('.list-item img').removeClass('disImg');
			$(this).addClass('active-goods-list');
			$(this).children().children().addClass('disImg');
			event();

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
							//colorF();
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


				function setPicture(){
					var mainPic = document.querySelector('.mainPicture');
					for(var i = 0; i < copyMyArr.length; i++){
						var current = copyMyArr[i].classList.contains('active-goods-list');
						if(current){
							var currentAttribute = current.lastChild.getAttribute('src');
							mainPic.setAttribute('src', currentAttribute);
						}
					}
				}
				//function colorF(){
				//	cherDown.style.color = '#f68235';
				//	alert();
				//}
				
});			
			
		
		
	


$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});

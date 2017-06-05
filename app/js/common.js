$(function() {

		$('.list-item').each(function(item){
			$(this).click(function(){
			$('.list-item').removeClass('active-goods-list');
			$(this).addClass('active-goods-list');
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
				
				down.addEventListener('click', function(){
					var cher = document.querySelector('.fa-chevron-up');
					for(var i = 0; i < copyMyArr.length; i++){

						if(copyMyArr[i].classList.contains('active-goods-list')){
							copyMyArr[i+1].classList.add('active-goods-list');
							copyMyArr[i].classList.remove('active-goods-list');
							break;		
						} 
					}	
					for(var j = 0; j < copyMyArr.length; j++){
						if(copyMyArr[j].classList.contains('active-goods-list') && j == copyMyArr.length - 1){
							cher.style.color = '#f68235';
						}
						else{
							cher.style.color = '#d0d0d0';
						}
					}

				});
				up.addEventListener('click', function(){
					var cher1 = document.querySelector('.fa-chevron-down'); 
					for(var i = 0; i < copyMyArr.length; i++){
						if(copyMyArr[i].classList.contains('active-goods-list')){
							copyMyArr[i-1].classList.add('active-goods-list');
							copyMyArr[i].classList.remove('active-goods-list');
							break;
						}
					}	

					for(var a = 0; a < copyMyArr.length; a++){
						if(copyMyArr[a].classList.contains('active-goods-list') && a == 0){
							cher1.style.color = '#f68235';
						}
						else{
							cher1.style.color = '#d0d0d0';
						}
					}
				});	


				function event(){
					for(var i = 0; i < copyMyArr.length; i++){
						
					}
				}
				
				
});			
			
		
		
	


$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});

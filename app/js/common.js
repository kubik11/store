$(function() {

		$('.list-item').each(function(item){
			$(this).click(function(){
			$('.list-item').removeClass('active-goods-list');
			$(this).addClass('active-goods-list');
			});
		});
			//Переключение посредствот стрелок
				var myarr = document.querySelector('.list-item');
				alert(myarr.lenght);
				var down = document.getElementsByClassName('arrow-down');
				down.addEventListener('click', downTo);
				function downTo(){	
					for(var i = 0; i < myarr.lenght; i++){
						//if(myarr[i].classList.contains('active-goods-list')){
						//	myarr[i].classList.remove('active-goods-list');
						alert(myarr[i]);
						//}
						}
					
				}	
});				
			
		
		
	


$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});

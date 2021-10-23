let notification=document.getElementById('flex_notification');
let notification_image=document.getElementById('notification_image');
let notification_p=document.getElementById('notification_p');
let img_Logo=document.getElementById('img_logo');
let a_Home=document.getElementById('a_home');
let a_Store=document.getElementById('a_store');
let a_Gallery=document.getElementById('a_gallery');
let a_About=document.getElementById('a_about');
let img_Shoppingcart=document.getElementById('img_shoppingcart');
let img_Main1 = document.getElementById('img_main1');
let img_Main1_h2 = document.querySelector('#img_main1 h1');
let img_Main1_h3 = document.querySelector('#img_main1 h3');
let img_Main1_h3_a = document.querySelector('#img_main1 h3 a');
let li_Home=document.getElementById('home');
let li_Gallery=document.getElementById('gallery');
let li_About=document.getElementById('about');
let h2_Gallery=document.getElementById('h2_gallery');
let gallery_Images=document.querySelectorAll('.gallery_images');
let gallery_Images_img=document.querySelectorAll('.gallery_images img');
let gallery_Images_img_hover=document.querySelectorAll('.gallery_images img:hover');
let gallery_Images_p=document.querySelectorAll('.gallery_images p');

let slideShowImages=			['pexels-chevanon-photography-302899.jpg','pexels-jason-villanueva-851555.jpg', 'pexels-fisch-productions-917728.jpg', 'pexels-dominika-roseclay-977876.jpg', 'pexels-ron-lach-9829488.jpg'];
let var_img_Main1_h2_Colors=	['var(--color3)', 'var(--color2)', 'salmon','lightgreen', 'purple'];
let var_img_Main1_h3_Credits=	['Chevanon', 'Jason Villanueva', 'Fisch', 'Dominika Roseclay', 'Ron Lach'];
let var_img_Main1_h3_a_Credits=['https://www.pexels.com/@chevanon', 'https://www.pexels.com/@jayoke', 'https://www.pexels.com/@fisch-productions-325244', 'https://www.pexels.com/@ron-lach'];
let slideIndex=0;

img_Logo.addEventListener('mousedown', function(){animator(img_Logo, 'img_logo_rotate')})
img_Shoppingcart.addEventListener('mousedown', function(){animator(img_Shoppingcart, 'img_shoppingcart_rotate')})
/*
a_Home.addEventListener('mousedown', function(){scrollPage('scroller_home');});
a_Store.addEventListener('mousedown', function(){scrollPage('scroller_store');});
a_Gallery.addEventListener('mousedown', function(){scrollPage('scroller_gallery');});
*/
bgiSlideShow(img_Main1, slideShowImages, 4000);

function bgiSlideShow(var_element, imagesPathArray, timer){
	slideIndex==imagesPathArray.length ? slideIndex=0 : '';
	var_element.style.backgroundImage="url('Images/"+imagesPathArray[slideIndex]+"')";
	img_Main1_h2.style.backgroundColor=var_img_Main1_h2_Colors[slideIndex];
	img_Main1_h3.innerHTML='Photo By '+var_img_Main1_h3_Credits[slideIndex]+' From '
	img_Main1_h3_a.href=var_img_Main1_h3_a_Credits[slideIndex];
	(slideIndex==2 /*|| slideIndex==3*/) ? img_Main1_h3.style.color='lightgray' : img_Main1_h3.style.color='black';
	
	slideIndex++;
	setTimeout(function(){bgiSlideShow(img_Main1, imagesPathArray, timer)}, timer);
}

function animator(var_element, var_animationName){
	var_element.style.animationName=var_animationName;
	setTimeout(function(){var_element.style.animationName='x'; console.log('anim');}, 1000*parseFloat(getComputedStyle(var_element).animationDuration))
}

function notification_pop(item, url){
	notification.style.display='flex';
	setTimeout(function(){notification.style.animationName='notification_pop';}, 500);
	setTimeout(function(){notification.style.animationName='notification_pop_reverse';}, 3000);
	setTimeout(function(){
		notification.style.display='none';
		notification.style.animationName='x';
		},3500)
	notification_image.style.backgroundImage="url("+url+")";
	notification_p.innerHTML="'"+item+"'" + ' was added to the cart!';
}
function scrollPage(where){
	//document.getElementById(where).scrollIntoView();
	//window.scrollTo(0, document.getElementById(where).scrollHeight-40);
	document.getElementById(where).scrollIntoView();
	return
}
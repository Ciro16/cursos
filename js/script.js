
document.querySelector('body').classList.remove("preload");

var checkbox = document.querySelector('input[type="checkbox"]');
var menu = document.querySelector('#menu');

var menuAbierto = false;

checkbox.addEventListener('click', function(){
	if (menuAbierto) {
		menu.removeAttribute('style');
		menu.style.transform = 'translateX(-100)';
		menuAbierto = false;

	}else{
		menu.removeAttribute('style');
		menu.style.transform = 'translateX(0)';
		menuAbierto = true;
	}
});

window.addEventListener('click', function(e){
	if (e.target != menu && e.target != checkbox) {
		if (menuAbierto) {
			menu.removeAttribute('style');
			menu.style.transform = 'translateX(-100)';
			menuAbierto = false;
		}		
	}
});

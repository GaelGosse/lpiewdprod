function loadbar() {
	var ovrl = document.getElementById("overlay"),
		prog = document.getElementById("progress"),
		stat = document.getElementById("perc"),
		img = document.querySelectorAll('video, img'),
		c = 0,
		tot = img.length;
	if(tot == 0) return doneLoading();

	function imgLoaded(){
		c += 1;
		var perc = ((100/tot*c) << 0) +"%";
		prog.style.width = perc;
		stat.innerHTML = perc;
		if(c===tot) return doneLoading();
	}
	function doneLoading(){
		ovrl.style.opacity = 0;
		setTimeout(function(){
		ovrl.style.display = "none";
		}, 1200);
	}
	for(var i=0; i<tot; i++) {
		var tImg     = new Image();
		tImg.onload  = imgLoaded;
		tImg.onerror = imgLoaded;
		tImg.src     = img[i].src;
	}
}
document.addEventListener('DOMContentLoaded', loadbar, false);

document.addEventListener('DOMContentLoaded', ()=> {
	// let percentage = document.getElementById('percentage');
	// let imgsLoad = document.images;
	// let imgsLoadLength = imgsLoad.length;
	// var perc = ((100/tot*c) << 0) +"%";


	// window.addEventListener('load', ()=>{
	//     $('.loader').fadeOut("slow");
	// })

	// p Produisant des images et des videos de qualités
	// p la page peut prendre quelques instants à charger


	let menubar = document.getElementById('menu');
	let close = document.getElementById('close')

	menubar.addEventListener('click', (e)=>{
		e.preventDefault();
		let nav = e.target.parentNode.parentNode.firstChild.nextSibling.nextSibling
		let navX = nav.getBoundingClientRect().x
		if(navX == -250){
			nav.style.left = "0"
		}
	})
	close.addEventListener('click', (e)=>{
		e.preventDefault();
		let nav = e.target.parentNode.parentNode
		let navX = nav.getBoundingClientRect().x
		if(navX == 0){
			nav.style.left = "-250px"
		}
	})

	if(document.querySelectorAll('#slider1').length > 0){
		let imgs = [
			'../images/shooting_photo/image00003.jpeg',
			'../images/shooting_photo/image00019.png',
			'../images/shooting_photo/image00006.jpeg',
			'../images/shooting_photo/image00011.jpeg',
			'../images/shooting_photo/image00007.jpeg',
		]

		imgs.map(img=>{
			let div1 = document.createElement('div')
			let div2 = document.createElement('img')
			div2.setAttribute('class',`divimg`)
			div2.setAttribute('style',`
				background-image: url(${img});
				background-size: contain;
				background-position: center center;
				background-repeat: no-repeat;
			`)

			div1.append(div2)
			$('#slider1').append(div1)
		});
	}
	if(document.querySelectorAll('#slider2').length > 0){
		let imgs = [
			'../images/evenementiel/image00019.jpg',
			'../images/evenementiel/image00018.jpeg',
			'../images/evenementiel/image00011.jpeg',
			'../images/evenementiel/image00014.jpeg',
		]

		imgs.map(img=>{
			let div1 = document.createElement('div')
			let div2 = document.createElement('img')
			div2.setAttribute('class',`divimg`)
			div2.setAttribute('style',`
				background-image: url(${img});
				background-size: contain !important;
				background-position: center center !important;
				background-repeat: no-repeat !important;
			`)

			div1.append(div2)
			document.querySelector('#slider2').append(div1)
		});
	}

	async function detectAdBlock() {
		let adBlockEnabled = false
		const googleAdUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
		try {
			await fetch(new Request(googleAdUrl)).catch(_ => adBlockEnabled = true)
		} catch (e) {
			adBlockEnabled = true
		} finally {
			if(document.querySelectorAll('#slider1').length > 0){
				$('#slider1').slick({
					dots: true,
					centerPadding: '30px',
					centerMode: true,
					focusOnSelect: true,
					slidesToShow: 1,
					responsive: [
						{
							breakpoint: 768,
							settings: {
								centerMode: true,
								centerPadding: '30px',
								slidesToShow: 1,
								arrows: false
							}
						},
						{
							breakpoint: 480,
							settings: {
								centerMode: true,
								centerPadding: '30px',
								slidesToShow: 1,
								arrows: false
							}
						}
					]
				});

				let dots1 = Array.from(document.querySelectorAll('#slider1 .slick-dots li button'));
				for(let i of dots1){
					i.textContent = '';
				}

				if(document.getElementsByClassName('slick-prev').length > 0 && document.getElementsByClassName('slick-next').length > 0){
					document.getElementsByClassName('slick-prev')[0].innerHTML = '<i class="fas fa-chevron-left"></i>';
					document.getElementsByClassName('slick-next')[0].innerHTML = '<i class="fas fa-chevron-right"></i>';
				}
			}
			if(document.querySelectorAll('#slider2').length > 0){
				$('#slider2').slick({
					dots: true,
					centerPadding: '30px',
					centerMode: true,
					focusOnSelect: true,
					slidesToShow: 1,
					responsive: [
						{
							breakpoint: 768,
							settings: {
								centerMode: true,
								centerPadding: '30px',
								slidesToShow: 1,
								arrows: false
							}
						},
						{
							breakpoint: 480,
							settings: {
								centerMode: true,
								centerPadding: '30px',
								slidesToShow: 1,
								arrows: false
							}
						}
					]
				});

				let dots2 = Array.from(document.querySelectorAll('#slider1 .slick-dots li button'));
				for(let i of dots2){
					i.textContent = '';
				}

				if(document.getElementsByClassName('slick-prev').length > 0 && document.getElementsByClassName('slick-next').length > 0){
					document.getElementsByClassName('slick-prev')[1].innerHTML = '<i class="fas fa-chevron-left"></i>';
					document.getElementsByClassName('slick-next')[1].innerHTML = '<i class="fas fa-chevron-right"></i>';
				}
			}
			if(adBlockEnabled){
				if(document.querySelector('#slider1')){
					document.querySelecto('#slider1').innerHTML = '( ! ) Pour voir les images, désactiver adBlock ( ! )'
				}
				if(document.querySelecto('#slider2')){
					document.querySelecto('#slider2').innerHTML = '( ! ) Pour voir les images, désactiver adBlock ( ! )'
				}
			} else {
			}
		}
	}
	detectAdBlock()


})

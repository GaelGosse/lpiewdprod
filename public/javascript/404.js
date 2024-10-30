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
    window.addEventListener('load', ()=>{
        $('.loader').fadeOut("slow");
    })

    let time = document.getElementById('time');
    let ite = 9;

    setInterval(() => {
        if (ite > 0)
        {
            time.innerHTML = `0${ite} `;
            ite--;
        }
        else
        {
            window.location.href = "/"
        }
    }, 1000);
})
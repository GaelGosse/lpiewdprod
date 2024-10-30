document.addEventListener('DOMContentLoaded', ()=> {
    window.addEventListener('load', ()=>{
        $('.loader').fadeOut("slow");
    })

    if(document.querySelectorAll('#slider').length > 0){
        let imgs = [
            '../images/qsn_first/image00001.jpeg',
            '../images/qsn_first/image00002.jpeg',
            '../images/qsn_first/image00003.jpeg',
            '../images/qsn_second/image00001.jpeg',
            '../images/qsn_second/image00002.jpeg',
            '../images/qsn_second/image00003.jpeg',
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
            $('#slider').append(div1)
        });
        $('#slider').slick({
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

        let dots1 = Array.from(document.querySelectorAll('#slider .slick-dots li button'));
        for(let i of dots1){
            i.textContent = '';
        }

        if(document.getElementsByClassName('slick-prev').length > 0 && document.getElementsByClassName('slick-next').length > 0){
            document.getElementsByClassName('slick-prev')[0].innerHTML = '<i class="fas fa-chevron-left"></i>';
            document.getElementsByClassName('slick-next')[0].innerHTML = '<i class="fas fa-chevron-right"></i>';
        }
    }

})
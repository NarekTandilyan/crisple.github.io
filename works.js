const ul1 = document.querySelector(".ul1");
const ul2 = document.querySelector(".ul2");
const label1 = document.querySelector(".label1");
const label2 = document.querySelector(".label2");
const label3 = document.querySelector(".label3");
const label4 = document.querySelector(".label4");
const label5 = document.querySelector(".label5");
const link_more = document.querySelectorAll('.link_more1');
const marquee = document.querySelector('marquee');
const inscr1 = document.querySelector('.inscr1');
const inscr2 = document.querySelector('.inscr2');
const inscr3 = document.querySelector('.inscr3');

//for main in works page
const section_header1 = document.querySelector('.section_header1');
const section_header2 = document.querySelector('.section_header2');
const section_header3 = document.querySelector('.section_header3');
const section_header4 = document.querySelector('.section_header4');
const section_header5 = document.querySelector('.section_header5');



// Сайт на испанском
label1.onclick = function(){
        ul2.innerHTML = `
						<li><a class="a5" href=""> Techos </a></li>
                        <li><a class="a4" href=""> Toldos </a></li>
						<li><a class="a7" href=""> Persianas </a></li>
						<li><a class="a8" href=""> Mosquiteras </a></li>
                        <li><a class="a6" href=""> Cristales Plegables </a></li>
        
        `;
        

        label2.classList.remove('label22');
        label3.classList.remove('label33');
        label4.classList.remove('label44');
        label5.classList.remove('label55');
        label1.classList.add('label11');

        link_more.forEach(link=>{
            link.innerText = 'Más';
            link.classList.remove('link_more2');
            link.classList.remove('link_more3');
            link.classList.remove('link_more4');
            link.classList.remove('link_more5');
            link.classList.add('link_more1');
        })

        marquee.innerHTML = `
                            Bienvenido a Crisple, tu empresa local de Denia especializada en el montaje de toldos, acristalamientos, persianas, mosquiteras y techos. Ofrecemos soluciones personalizadas y de alta calidad para proteger y mejorar tus espacios exteriores, tanto para hogares como para negocios.
                            `;

        inscr1.innerText = `Nuestros trabajos`
        inscr2.innerText = `Garantía hasta 5 años!`
        inscr3.innerText = `Más de 20 años de experiencia!`

        section_header1.innerHTML = `Techos`;
        section_header2.innerText = `Toldos`;
        section_header3.innerText = `Persianas`;
        section_header4.innerText = `Mosquiteras`;
        section_header5.innerText = `Cristales plegables`;
}
// Сайт на английском
label2.onclick = function(){
    ul2.innerHTML = `
                    <li><a class="a55" href=""> Roofs </a></li>
                    <li><a class="a44" href=""> Awnings </a></li>
                    <li><a class="a77" href=""> Blinds </a></li>
                    <li><a class="a88" href=""> Mosquito nets </a></li>
                    <li><a class="a66" href=""> Folding crystals </a></li>
    
    `;
    
    label1.classList.remove('label11');
    label3.classList.remove('label33');
    label4.classList.remove('label44');
    label5.classList.remove('label55');
    label2.classList.add('label22');

    link_more.forEach(link=>{
        link.innerText = 'More';
        link.classList.remove('link_more1');
        link.classList.remove('link_more3');
        link.classList.remove('link_more4');
        link.classList.remove('link_more5');
        link.classList.add('link_more2');
    })

    marquee.innerHTML = `
        At Crisple, we strive to provide our customers with exceptional service and high-quality products. Our team of professionals will guide you through the entire process. When you work with us, you can be assured that you will receive customized, long-lasting, and attractive solutions for your outdoor spaces.
    `;

    inscr1.innerText = `Our works`
    inscr2.innerText = `Warranty up to 5 years!`
    inscr3.innerText = `More than 20 years of experience!`

    section_header1.innerHTML = `Roofs`;
    section_header2.innerText = `Awnings`;
    section_header3.innerText = `Blinds`;
    section_header4.innerText = `Mosquito nets`;
    section_header5.innerText = `Folding crystals`;
}
// Сайт на Французском
label3.onclick = function(){
    ul2.innerHTML = `
                    <li><a class="a555" href=""> Toits </a></li>
                    <li><a class="a444" href=""> Auvents </a></li>
                    <li><a class="a777" href=""> Stores </a></li>
                    <li><a class="a888" href=""> Moustiquaires </a></li>
                    <li><a class="a666" href=""> Fenêtres pliantes </a></li>
    
    `;
    
    label1.classList.remove('label11');
    label2.classList.remove('label22');
    label4.classList.remove('label44');
    label5.classList.remove('label55');
    label3.classList.add('label33');

    link_more.forEach(link=>{
        link.innerText = 'Plus';
        link.classList.remove('link_more1');
        link.classList.remove('link_more2');
        link.classList.remove('link_more4');
        link.classList.remove('link_more5');
        link.classList.add('link_more3');
    })

    marquee.innerHTML = `
        Chez Crisple, nous nous efforçons de fournir à nos clients un service exceptionnel et des produits de haute qualité. Notre équipe de professionnels vous accompagnera tout au long du processus. Lorsque vous travaillez avec nous, vous pouvez être assuré de recevoir des solutions personnalisées, durables et attrayantes pour vos espaces extérieurs.
    `;

    inscr1.innerText = `Nos travaux`
    inscr2.innerText = `Garantie jusqu'à 5 ans!`
    inscr3.innerText = `Plus de 20 ans d'expérience!`

    section_header1.innerHTML = `Toits`;
    section_header2.innerText = `Auvents`;
    section_header3.innerText = `Stores`;
    section_header4.innerText = `Moustiquaires`;
    section_header5.innerText = `Fenêtres pliantes`;
}
// Сайт на немецком
label4.onclick = function(){
    ul2.innerHTML = `
                    <li><a class="a5555" href=""> Dächer </a></li>
                    <li><a class="a4444" href=""> Markisen </a></li>
                    <li><a class="a7777" href=""> Jalousie </a></li>
                    <li><a class="a8888" href=""> Moskitonetze </a></li>
                    <li><a class="a6666" href=""> Faltfenster </a></li>
    
    `;
    
    label1.classList.remove('label11');
    label2.classList.remove('label22');
    label3.classList.remove('label33');
    label5.classList.remove('label55');
    label4.classList.add('label44');

    link_more.forEach(link=>{
        link.innerText = 'Mehr';
        link.classList.remove('link_more1');
        link.classList.remove('link_more2');
        link.classList.remove('link_more3');
        link.classList.remove('link_more5');
        link.classList.add('link_more4');
    })

    marquee.innerHTML = `
        Bei Crisple sind wir bestrebt, unseren Kunden außergewöhnlichen Service und qualitativ hochwertige Produkte zu bieten. Unser professionelles Team begleitet Sie durch den gesamten Prozess. Wenn Sie mit uns zusammenarbeiten, können Sie sicher sein, maßgeschneiderte, langlebige und attraktive Lösungen für Ihre Außenbereiche zu erhalten.
    `;

    inscr1.innerText = `Unsere werke`
    inscr2.innerText = `Garantie bis zu 5 jahre!`
    inscr3.innerText = `Mehr als 20 jahre erfahrung!`

    section_header1.innerHTML = `Dächer`;
    section_header2.innerText = `Markisen`;
    section_header3.innerText = `Jalousie`;
    section_header4.innerText = `Moskitonetze`;
    section_header5.innerText = `Faltfenster`;
}

//Сайта  на русском
label5.onclick = function(){
        ul2.innerHTML = `
				<li><a class="a55555" href=""> Крыши </a></li>
                <li><a class="a44444" href=""> Тенты </a></li>
				<li><a class="a77777" href=""> Жалюзи </a></li>
				<li><a class="a88888" href=""> Маскитные сетки </a></li>
                <li><a class="a66666" href=""> Складные окна </a></li>
        `;

        label1.classList.remove('label11');
        label2.classList.remove('label22');
        label3.classList.remove('label33');
        label4.classList.remove('label44');
        label5.classList.add('label55');

        link_more.forEach(link=>{
            link.innerText = 'Больше';
            link.classList.remove('link_more1');
            link.classList.remove('link_more2');
            link.classList.remove('link_more3');
            link.classList.remove('link_more4');
            link.classList.add('link_more5');
        })

        marquee.innerHTML = `
            В Crisple мы стремимся предоставлять нашим клиентам исключительный сервис и высококачественную продукцию. Наша команда профессионалов будет сопровождать вас на протяжении всего процесса. Работая с нами, вы можете быть уверены в получении индивидуальных, долговечных и привлекательных решений для вашего наружного пространства.
        `;

        inscr1.innerText = `Наши работы`
        inscr2.innerText = `Гарантия до 5 лет!`
        inscr3.innerText = `Более 20 лет опыта!`

        section_header1.innerHTML = `Крыши`;
        section_header2.innerText = `Тенты`;
        section_header3.innerText = `Жалюзи`;
        section_header4.innerText = `Маскитные сетки`;
        section_header5.innerText = `Складные окна`;
}














// //Сайта  на английском
// label3.forEach(label=>{
//     label.onclick = function(){
//         ul.innerHTML = `
//         <li class="li1"><a class="a111" href="ararat_home.html"> Home </a></li>
//         <li class="li1"><a class="a222" href="ararat_shop.html"> Products </a></li>
//         <li class="li2"><a class="a333" href="blagoustroystvo.html"> Improvement </a></li>
//         <li class="li3"><a class="a444" href="istoria.html"> About LLC 'Ararat' </a></li>
//         `;
//         const eng2 = ['Road curb', 'Sidewalk curb', 'Paving stone 10х20', 'Paving stone 20х20', "Pav. stone 'Zigzag'", "Pav. stone 'Kolo'", "Pav. stone 'Gjelka'", "Սալիկ 'Ալիք'"];
        
//         li_list2.forEach((li, i)=>{
//             if(i === 0){
//                 li.innerHTML = `<a class="opt_a" href="ararat_bordyur_dorojniy.html"> ${eng2[i]} </a>`;
//             }else if(i === 1){
//                 li.innerHTML = `<a class="opt_a" href="trat_bordyur.html"> ${eng2[i]} </a>`;
//             }else if(i === 2){
//                 li.innerHTML = `<a class="opt_a" href="brusch10x20.html"> ${eng2[i]} </a>`;
//             }
//             else if(i === 3){
//                 li.innerHTML = `<a class="opt_a" href="brusch20x20.html"> ${eng2[i]} </a>`;
//             }
//             else if(i === 4){
//                 li.innerHTML = `<a class="opt_a" href="br_volna.html"> ${eng2[i]} </a>`;
//             }
//             else if(i === 5){
//                 li.innerHTML = `<a class="opt_a" href="br_kolo.html"> ${eng2[i]} </a>`;
//             }
//             else if(i === 6){
//                 li.innerHTML = `<a class="opt_a" href="br_gjelka.html"> ${eng2[i]} </a>`;
//             }
//             else if(i === 7){
//                 li.innerHTML = `<a class="opt_a" href="br_kvadr.html"> ${eng2[i]} </a>`;
//             }
//         });
    
//         maqruee.innerText = `Adress of company: Lensk c., st. Obiezdnaya 19. Contact us by number: +79999999999. Write us: ararat@mail.ru. Inst: @ararat-lensk. More detailed about contacts you can find below.`;
       
//         h3s.forEach((h3, i)=>{
//             if(i === 0){
//                 h3.innerText = 'Asphalting';
//             }else if(i === 1){
//                 h3.innerText = 'Development of squares';
//             }else if(i === 2){
//                 h3.innerText = 'Construction of buildings';
//             }else{
//                 h3.innerText = 'Concrete production';
//             }
//         })

//         f_as.forEach((a, i)=>{
//             if(i === 0){
//                 a.innerText = 'Home';
//             }else if(i === 1){
//                 a.innerText = 'Products';
//             }else if(i === 2){
//                 a.innerText = 'Improvement';
//             }else if(i === 3){
//                 a.innerText = "About LLC 'Ararat'";
//             }
//         })

//         h4s.forEach((h4, i)=>{
//             if(i === 0){
//                 h4.innerText = 'Links:';
//             }else{
//                 h4.innerText = 'Contacts:';
//             }
//         })

//         label.classList.add('label33');
//         label2.forEach(label=>{
//             label.classList.remove('label22');
//         })
//         label1.forEach(label=>{
//             label.classList.remove('label11');
//         })

//         more_link.forEach(link=>{
//             link.innerText = 'More';
//             link.classList.remove('more_link');
//             link.classList.remove('more_link1');
//             link.classList.add('more_link2');
//         });

//     }
// })


//Большой слайдер
const radios = document.querySelectorAll('.radio');
const slider = document.querySelector('.slider');
let img_n = 0;
let j = 0;

setInterval(() => {
    radios[j].checked = 'true';
    slider.style.left = -img_n + '%';
    img_n += 100;
    j++;
    if(img_n > 900){
        img_n = 0;
    }
    if(j > 9){
        j = 0;
    }
}, 3000);

radios.forEach((radio, i)=>{
    if(i == 0){
        radio.onclick = ()=>{
            slider.style.left = 0;
            img_n = 0;
            j = 0;
        }
    }else if(i == 1){
        radio.onclick = ()=>{
            slider.style.left = -100 + '%';
            img_n = 100;
            j = 1;
        }
    }else if(i == 2){
        radio.onclick = ()=>{
            slider.style.left = -200 + '%';
            img_n = 200;
            j = 2;
        }
    }else if(i == 3){
        radio.onclick = ()=>{
            slider.style.left = -300 + '%';
            img_n = 300;
            j = 3;
        }
    }else if(i == 4){
        radio.onclick = ()=>{
            slider.style.left = -400 + '%';
            img_n = 400;
            j = 4;
        }
    }else if(i == 5){
        radio.onclick = ()=>{
            slider.style.left = -500 + '%';
            img_n = 500;
            j = 5;
        }
    }else if(i == 6){
        radio.onclick = ()=>{
            slider.style.left = -600 + '%';
            img_n = 600;
            j = 6;
        }
    }else if(i == 7){
        radio.onclick = ()=>{
            slider.style.left = -700 + '%';
            img_n = 700;
            j = 7;
        }
    }else if(i == 8){
        radio.onclick = ()=>{
            slider.style.left = -800 + '%';
            img_n = 800;
            j = 8;
        }
    }else{
        radio.onclick = ()=>{
            slider.style.left = -900 + '%';
            img_n = 900;
            j = 9;
        }
    }
})


// // Слайдер асфальта
// const radios_m = document.querySelectorAll('.radio_m');
// const slider_mini = document.querySelector('.slider_mini');
// let img_n1 = 0;
// let j_m = 0;

// setInterval(() => {
//     radios_m[j_m].checked = 'true';
//     slider_mini.style.left = -img_n1 + '%';
//     img_n1 += 100;
//     j_m++;
//     if(img_n1 > 300){
//         img_n1 = 0;
//     }
//     if(j_m > 3){
//         j_m = 0;
//     }
// }, 3000);

// radios_m.forEach((radio, i)=>{
//     if(i == 0){
//         radio.onclick = ()=>{
//             slider_mini.style.left = 0;
//             img_n1 = 0;
//             j_m = 0;
//         }
//     }else if(i == 1){
//         radio.onclick = ()=>{
//             slider_mini.style.left = -100 + '%';
//             img_n1 = 100;
//             j_m = 1;
//         }
//     }else if(i == 2){
//         radio.onclick = ()=>{
//             slider_mini.style.left = -200 + '%';
//             img_n1 = 200;
//             j_m = 2;
//         }
//     }else{
//         radio.onclick = ()=>{
//             slider_mini.style.left = -300 + '%';
//             img_n1 = 300;
//             j_m = 3;
//         }
//     }
// })


// // Слайдер благоустройства

// const radios_m1 = document.querySelectorAll('.radio_m1');
// const slider_mini1 = document.querySelector('.slider_mini1');
// let img_n2 = 0;
// let j_m1 = 0;

// setInterval(() => {
//     radios_m1[j_m1].checked = 'true';
//     slider_mini1.style.left = -img_n2 + '%';
//     img_n2 += 100;
//     j_m1++;
//     if(img_n2 > 300){
//         img_n2 = 0;
//     }
//     if(j_m1 > 3){
//         j_m1 = 0;
//     }
// }, 3000);

// radios_m1.forEach((radio, i)=>{
//     if(i == 0){
//         radio.onclick = ()=>{
//             slider_mini1.style.left = 0;
//             img_n2 = 0;
//             j_m1 = 0;
//         }
//     }else if(i == 1){
//         radio.onclick = ()=>{
//             slider_mini1.style.left = -100 + '%';
//             img_n2 = 100;
//             j_m1 = 1;
//         }
//     }else if(i == 2){
//         radio.onclick = ()=>{
//             slider_mini1.style.left = -200 + '%';
//             img_n2 = 200;
//             j_m1 = 2;
//         }
//     }else{
//         radio.onclick = ()=>{
//             slider_mini1.style.left = -300 + '%';
//             img_n2 = 300;
//             j_m1 = 3;
//         }
//     }
// })


// // Слайдер строительства домов

// const radios_m2 = document.querySelectorAll('.radio_m2');
// const slider_mini2 = document.querySelector('.slider_mini2');
// let img_n3 = 0;
// let j_m2 = 0;

// setInterval(() => {
//     radios_m2[j_m2].checked = 'true';
//     slider_mini2.style.left = -img_n3 + '%';
//     img_n3 += 100;
//     j_m2++;
//     if(img_n3 > 300){
//         img_n3 = 0;
//     }
//     if(j_m2 > 3){
//         j_m2 = 0;
//     }
// }, 3000);

// radios_m2.forEach((radio, i)=>{
//     if(i == 0){
//         radio.onclick = ()=>{
//             slider_mini2.style.left = 0;
//             img_n3 = 0;
//             j_m2 = 0;
//         }
//     }else if(i == 1){
//         radio.onclick = ()=>{
//             slider_mini2.style.left = -100 + '%';
//             img_n3 = 100;
//             j_m2 = 1;
//         }
//     }else if(i == 2){
//         radio.onclick = ()=>{
//             slider_mini2.style.left = -200 + '%';
//             img_n3 = 200;
//             j_m2 = 2;
//         }
//     }else{
//         radio.onclick = ()=>{
//             slider_mini2.style.left = -300 + '%';
//             img_n3 = 300;
//             j_m2 = 3;
//         }
//     }
// })


// // Слайдер производства

// const radios_m3 = document.querySelectorAll('.radio_m3');
// const slider_mini3 = document.querySelector('.slider_mini3');
// let img_n4 = 0;
// let j_m3 = 0;

// setInterval(() => {
//     radios_m3[j_m3].checked = 'true';
//     slider_mini3.style.left = -img_n4 + '%';
//     img_n4 += 100;
//     j_m3++;
//     if(img_n4 > 300){
//         img_n4 = 0;
//     }
//     if(j_m3 > 3){
//         j_m3 = 0;
//     }
// }, 3000);

// radios_m3.forEach((radio, i)=>{
//     if(i == 0){
//         radio.onclick = ()=>{
//             slider_mini3.style.left = 0;
//             img_n4 = 0;
//             j_m3 = 0;
//         }
//     }else if(i == 1){
//         radio.onclick = ()=>{
//             slider_mini3.style.left = -100 + '%';
//             img_n4 = 100;
//             j_m3 = 1;
//         }
//     }else if(i == 2){
//         radio.onclick = ()=>{
//             slider_mini3.style.left = -200 + '%';
//             img_n4 = 200;
//             j_m3 = 2;
//         }
//     }else{
//         radio.onclick = ()=>{
//             slider_mini3.style.left = -300 + '%';
//             img_n4 = 300;
//             j_m3 = 3;
//         }
//     }
// })

// Часы
// setInterval(()=>{
//     let hours = document.querySelector('.hours');
//     let min = document.querySelector('.min');
//     let sec = document.querySelector('.sec');
//     let date = new Date();
//     let hr = date.getHours() * 30;
//     let mn = date.getMinutes() * 6;
//     let sc = date.getSeconds() * 6;
//     hours.style.transform = `rotateZ(${(hr) + (mn / 12)}deg)`;
//     min.style.transform = `rotateZ(${mn}deg)`;
//     sec.style.transform = `rotateZ(${sc}deg)`;
// }, 1000);



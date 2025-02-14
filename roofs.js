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

        
}

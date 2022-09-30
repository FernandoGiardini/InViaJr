import React from "react";
import { NavigationBar } from "../components/navbar";
import { Footer } from "../components/footer";
import { useCountUp } from "react-countup";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import P1 from "../assets/mountains.jpg"; 
import P2 from "../assets/baloons.avif";
import P3 from "../assets/desert.jpg";
import P4 from "../assets/versailles.jpg";
import P5 from "../assets/snow.jpg";
import P6 from "../assets/strand-beach-cape-town.avif";
import P7 from "../assets/orient.jpg";

export function Home() {
    const SimpleHook1 = () => {
        useCountUp({ref: 'counter1', 
                    scrollSpyOnce: true,            
                    enableScrollSpy: true,
                    start:0,
                    end: 1298567,
                    duration:5
                });
        return <span id="counter1" />;
        };
    const SimpleHook2 = () => {
        useCountUp({ref: 'counter2',
                    scrollSpyOnce: true,
                    enableScrollSpy: true,
                    start:0,
                    end: 3741456,
                    duration:5
                });
        return <span id="counter2" />;
        };
    const SimpleHook3 = () => {
        useCountUp({ref: 'counter3',
                    scrollSpyOnce: true,
                    enableScrollSpy: true,
                    start:0,
                    end: 8839363,
                    duration:5,
                });
        return <span id="counter3" />;
        };
    return(
        <div className="home-bg" flex={1}>
            <NavigationBar/>
            <div className="section1">
            <Carousel className="home-carousel"
                autoPlay={true}
                infiniteLoop={true}
                dynamicHeight={true}
                interval={4500}
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
            >
                <div>
                    <img src={P1} alt="mountains" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={P2} alt="baloons"/>
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={P3} alt="stars"/>
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={P4} alt="stars"/>
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={P5} alt="stars"/>
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={P6} alt="stars"/>
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={P7} alt="stars"/>
                    <p className="legend"></p>
                </div>
            </Carousel>
                <div className="texto-home">
                    <header className="titulo-home">Porque o que você vive é o que fica com você!</header>
                    <p className="paragrafo-home">Realize seus sonhos conosco, marque já sua viagem!</p>
                </div>
            </div>
            <div className="section2">
                <div className="s2esq">
                    <header className="titulo-info">Porque viajar conosco?</header>
                </div>
                <div className="s2dir">
                    <p className="texto">A In Via Jr é uma <span className="destaque">Empresa Júnior de turismo</span>, fundada durante a época das grandes navegações. Atualmente parte do <span className="destaque">Núcleo da Mata</span>, temos orgulho em ser a primeira e única empresa júnior que cruzou os 7 mares vendendo açúcar, especiarias, tecidos e laranja, mas <span className="destaque">NUNCA</span> pessoas. Além disso, achamos o one piece (Nem adianta pedir, não vamos dar spoiler).</p>
                    <p className="texto">Pelo fato de sermos uma Empresa Júnior, estamos amparados pela lei 13.267 além de termos o suporte do professor orientador, o que nos deixa sendo o melhor tipo de empresa se tratando de custo e benefício no mercado.</p>
                </div>
            </div>
            <div className="section3">
                <div className="data-div">
                    <header className="dados-1">Kms percorridos</header>
                    <SimpleHook1/>
                    
                </div>
                <div className="data-div">
                    <header className="dados-2">Sorrisos exportados</header>
                    <SimpleHook2/>
                </div>
                <div className="data-div">
                    <header className="dados-3">Memórias criadas</header>
                    <SimpleHook3/>
                </div>
            </div>
            <div className="section4">
                <div className="s2esq">
                    <header className="titulo-info">Aperte os cintos!</header>
                </div>
                <div className="s2dir">
                    <form className="form">
                        <label >Nome</label>   
                        <input type="text" placeholder="Nome"/>
                        <label >E-mail</label>   
                        <input type="text" placeholder="E-mail"/>
                        <label >Telefone</label>   
                        <input type="text" placeholder="Telefone"/>
                        <input className="botao" type="button" value="Fale conosco!"/>
                    </form>
                </div>    
            </div>
            <Footer/>
        </div>
    )    
}
import Image from "next/image";
import FotoVitao from "../../../../public/assets/imagens/Captura de tela 2024-02-23 170110.png"
import FotoLucca from "../../../../public/assets/imagens/lucca2.jpg"
import "./footer.css"
import FotoKeven from "../../../../public/assets/imagens/WhatsApp Image 2024-05-23 at 11.01.37.jpeg"
import LogoFiap from "../../../../public/assets/imagens/LogoFiap.png"


const Footer = () =>{
    return (
        <>
            <footer className="container-footer">
                <h4 className="titulo-footer">Integrantes:</h4>
                <div className="imagem-foto-container">
                   
                    <div className="imagem-footer">
                        <Image className="foto-rm" src={FotoVitao} alt="foto" />
                        <div>
                            <p>Vitor Santos</p>
                            <p>RM553215</p>
                        </div>
                        
                    </div>
                    <div className="imagem-footer">
                        <Image className="foto-rm" src={FotoKeven} alt="foto" />
                        <div>
                            <p>Keven Ike</p>
                            <p>RM553215</p>
                        </div>
                        

                    </div>
                    <div className="imagem-footer">

                        <Image className="foto-rm" src={FotoLucca} alt="foto" />
                        <div>
                            <p>Lucca Matteoni</p>
                            <p>RM98146</p>
                        </div>
                    </div>

                </div>
                
                <Image src={LogoFiap} alt="Logo Fiap"/>

                <p>All rights reserved &copy; 2024</p>

            </footer>
        </>
    )
}

export default Footer;
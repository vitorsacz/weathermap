import LogoTempo from "../../../../public/assets/Logo/Tempo-removebg-preview.png"
import Image from "next/image";
import "./Header.css"

const Header = () => {
    return (
        <header className="cabecalho">
            <div className="container_cabecalho">
                <Image src={LogoTempo} alt="imagem-logo-previsão-do-tempo" height={250} ></Image>
            </div>
            <h2>Previsão do tempo</h2>
        </header>
    )
}
export default Header;
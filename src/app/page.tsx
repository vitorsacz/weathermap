"use client"
import { useState } from "react";
import "./principal.css"
import Image from "next/image";
import Lupa from "../../public/assets/imagens/loupe-white.svg"



const key: string = "cebcd482eda57fa9a6714c1c2ba91885";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    temp_max: number;
    temp_min: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  wind: Array<{
    speed: number;
  }>;
}


export default function Home() {

  const [cidade, setCidade] = useState<string>('');
  const [dados, setDados] = useState<WeatherData | null>(null);

  const buscarCidade = async (cidade: string): Promise<void> => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`);
      if (!response.ok) {
        throw new Error('Cidade não encontrada');
      }
      const data: WeatherData = await response.json();
      setDados(data);
    } catch (error) {
      console.error(error);
      alert('Erro ao buscar dados da cidade. Verifique o nome da cidade e tente novamente.');
    }
  };

  const cliqueiNoBotao = (): void => {
    if (cidade) {
      buscarCidade(cidade);
    }
  };



  return (
    <main className="principal">

      <section className="secao-principal" >

        <div className="busca-cidade">

          <h1>De qual cidade você quer ver a previsão hoje?</h1>

          <div className="barra-de-pesquisa">
            <div className="itens-pesquisa">
              <input className="barra-de-pesquisa-text"
                type="text"
                id="text"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                placeholder="EX: São Paulo"
              />
              <button className="barra-pesquisa-btn" onClick={cliqueiNoBotao}>
                <Image src={Lupa} alt="Icone-Lupa"></Image>
              </button>
            </div>  
          </div>
          {dados && (
            <div className="caixa-media">
              <h2 className="titulo-cidade">{dados.name}</h2>
              <div className="temp">
                <div>
                  <p >{Math.floor(dados.main.temp)} °C</p>
                  <p >{dados.weather.description}</p>
                  <br />
                  <p className="dados-temp ">Max: {Math.round(dados.main.temp_max)}°C</p>
                  <p className="dados-temp ">Min: {Math.round(dados.main.temp_min)}°C</p>
                  <p className="dados-temp ">Umidade: {dados.main.humidity}%</p>
                  <p className="dados-temp ">Vento: {dados.wind.speed} m/s</p>
                </div>
              </div>

              

            </div>
          )}
        </div>


      </section>
    </main>
  );
}

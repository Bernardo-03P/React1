import React from "react";
import Banner from '../components/Banner';
import Servico from "../components/Servico";
import BanhoTosa from "../imagens/BanhoTosa.jpg"
import Adestramento from "../imagens/Adestramento.jpg"
import VacinaCachorro from "../imagens/VacinaCachorro.jpg"
import HotelparaCachorros from "../imagens/HotelParaCachorros.jpg"
import BemVindo from "../components/BemVindo";
import Cliente from "../components/Cliente";
import Delivery from "../components/Delivery";


const Home = () => {
	return (
		<div>
		<Banner/>
		<section className="section d-flex py-5 px-5">
			<Servico imagemServico={BanhoTosa} tituloImagem="Banho e Tosa para Dogs" tituloServico="Banho e Tosa" />
		
			<Servico imagemServico={Adestramento} tituloImagem="Adestramento para Dogs" tituloServico="Adestramento" />
		
			<Servico imagemServico={VacinaCachorro} tituloImagem="Vacinação para Dogs" tituloServico="Vacina pra Cachorro" />
	
			<Servico imagemServico={HotelparaCachorros} tituloImagem="Hotel Para Dogs" tituloServico="Hotel para Cachorros" />
			</section>
			<BemVindo />

			<Cliente />
			<Delivery />
		</div>
		
	);
};

export default Home;
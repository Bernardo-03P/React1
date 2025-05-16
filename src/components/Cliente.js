import React from 'react'
import Rottweiller from '../imagens/Rottweiller.jpg'

function Cliente() {
  return (
    <div>
        <section lg="3" md='6' sm='12' className='Cliente'>
        
        <h1>Relação com o cliente</h1>
        <div className='rc'><p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos. O Lorem Ipsum tem sido a simulação de texto padrão da indústria tipográfica e de impressos desde o século XVI, quando um impressor desconhecido pegou uma galera de tipos e os embaralhou para criar um livro de espécimes de tipos. Ele sobreviveu não apenas a cinco séculos, mas também ao salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento das folhas Letraset contendo passagens do Lorem Ipsum e, mais recentemente, com softwares de editoração eletrônica como o Aldus PageMaker, incluindo versões do Lorem Ipsum.</p></div>
        <img className='ClienteRott' src={Rottweiller} alt='Relação com o Cliente'/>
        </section>
    </div>
  )
}

export default Cliente

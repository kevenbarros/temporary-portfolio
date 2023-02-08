import React from 'react';
import Button from '../Button/Button';
import "./Contact.css"
import KevenBarros from "./KevenBarros.pdf"
const Contact = () => {
    return (<div className='main contact' id='contact'>
        <h3>Gostou do que viu?</h3>
        <h1 className='contact-me'>Contate-me!</h1>

        <p className='little-desc' > Se você gostar de alguns dos meus projetos e habilidades, minha caixa de entrada está aberta para você, ficarei feliz em receber sua mensagem!</p>
        <div className='form-buttons'>
            <Button link="https://linkwhats.app/192e1d" typeTarget={true}>Diga olá</Button>
            <Button link={KevenBarros} downloadPDF={true}>Currículo</Button>
        </div>

    </div >);
}

export default Contact;

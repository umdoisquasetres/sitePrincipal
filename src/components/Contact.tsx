
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm('service_atubpne', 'template_gnu784l', form.current, 'RcKh7QKDyx67NiykZ')
                .then((result) => {
                    console.log('Client confirmation sent:', result.text);
                }, (error) => {
                    console.log('Error sending client confirmation:', error.text);
                });

            emailjs.sendForm('service_atubpne', 'template_ptpn6vf', form.current, 'RcKh7QKDyx67NiykZ')
                .then((result) => {
                    console.log('Message received by user:', result.text);
                    alert('Mensagem enviada com sucesso!');
                    form.current?.reset();
                }, (error) => {
                    console.log('Error sending message to user:', error.text);
                    alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
                });
        }
    };

    return (
        <section id="contact" className="contact-section fade-in-section">
            <div className="container">
                <h3 className="section-title">ENTRE EM CONTATO</h3>
                <div className="contact-wrapper">
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name="name" placeholder="Seu Nome" required />
                            <input type="email" name="email" placeholder="Seu E-mail" required />
                            <textarea name="message" placeholder="Sua Mensagem" rows={5} required></textarea>
                            <button type="submit" className="btn-outline">Enviar Mensagem</button>
                        </form>
                    </div>
                    <div className="contact-info">
                        <h4>Informações de Contato</h4>
                        <p><i className="fas fa-phone"></i> (11) 96948-6481</p>
                        <p><i className="fas fa-envelope"></i> matheus@mysolucoesindcombr.com</p>
                        <div className="social-media">
                            <a href="https://www.facebook.com/profile.php?id=61581325265733"><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/m.ysolucoes/"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

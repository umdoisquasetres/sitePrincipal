
import React from 'react';
import Section from './Section';
import Title from './Title';

const About: React.FC = () => {
    return (
        <Section id="about" className="about-section">
            <div className="about-content">
                <div className="about-text">
                    <Title level={3} className="section-title">SOBRE NÓS</Title>
                    <Title level={2}>Inovação e Experiência em Automação</Title>
                    <p>Com mais de uma década de experiência, a M.Y. Soluções é líder no fornecimento de soluções de automação industrial. Nossa equipe de especialistas é apaixonada por tecnologia e dedicada a entregar resultados que superam as expectativas.</p>
                    <p>Nossa missão é impulsionar a produtividade e a segurança dos nossos clientes através de sistemas de controle robustos e inteligentes.</p>
                </div>
                <div className="about-image">
                    <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" alt="Equipe da M.Y. Soluções em um escritório moderno, discutindo um projeto em um tablet." />
                </div>
            </div>
        </Section>
    );
};

export default About;

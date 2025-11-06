
import React from 'react';
import Section from './Section';
import Title from './Title';

const Services: React.FC = () => {
    return (
        <Section id="services" className="services-section">
            <div className="services-layout">
                <div className="services-title-column">
                    <Title level={2}>SOLUÇÕES</Title>
                </div>
                <div className="services-grid">
                    <div className="service-card">
                        <Title level={4}>Programação de PLC</Title>
                        <p>Desenvolvimento de lógicas de controle para os principais fabricantes de PLCs do mercado.</p>
                        <div className="card-decorator"></div>
                    </div>
                    <div className="service-card">
                        <Title level={4}>Sistemas SCADA</Title>
                        <p>Implementação de sistemas de supervisão e aquisição de dados para monitoramento em tempo real.</p>
                        <div className="card-decorator"></div>
                    </div>
                    <div className="service-card">
                        <Title level={4}>Integração de IHM</Title>
                        <p>Criação de interfaces homem-máquina intuitivas para facilitar a operação de equipamentos.</p>
                        <div className="card-decorator"></div>
                    </div>
                    <div className="service-card">
                        <Title level={4}>Redes Industriais</Title>
                        <p>Projetos e configuração de redes de comunicação para garantir a conectividade dos seus sistemas.</p>
                        <div className="card-decorator"></div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Services;

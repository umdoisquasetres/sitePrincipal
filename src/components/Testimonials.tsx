
import React from 'react';

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="testimonials-section fade-in-section" style={{ position: 'relative' }}>
            <div style={{ filter: 'blur(5px)', pointerEvents: 'none' }}>
                <div className="container">
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <p>"A M.Y. Soluções transformou nossa linha de produção. A eficiência aumentou em 30% e os erros diminuíram drasticamente."</p>
                            <div className="testimonial-author">
                                <h4>João Silva</h4>
                                <span>Gerente de Produção, Indústria ABC</span>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <p>"O profissionalismo e a expertise da equipe são admiráveis. O projeto foi entregue no prazo e superou nossas expectativas."</p>
                            <div className="testimonial-author">
                                <h4>Maria Oliveira</h4>
                                <span>Diretora de Operações, Metalúrgica XYZ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold',
                textAlign: 'center',
                zIndex: 10,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '20px',
                borderRadius: '10px'
            }}>
                Em manutenção
            </div>
        </section>
    );
};

export default Testimonials;

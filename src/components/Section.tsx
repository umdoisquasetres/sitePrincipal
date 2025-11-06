import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className, style, children }) => {
  return (
    <section id={id} className={`fade-in-section ${className || ''}`} style={style}>
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default Section;

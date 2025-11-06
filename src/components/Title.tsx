import React from 'react';

interface TitleProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ level, className, children }) => {
  const Tag = `h${level}`;
  return React.createElement(Tag, { className }, children);
};

export default Title;

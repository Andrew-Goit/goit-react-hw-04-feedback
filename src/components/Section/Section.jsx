import { ComponentSection, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <ComponentSection>
      <Title>{title}</Title>
      {children}
    </ComponentSection>
  );
};



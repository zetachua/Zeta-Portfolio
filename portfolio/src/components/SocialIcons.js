import React from 'react';
import styled from 'styled-components';


const IconImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const IconContainer = styled.div`
  display: flex;
  position:absolute;
  flex-direction: column;
  align-items: center;
  top:5%;
  left:5%;
  @media (max-width: 768px) {

    top:3%;
    left:8%;
    }
`;

const IconLink = styled.a`
  transition: color 0.3s ease;

  &:hover {
    color: #7BCEFF; /* Hover color */
  }
`;

export function SocialIcons() {
    const instagramIcon= process.env.PUBLIC_URL + "/instagramIcon.png"
    const linkedinIcon= process.env.PUBLIC_URL + "/linkedinIcon.png"
    const githubIcon= process.env.PUBLIC_URL + "/githubIcon.png"
    return (
    <IconContainer>
      <IconLink href="https://www.instagram.com/zetachua" target="_blank" rel="noopener noreferrer">
        <IconImage src={instagramIcon} alt="Instagram" />
      </IconLink>
      <IconLink href="https://www.linkedin.com/in/zeta-chua-0786101a9/" target="_blank" rel="noopener noreferrer">
        <IconImage src={linkedinIcon} alt="Linkedin" />
      </IconLink>
      <IconLink href="https://github.com/zetachua" target="_blank" rel="noopener noreferrer">
        <IconImage src={githubIcon} alt="Github" />
      </IconLink>
    </IconContainer>
  );
}

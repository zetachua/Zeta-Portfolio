import React from 'react';
import styled from 'styled-components';
const SvgButton = styled.button`
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%22135%22%20height%3D%2235%22%20viewBox%3D%220%200%20135%2035%22%20fill%3D%22none%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20filter%3D%22url(%23filter0_d_18_482)%22%3E%3Crect%20width%3D%22134%22%20height%3D%2234%22%20rx%3D%2217%22%20fill%3D%22%23DBC2F7%22/%3E%3Crect%20x%3D%220.4%22%20y%3D%220.4%22%20width%3D%22133.2%22%20height%3D%2233.2%22%20rx%3D%2216.6%22%20stroke%3D%22%23FEFEFE%22%20stroke-width%3D%220.8%22/%3E%3C/g%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_d_18_482%22%20x%3D%220%22%20y%3D%220%22%20width%3D%22135%22%20height%3D%2235%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22/%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22/%3E%3CfeOffset%20dx%3D%221%22%20dy%3D%221%22/%3E%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22/%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.858824%200%200%200%200%200.760784%200%200%200%200%200.968627%200%200%200%201%200%22/%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_18_482%22/%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_18_482%22%20result%3D%22shape%22/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 135px;
  height: 35px;
  border: none;
  cursor: pointer;
  position:absolute;
  top:10%;
  right:5%;
  display: flex;
  align-items: center;
  border-radius:20px;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }
`;

const ButtonText = styled.span`
  font-family: 'MadeTommyLight';
  font-size: 12px;
  color: #fff;
`;

export function DownloadButton() {
  const handleDownload = () => {
    // Link to the resume file
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + "/Resume.png"; // Replace with the actual path
    link.download = 'Zeta_Chua_Resume.pdf';
    link.click();
  };

  return (
    <SvgButton onClick={handleDownload}>
      <ButtonText>Frontend SE, UIUX</ButtonText>
    </SvgButton>
  );
}

import React, { useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import styled,{keyframes} from 'styled-components';

const bobbing = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-5px);
  }
`;


const AnimatedContainer = styled.div`
  height:100%;
  animation: ${bobbing} 5s ease-in-out 1s infinite;
`;
const SplineViewer = () => {
    const matches1210 = useMediaQuery('(max-width:1210px)');

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://unpkg.com/@splinetool/viewer@1.0.93/build/spline-viewer.js';
        script.async = true;
        document.body.appendChild(script);

        const hideLogoLink = () => {
            const splineContainers = document.querySelectorAll('spline-viewer');

            const hideLogo = () => {
                splineContainers.forEach(container => {
                    const logoLink = container.shadowRoot?.querySelector('a#logo');
                    if (logoLink) {
                        logoLink.style.display = 'none';
                    }
                });
            };
            
            splineContainers.forEach(container => {
                const containerTag = container.shadowRoot?.querySelector('div#container');
                const canvasSpline = container.shadowRoot?.querySelector('canvas#spline');
                if (containerTag) {
                    containerTag.style.display = 'flex';
                    containerTag.style.justifyContent = 'center';
                    containerTag.style.alignItems = 'center';
                }
                if (canvasSpline) {
                    canvasSpline.style.borderRadius = '20px';
                }
            });

            const intervalId = setInterval(hideLogo, 500);

            return () => clearInterval(intervalId);
        };

        script.onload = hideLogoLink;

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <AnimatedContainer>
            <div id="containers" style={{ display: 'flex', transform:matches1210?'scale(0.5)':'scale(0.6)',flexWrap: 'wrap', justifyContent: 'center',paddingTop:matches1210?'0rem':'6rem'}}>
                <spline-viewer url={"https://prod.spline.design/zcaVesmzqrSHDBND/scene.splinecode"}></spline-viewer>
            </div>
        </AnimatedContainer>
    );
};

export default SplineViewer;

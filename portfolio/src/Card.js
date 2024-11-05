import { CardBackground } from "./Card.style";
import { SocialIcons } from "./components/SocialIcons";
import SplineViewer from "./components/Spline";
import { AnimatedGlowButton } from "./components/GlowButton";
import { DownloadButton } from "./components/ResumeDownload";

export function Card({onClick}){
    return(
        <CardBackground>
            <AnimatedGlowButton onClick={onClick}  />
            <DownloadButton /> 
            <SocialIcons/>
            <SplineViewer></SplineViewer>
        </CardBackground>
    );
}
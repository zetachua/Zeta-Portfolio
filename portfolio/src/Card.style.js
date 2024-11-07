import styled,{keyframes} from "styled-components";


// Keyframe animations to mimic AnimXYZ effects
const fadeDownRotate = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px) rotate(0deg); /* Start down and without rotation */
  }
  100% {
    opacity: 1;
    transform: translateY(0px) rotate(0deg); /* Float back up slightly */
  }
`;

export const CardBackground = styled.div`
    background-color:#E9EAF4;
    width:1010px;
    height:620px;
    border-radius:100px;
    position:relative;
    animation: ${fadeDownRotate} 0.3s ease-out forwards; /* Apply the animation */
    transition: transform 0.3s ease;

  /* Tablet-specific background */
  @media (max-width: 1050px) {
    width:311px;
    height:505px;
    border-radius:60px;
    background-image: url("data:image/svg+xml,%3Csvg%20width%3D%22539%22%20height%3D%22868%22%20viewBox%3D%220%200%20539%20868%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M0%20100C0%2044.7715%2044.7715%200%20100%200H439C494.228%200%20539%2044.7715%20539%20100V768C539%20823.228%20494.228%20868%20439%20868H100C44.7715%20868%200%20823.228%200%20768V100Z%22%20fill%3D%22%23FEFEFE%22/%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M62%20174.252C34.3858%20174.252%2012%20196.638%2012%20224.252V756C12%20811.228%2056.7715%20856%20112%20856H427C482.229%20856%20527%20811.228%20527%20756V112C527%2056.7715%20482.229%2012%20427%2012H165C137.386%2012%20115%2034.3858%20115%2062V124.252C115%20151.867%2092.6142%20174.252%2065%20174.252H62Z%22%20fill%3D%22%23E9EAF4%22/%3E%3C/svg%3E");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`

// Child elements with delayed fade-in
export const ChildWrapper = styled.div`
  opacity: 0;
  position:relative;
  animation: fadeIn 0.6s ease-out 0.6s forwards; /* Starts after CardBackground finishes */

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
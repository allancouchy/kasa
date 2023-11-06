import { BannerWrapper } from "./style";

const Banner = ({ title, image }) => {
  return (
    <BannerWrapper>
      <h1>{title}</h1>
      <img src={image} alt="Bannière de la page" />
    </BannerWrapper>
  );
};

export default Banner;

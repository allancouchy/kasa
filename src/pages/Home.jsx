import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import BannerPage from "../assets/banner-home-page.jpg";

const Home = () => {
  const text = "Chez vous, partout et ailleurs";

  return (
    <main>
      <Banner picture={BannerPage} text={text} />
      <Gallery />
    </main>
  );
};

export default Home;

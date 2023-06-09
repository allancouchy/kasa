import { useParams } from "react-router-dom"; // importation du composant useParams
import { useEffect, useState } from "react";

import Carousel from "../components/Carousel";
import Tags from "../components/Tags";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Dropdown from "../components/DropdownHsg";
import Checklist from "../components/Checklist";

import housings from "../datas/housings.json";

const Housing = () => {
  const { id } = useParams(); // récupération de l'id du logement présent dans les paramètres de l'url

  const [housing, setHousing] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const housing = housings.find((item) => item.id === id); // vérifier si l'id de l'url et l'id du logement correspondent
    setHousing(housing);
    setIsLoaded(true); // si les id correspondent on peut charger la page
  }, [id]);

  if (isLoaded === true) {
    return (
      <main>
        <Carousel pictures={housing.pictures} />
        <section className="housing">
          <div className="housing__infos">
            <div className="housing__infos__bloc">
              <h1 className="housing__infos__title">{housing.title}</h1>
              <p className="housing__infos__location">{housing.location}</p>
              <Tags elements={housing.tags} />
            </div>
            <div className="housing__infos__bloc housing__infos__bloc--hsg">
              <Host host={housing.host} />
              <Rating score={housing.rating} />
            </div>
          </div>
          <div className="housing__dropdowns--hsg">
            <Dropdown title="Description" content={housing.description} />
            <Dropdown
              title="Equipements"
              content={<Checklist elements={housing.equipments} />}
            />
          </div>
        </section>
      </main>
    );
  }
};

export default Housing;

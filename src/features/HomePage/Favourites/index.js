import Section from "../../../common/Section";
import RobotTile from "../../../common/RobotTile";
import { useFavourites } from "../../useFavourites";

const Favourites = () => {
  const [favourites] = useFavourites();

  return (
    <Section title="Favourites">
        {favourites.map((object) => {
          return (
            <RobotTile
              key={object.id}
              id={object.id}
              picture={object.image}
              name={object.name}
              surname={object.surname}
              gender={object.gender}
              age={object.age}
            />
          );
        })}
    </Section>
  );
};

export default Favourites;

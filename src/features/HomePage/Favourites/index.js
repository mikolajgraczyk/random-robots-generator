import Section from "../../../common/Section";
import RobotTile from "../../../common/RobotTile";
import { Button } from "../../../common/Button/styled";
import { StyledFavouirtes } from "./styled";
import { useFavourites } from "../../useFavourites";

const Favourites = () => {
  const [favourites, setFavourites] = useFavourites();

  if (favourites.length > 0) {
    return (
      <StyledFavouirtes>
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
        <Button onClick={() => setFavourites([])}>Clear</Button>
      </StyledFavouirtes>
    );
  }
};

export default Favourites;

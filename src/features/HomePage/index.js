import Discover from "./Discover";
import Favourites from "./Favourites";
import { StyledHomepage } from "./styled";
import { useFavourites } from "../useFavourites";

const HomePage = ({ data, status }) => {
  const [favorites] = useFavourites();

  return (
    <StyledHomepage>
      <Discover data={data} status={status} />
      {favorites.length > 0 && <Favourites />}
    </StyledHomepage>
  );
};

export default HomePage;

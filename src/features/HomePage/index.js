import Discover from "./Discover";
import Favourites from "./Favourites";
import { StyledHomepage } from "./styled";

const HomePage = ({ data, status, refetch }) => {
  return (
    <StyledHomepage>
      <Discover data={data} status={status} refetch={refetch} />
      <Favourites />
    </StyledHomepage>
  );
};

export default HomePage;

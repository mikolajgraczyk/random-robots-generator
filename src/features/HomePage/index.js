import Discover from "./Discover";
import Favourites from "./Favourites";

const HomePage = ({ data, status }) => {
  return (
    <>
      <Discover data={data} status={status} />
      <Favourites />
    </>
  );
};

export default HomePage;

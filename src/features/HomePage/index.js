import Discover from "./Discover";

const HomePage = ({ data, status }) => {
  return (
    <>
      <Discover data={data} status={status} />
    </>
  );
};

export default HomePage;

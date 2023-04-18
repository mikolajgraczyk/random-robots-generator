import { useParams } from "react-router-dom";

const RobotPage = ({ data }) => {
  const { id } = useParams();

  if (data) {
    const robotData = data.find((object) => object.id == id);

    return <>{robotData.first_name}</>;
  }
};

export default RobotPage;

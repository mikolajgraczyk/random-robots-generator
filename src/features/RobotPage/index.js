import { useParams } from "react-router-dom";
import ProfileInformation from "./ProfileInformation";

const RobotPage = ({ data }) => {
  const { id } = useParams();

  if (data) {
    const robotData = data.find((object) => object.id == id);
    console.log(data);
    return (
      <ProfileInformation
        image={robotData.avatar}
        name={`${robotData.first_name} ${robotData.last_name}`}
        dateOfBirth={robotData.date_of_birth}
        gender={robotData.gender}
        email={robotData.email}
        adress={robotData.adress}
        phoneNumber={robotData.phone}
      />
    );
  }
};

export default RobotPage;

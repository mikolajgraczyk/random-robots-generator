import { useParams, Navigate } from "react-router-dom";
import ProfileInformation from "./ProfileInformation";

const RobotPage = ({ data }) => {
  const { id } = useParams();

  if (data) {
    const robotData = data.find((object) => object.id == id);
    console.log(robotData);
    if (robotData) {
      return (
        <ProfileInformation
          image={robotData.avatar}
          name={`${robotData.first_name} ${robotData.last_name}`}
          dateOfBirth={robotData.date_of_birth}
          gender={robotData.gender}
          email={robotData.email}
          address={robotData.address}
          phoneNumber={robotData.phone_number}
          employment={robotData.employment}
        />
      );
    }
    return <Navigate to="/home" />;
  }
};

export default RobotPage;

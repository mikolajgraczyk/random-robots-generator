import { useParams, Navigate } from "react-router-dom";
import ProfileInformation from "./ProfileInformation";
import { useFavourites } from "../useFavourites";

const RobotPage = ({ data }) => {
  const { id } = useParams();
  const [favourites] = useFavourites();

  if (data) {
    const robotData = data.find((object) => object.id == id);
    const favouriteRobotData = favourites.find((object) => object.id == id);

    if (robotData) {
      return (
        <ProfileInformation
          id={id}
          image={robotData.avatar}
          name={robotData.first_name}
          surname={robotData.last_name}
          dateOfBirth={robotData.date_of_birth}
          gender={robotData.gender}
          email={robotData.email}
          address={robotData.address}
          phoneNumber={robotData.phone_number}
          employment={robotData.employment}
        />
      );
    }

    if(favouriteRobotData){
      return (
        <ProfileInformation
          id={id}
          image={favouriteRobotData.image}
          name={favouriteRobotData.name}
          surname={favouriteRobotData.surname}
          dateOfBirth={favouriteRobotData.dateOfBirth}
          gender={favouriteRobotData.gender}
          email={favouriteRobotData.email}
          address={favouriteRobotData.address}
          phoneNumber={favouriteRobotData.phone_number}
          employment={favouriteRobotData.employment}
        />
      );
    }

    return <Navigate to="/home" />;
  }
};

export default RobotPage;

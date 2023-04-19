import { calculateAge } from "../../calculateAge";
import { StyledProfileInformation } from "./styled";
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
import { useFavourites } from "../../useFavourites";

const ProfileInformation = ({
  id,
  image,
  name,
  surname,
  dateOfBirth,
  gender,
  email,
  address,
  phoneNumber,
  employment,
}) => {
  const [favourites, setFavourites] = useFavourites();

  const age = calculateAge(dateOfBirth);

  const clickHandler = () => {
    setFavourites([
      {
        id,
        image,
        name,
        surname,
        dateOfBirth,
        gender,
        email,
        address,
        phoneNumber,
        employment,
      },
      ...favourites,
    ]);
  };

  return (
    <StyledProfileInformation>
      <TopSection
        image={image}
        name={name}
        surname={surname}
        dateOfBirth={dateOfBirth}
        gender={gender}
        age={age}
      />
      <BottomSection
        email={email}
        address={address}
        phoneNumber={phoneNumber}
        employment={employment}
      />
      <button onClick={clickHandler}>Add to favourites</button>
      <button onClick={() => console.log(favourites)}>Show favourites</button>
    </StyledProfileInformation>
  );
};

export default ProfileInformation;

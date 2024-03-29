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
  const isFavourite = favourites.some((object) => object.id == id);

  const clickHandler = () => {
    if (isFavourite) {
      setFavourites(favourites.filter((object) => object.id !== id));
      return;
    }

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
        age,
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
      <button onClick={clickHandler}>
        {isFavourite ? "Remove from favorites" : "Add to favourites"}
      </button>
    </StyledProfileInformation>
  );
};

export default ProfileInformation;

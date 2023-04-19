import { calculateAge } from "../../calculateAge";
import { StyledProfileInformation } from "./styled";
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";

const ProfileInformation = ({
  image,
  name,
  dateOfBirth,
  gender,
  email,
  address,
  phoneNumber,
  employment,
}) => {
  const age = calculateAge(dateOfBirth);

  return (
    <StyledProfileInformation>
      <TopSection
        image={image}
        name={name}
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
    </StyledProfileInformation>
  );
};

export default ProfileInformation;

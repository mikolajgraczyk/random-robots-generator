import { calculateAge } from "../../calculateAge";
import {
  StyledProfileInformation,
  TopSection,
  Info,
  BasicInfo,
  SpecificInfo,
  Gender,
  dateOfBirth,
  Name,
  Age,
  Picture,
} from "./styled";

const ProfileInformation = ({
  image,
  name,
  dateOfBirth,
  gender,
  email,
  adress,
  phoneNumber,
}) => {
  const age = calculateAge(dateOfBirth);

  return (
    <StyledProfileInformation>
      <TopSection>
        <Picture src={image} alt="" />
        <Info>
          <BasicInfo>
            <Name>{name}</Name>
            <Age>{age}</Age>
          </BasicInfo>
          <SpecificInfo>
            <Gender>{gender}</Gender>
            <dateOfBirth>{dateOfBirth}</dateOfBirth>
          </SpecificInfo>
        </Info>
      </TopSection>
    </StyledProfileInformation>
  );
};

export default ProfileInformation;

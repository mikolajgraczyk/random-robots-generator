import {
  StyledTopSection,
  Info,
  BasicInfo,
  SpecificInfo,
  Gender,
  DateOfBirth,
  Name,
  Age,
  Picture,
} from "./styled";

const TopSection = ({ image, name, surname, age, gender, dateOfBirth }) => {
  return (
    <StyledTopSection>
      <Picture src={image} alt="" />
      <Info>
        <BasicInfo>
          <Name>{name}</Name>
          <Name>{surname}</Name>
          <Age>{age}</Age>
        </BasicInfo>
        <SpecificInfo>
          <Gender>Gender: {gender}</Gender>
          <DateOfBirth>Date of birth: {dateOfBirth}</DateOfBirth>
        </SpecificInfo>
      </Info>
    </StyledTopSection>
  );
};

export default TopSection;

import {
  StyledBottomSection,
  AdressInfo,
  Country,
  City,
  Street,
  EmploymentInfo,
  Title,
  KeySkill,
  Email,
  PhoneNumber,
} from "./styled";

const BottomSection = ({ email, address, phoneNumber, employment }) => {
  return (
    <StyledBottomSection>
      <AdressInfo>
        <Country>
          {address.country}, {address.state}
        </Country>
        <City>City: {address.city}</City>
        <Street>Street: {address.street_name}</Street>
      </AdressInfo>
      <EmploymentInfo>
        <Title>Current profession: {employment.title}</Title>
        <KeySkill>Best skill: {employment.key_skill}</KeySkill>
        <Email>E-mail: {email}</Email>
        <PhoneNumber>Phone number: {phoneNumber}</PhoneNumber>
      </EmploymentInfo>
    </StyledBottomSection>
  );
};

export default BottomSection;

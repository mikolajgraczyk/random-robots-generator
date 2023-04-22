import {
  StyledBottomSection,
  AdressInfo,
  AdressInfoSection,
  EmploymentInfo,
  EmploymentInfoSection,
} from "./styled";

const BottomSection = ({ email, address, phoneNumber, employment }) => {
  return (
    <StyledBottomSection>
      <AdressInfo>
        <AdressInfoSection>
          <span>Country:</span>
          <span>
            {address.country}, {address.state}
          </span>
        </AdressInfoSection>
        <AdressInfoSection>
          <span>City:</span>
          <span>{address.city}</span>
        </AdressInfoSection>
        <AdressInfoSection>
          <span>Street:</span>
          <span>{address.street_name}</span>
        </AdressInfoSection>
      </AdressInfo>
      <EmploymentInfo>
        <EmploymentInfoSection>
          <span>Current profession:</span>
          <span>{employment.title}</span>
        </EmploymentInfoSection>
        <EmploymentInfoSection>
          <span>Best skill:</span>
          <span>{employment.key_skill}</span>
        </EmploymentInfoSection>
        <EmploymentInfoSection>
          <span>E-mail:</span>
          <span>{email}</span>
        </EmploymentInfoSection>
        <EmploymentInfoSection>
          <span>Phone number:</span>
          <span>{phoneNumber}</span>
        </EmploymentInfoSection>
      </EmploymentInfo>
    </StyledBottomSection>
  );
};

export default BottomSection;

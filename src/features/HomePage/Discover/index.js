import Section from "../../../common/Section";
import { List } from "../../../common/List";
import {
  StyledDiscover,
  Robot,
  Information,
  Picture,
  NameSection,
  Name,
  Surname,
  Gender,
  Age
} from "./styled";

const Discover = ({ data, status }) => {
  const calculateAge = (dateString) => {
    const birthDate = new Date(dateString);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  if (status === "loading") {
    return <Section title="Discover">ładowanie</Section>;
  }

  if (data) {

    return (
      <StyledDiscover>
        <Section title="Discover">
          <List>
            {data.map((object) => {
              const dateOfBirth = object.date_of_birth;
              const age = calculateAge(dateOfBirth);

              return (
                <Robot key={object.id} to={`/robot/${object.id}`}>
                  <Picture src={object.avatar} alt="" />
                  <Information>
                    <NameSection>
                      <Name>{object.first_name} </Name>
                      <Surname>{object.last_name}</Surname>
                    </NameSection>
                    <Gender>{object.gender}</Gender>
                    <Age>{age}</Age>
                  </Information>
                </Robot>
              );
            })}
          </List>
        </Section>
      </StyledDiscover>
    );
  }
};

export default Discover;

import Section from "../../../common/Section";
import { List } from "../../../common/List";
import { calculateAge } from "../../calculateAge";
import {
  StyledDiscover,
  Robot,
  Information,
  Picture,
  NameSection,
  Name,
  Surname,
  Gender,
  Age,
} from "./styled";

const Discover = ({ data, status }) => {
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

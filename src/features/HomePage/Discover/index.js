import Section from "../../../common/Section";
import { List } from "../../../common/List";
import { StyledDiscover, Robot, NameSection } from "./styled";

const Discover = ({ data, status }) => {
  if (status === "loading") {
    return <Section title="Discover">ładowanie</Section>;
  }

  if (data) {
    console.log(data);
    return (
      <StyledDiscover>
        <Section title="Discover">
          <List>
            {data.map((object) => {
              return (
                <Robot key={object.id}>
                  <NameSection>
                    <span>{object.first_name} </span>
                    <span>{object.last_name}</span>
                  </NameSection>
                  <span>{object.gender}</span>
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

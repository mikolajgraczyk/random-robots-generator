import Section from "../../../common/Section";
import { StyledDiscover, List, LoadingCircle } from "./styled";
import { calculateAge } from "../../calculateAge";
import RobotTile from "../../../common/RobotTile";
import { Button } from "../../../common/Button/styled";

const Discover = ({ data, status, refetch }) => {
  if (status === "loading") {
    return(
      <Section title="Discover">
        <LoadingCircle />
      </Section>
    );
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
                <RobotTile
                  id={object.id}
                  key={object.id}
                  picture={object.avatar}
                  name={object.first_name}
                  surname={object.last_name}
                  gender={object.gender}
                  age={age}
                />
              );
            })}
          </List>
        </Section>
        <Button onClick={() => refetch()}>Refresh</Button>
      </StyledDiscover>
    );
  }
};

export default Discover;

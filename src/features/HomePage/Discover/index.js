import Section from "../../../common/Section";
import { List } from "../../../common/List";
import { calculateAge } from "../../calculateAge";
import RobotTile from "../../../common/RobotTile";

const Discover = ({ data, status }) => {
  if (status === "loading") {
    return <Section title="Discover">ładowanie</Section>;
  }

  if (data) {
    return (
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
    );
  }
};

export default Discover;

import {
  Robot,
  Information,
  Picture,
  NameSection,
  Name,
  Surname,
  Gender,
  Age,
} from "./styled";

const RobotTile = ({ id, picture, name, surname, gender, age }) => {
  return (
    <Robot to={`/robot/${id}`}>
      <Picture src={picture} alt="" />
      <Information>
        <NameSection>
          <Name>{name} </Name>
          <Surname>{surname}</Surname>
        </NameSection>
        <Gender>Gender: {gender} </Gender>
        <Age>Age: {age}</Age>
      </Information>
    </Robot>
  );
};

export default RobotTile;

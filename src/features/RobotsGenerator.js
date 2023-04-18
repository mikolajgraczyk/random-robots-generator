import HomePage from "./HomePage";
import { Container } from "./styled";
import { getData } from "./getData";
import { useQuery } from "@tanstack/react-query";

function RobotsGenerator() {
  const { status, data } = useQuery(["data"], getData);

  return (
    <Container>
      <HomePage data={data} status={status} />
    </Container>
  );
}

export default RobotsGenerator;

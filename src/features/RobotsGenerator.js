import HomePage from "./HomePage";
import RobotPage from "./RobotPage";
import { Container } from "./styled";
import { getData } from "./getData";
import { useQuery } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";

function RobotsGenerator() {
  const { status, data, refetch } = useQuery(["data"], getData);

  return (
    <Container>
      <Routes>
        <Route
          path="/home"
          element={<HomePage data={data} status={status} refetch={refetch}/>}
        />
        <Route path="/robot/:id" element={<RobotPage data={data} />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Container>
  );
}

export default RobotsGenerator;

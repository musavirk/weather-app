import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";

const Index = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f06cefb176c9dcfdd72eed3f30449200`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
  return (
    <Container className="main centered-div">
      <Row>
        <div className="search mt-3">
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter your location"
          />
        </div>
      </Row>
      <Row>
        <Col className="location">
          <p>{data.name}</p>
        </Col>
      </Row>
      <Row>
        <Col className="temp">
          <h1>{data.main.temp}°F</h1>
        </Col>
      </Row>
      <Row>
        <Col className="feels">{data.main.feels_like}°F</Col>
      </Row>
      <Row>
        <Col className="description">{/* <p>{data.weather}</p> */}</Col>
      </Row>
      <Row>
        <Col className="humidity">
          <p>77</p>
        </Col>
      </Row>
      <Row>
        <Col className="wind">
          <p>Speed</p>{" "}
        </Col>
      </Row>
      <Row>
        <Col className="rain">
          <p>5.31</p>
        </Col>
      </Row>
    </Container>
  );
};
export default Index;

//const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f06cefb176c9dcfdd72eed3f30449200`

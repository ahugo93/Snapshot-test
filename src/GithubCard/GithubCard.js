import React from "react"
import Card from "react-bootstrap/Card"
import  image  from "./image.jpeg";

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "500px"}}>
        <Card.Img variant="top" src={image} style={{height:"500px"}} />
        <Card.Body>
            <Card.Title>A. Hugo</Card.Title>
            <Card.Text>
            Full blown dog dad in the day time, Pokemon master by night.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard
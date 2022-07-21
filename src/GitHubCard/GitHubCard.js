import React from "react"
import Card from "react-bootstrap/Card"
import chihuaha from './chihuaha.png'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
       <h2>
           Brycedtea
       </h2>
        <Card.Img variant="top" src={chihuaha} />
        <Card.Body>
            <Card.Title>brycedtea</Card.Title>
            <Card.Text>
            brycedtea's github
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard
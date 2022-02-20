import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Navigation from "./Navigation";
import img from "../img/wood.png";

const Dashboard = () => {
  const [journalTitle, setJournalTitle] = useState("");
  const [journalTimeStamp, setJournalTimeStamp] = useState("");
    useEffect(() => {
      const getJournalInfo = async () => {
        const res = await fetchJournal();
        setJournalTitle(res.title);
          setJournalTimeStamp(res.text);
      };
      getJournalInfo();
    }, []);

    const fetchJournal = async () => {
      const res = await fetch(
        "http://localhost:1234/journals",
        {
          method: "GET",
          credentials: "include"
        }
      );
      const data = await res.json();
      console.log(data);
      return data;
    };

  require("../css/Dashboard.css");
  return (  
    <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh' }}>
      <Navigation />
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>
              Title
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Timestamp</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              Title
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Timestamp</small>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default Dashboard;
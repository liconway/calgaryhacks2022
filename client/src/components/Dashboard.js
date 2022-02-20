import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Navigation from "./Navigation";
import img from "../img/wood.png";
import { Link } from 'react-router-dom';


const Dashboard = () => {
  const [journals, setJournals] = useState({
   "journals": []
   });

   useEffect(() => {
     const getJournalInfo = async () => {
       const res = await fetchJournal();
       setJournals(res);
     };
     getJournalInfo();
   }, []);

   const fetchJournal = async () => {
     const res = await fetch(
       `${process.env.REACT_APP_API_URL}/journals`,
       {
         method: "GET",
         credentials: "include"
       }
     );
     const data = await res.json();
     return data;
   };

  const listJournals = journals['journals'].map(journal => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{journal.title}</Card.Title>
          <Card.Text>{journal.content}</Card.Text>
          <Link to={`/journal/${journal._id}`}>
            <button className="btn btn-primary">View Journal</button>
          </Link>
        </Card.Body>
      </Card>
    );
  });

  
  require("../css/Dashboard.css");
  return (  
    <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh' }}>
      <Navigation />
      <Container>
         {listJournals}
      </Container>
    </div>
  );
};

export default Dashboard;

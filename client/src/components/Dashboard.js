import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Navigation from "./Navigation";

const Dashboard = () => {
//   const [journalTitle, setJournalTitle] = useState("");
//   const [journalContent, setJournalContent] = useState("");
//   const [positiveSuggestions, setPositiveSuggestions] = useState("");
//   const [negativeSuggestions, setNegativeSuggestions] = useState("");

//     useEffect(() => {
//       const getJournalInfo = async () => {
//         const res = await fetchJournal();
//         setJournalTitle(res.title);
//           setJournalContent(res.text);
//           setPositiveSuggestions(res.positive);
//           setNegativeSuggestions(res.negative);

//       };
//       getJournalInfo();
//     }, []);

//     const fetchJournal = async () => {
//         console.log(journalID);
//       const res = await fetch(
//         "http://localhost:1234/journal?id=6211cf1c9706cc89e451a0c2",
//         {
//           method: "GET",
//           credentials: "include",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const data = await res.json();
//       console.log(data);
//       return data;
//     };

  require("../css/Dashboard.css");
  return (  
    <div>
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

import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Navigation from './Navigation';
import img from '../img/wood.png';

const Details = (journalID) => {
  const [journalTitle, setJournalTitle] = useState("");
  const [journalContent, setJournalContent] = useState("");
  const [positiveSuggestions, setPositiveSuggestions] = useState("");
  const [negativeSuggestions, setNegativeSuggestions] = useState("");

    useEffect(() => {
      const getJournalInfo = async () => {
        const res = await fetchJournal();
        if (res != null) {
            setJournalTitle(res.title);
            setJournalContent(res.text);
            setPositiveSuggestions(res.sentences);
            setNegativeSuggestions(res.sentences);
        }


      };
      getJournalInfo();
    }, []);
    

    const fetchJournal = async () => {
        console.log(journalID);
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/journal?id=6211fef0860a8748df2ab7a4`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status == 200) {
        const data = await res.json();
        console.log(data);
        return data;
      } else {
          return null;
      }
      
    };

  require("../css/Details.css");
  return (
    <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh' }}>
    <Navigation />
    <div class="d-flex justify-content-center main-div">
      <Container>
        <h1>{journalTitle}</h1>
        <p>journalContent</p>
      </Container>

      <Container fluid>
        <Card>
          <Card.Body>
            <Card.Text>
            dfgdfgdfg
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </Container>
    </div>
    </div>
  );
};

export default Details;

import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";

const Details = (journalID) => {
  const [journalTitle, setJournalTitle] = useState("");
  const [journalContent, setJournalContent] = useState("");
  const [positiveSuggestions, setPositiveSuggestions] = useState("");
  const [negativeSuggestions, setNegativeSuggestions] = useState("");

    useEffect(() => {
      const getJournalInfo = async () => {
        const res = await fetchJournal();
        setJournalTitle(res.title);
          setJournalContent(res.text);
          setPositiveSuggestions(res.positive);
          setNegativeSuggestions(res.negative);

      };
      getJournalInfo();
    }, []);

    const fetchJournal = async () => {
        console.log(journalID);
      const res = await fetch(
        "http://localhost:1234/journal?id=6211cf1c9706cc89e451a0c2",
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log(data);
      return data;
    };

  require("../css/Details.css");
  return (
    <div class="d-flex justify-content-center main-div">
      <Container>
        <h1>Journal</h1>
      </Container>

      <Container fluid>
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
  );
};

export default Details;

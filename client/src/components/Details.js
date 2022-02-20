import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Navigation from "./Navigation";
import img from "../img/wood.png";
import { useParams } from "react-router-dom";

const Details = () => {
  const { journalID } = useParams();
  const [journal, setJournal] = useState({
    text: "",
    sentiment: {
      score: 0,
      magnitude: 0,
    },
    entities: [],
    sentences: {
      positive: [],
      negative: [],
    },
  });

  require("../css/Details.css");

  useEffect(() => {
    const getJournalInfo = async () => {
      const res = await fetchJournal();
      if (res != null) {
        let text = res.text;
        let result = text.replace(/\u0001/g, "\n");
        res.text = result;
        console.log(res.text);
        setJournal(res);
      }
    };
    getJournalInfo();
  }, []);

  const fetchJournal = async () => {
    console.log(journalID);
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/journal?id=${journalID}`,
      {
        method: "GET",
        credentials: "include",
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

  //split the text into sentences, each stored into a span
  function splitByPeriod(text) {
    let sentences = text.split(/([.?!])/);
    sentences = Array.from(
      { length: Math.ceil(sentences.length / 2) },
      (_, i) =>
        sentences[2 * i] +
        (2 * i + 1 < sentences.length ? sentences[2 * i + 1] : "")
    );
    return sentences.map((sentence) => {
      return findText(sentence);
      //return <span>{sentence}</span>;
    });
  }

  function findText(text) {
    //check if the text is in the positive or negative array
    let positive = journal.sentences.positive
      .map((sentence) => {
        return sentence.text;
      })
      .includes(text.trim());
    let negative = journal.sentences.negative
      .map((sentence) => {
        return sentence.text;
      })
      .includes(text.trim());

    if (positive) {
      return <span style={{ color: "green" }}>{text}</span>;
    } else if (negative) {
      return <span style={{ color: "red" }}>{text}</span>;
    } else {
      return <span>{text}</span>;
    }
  }

  function convertUTC(unixTimeStamp) {
    var a = new Date(unixTimeStamp * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time =
      date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    return time;
  }

  const listPositives = journal.sentences.positive.map((sentence) => {
    return (
      <div onClick={() => handleClick(sentence.text)}>
        <Card className="sentence-cards" style={{ backgroundColor: "green", color: "white" }}>
          <Card.Body>
            <Card.Text>
              <p>{sentence.text}</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
      </div>
    );
  });

  const handleClick = (sentence) => {
    console.log(sentence);
  };

  const listNegative = journal.sentences.negative.map((sentence) => {
    return (
      <div onClick={() => handleClick(sentence.text)}>
        <Card className="sentence-cards" style={{ backgroundColor: "red", color: "white" }}>
          <Card.Body>
            <Card.Text>
              <p>{sentence.text}</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <Navigation />
      <div
        class="d-flex justify-content-center main-div"
        style={{ whiteSpace: "pre-wrap" }}
      >
        <Container className="bodyContainer">
          <h1 style={{ marginBottom: "5%" }}>{journal.title}</h1>
          <h5 style={{ marginBottom: "5%" }}>{convertUTC(journal.time_created)}</h5>
          <p>{splitByPeriod(journal.text)}</p>
        </Container>

        <Container className="sentences">
          {listPositives}
          {listNegative}
        </Container>
      </div>
    </div>
  );
};

export default Details;

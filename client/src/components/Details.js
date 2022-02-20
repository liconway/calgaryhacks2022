import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Navigation from './Navigation';
import img from '../img/wood.png';
import { useParams } from "react-router-dom";


const Details = () => {
  const {journalID} = useParams();
  const [journal, setJournal] = useState({
    text: "",
    sentiment: {
      score: 0,
      magnitude: 0
    },
    entities: [],
    sentences: {
      positive: [],
      negative: []
    }
  });

  require("../css/Details.css");

    useEffect(() => {
      const getJournalInfo = async () => {
        const res = await fetchJournal();
        if (res != null) {
          let text = res.text;
          let result = text.replace(/\u0001/g, '\n');
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

    function getHighlightedText( highlight) {
      // Split on highlight term and include term into parts, gnore case
      const text = journal.text;
      const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
      return <span> { parts.map((part, i) => 
          <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? { fontWeight: 'bold', color: 'red', backgroundColor: 'blue' } : {} }>
            {part}
          </span>)
      } </span>;
  }

  //split the text into sentences, each stored into a span
  function splitByPeriod (text) {
    let sentences = text.split(/[.?!]/);
    return sentences.map((sentence, i) => {
      //return sentences.length > 0 ? <span key={i}>{sentence + '.'}</span> : <span key={i}>{sentence}</span> ;
      return <span key={i}>{sentence + '.'}</span>;
    });
  }
 

    const listPositives = journal.sentences.positive.map(sentence => {
    return (
      <div onClick={() => handleClick(sentence.text)}>
      <Card hoverable style={{backgroundColor:"green", color:"white"}}>
      <Card.Body>
        <Card.Text>
          <p>
          {sentence.text}
          </p>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      </Card.Footer>
      </Card>
      </div>
    );
  });
  
  const handleClick = (sentence) => {
    
    console.log(sentence);
  }

  const listNegative = journal.sentences.negative.map(sentence => {
    return (
      <div onClick={() => handleClick(sentence.text)}>
      <Card hoverable style={{backgroundColor:"red", color:"white"}}>
      <Card.Body>
        <Card.Text>
          <p>
          {sentence.text}
          </p>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      </Card.Footer>
      </Card>
      </div>
    );
  });


  return (
    <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh' }}>
    <Navigation />
    <div class="d-flex justify-content-center main-div" style={{whiteSpace: "pre-wrap"}}>
      <Container className="bodyContainer">
        <h1>{journal.title}</h1>
        <p>{splitByPeriod(journal.text)}</p>
      </Container>

      <Container className="sentences">
        {listPositives}
        {listNegative}
        </Container>
        {/* <Card>
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
        </Card> */}
      
    </div>
    </div>
  );
};

export default Details;

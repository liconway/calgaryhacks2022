import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Navigation from "./Navigation";
import img from "../img/wood.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  require("../css/Dashboard.css");

  const [journals, setJournals] = useState({
    journals: [],
  });

  useEffect(() => {
    const getJournalInfo = async () => {
      const res = await fetchJournal();
      setJournals(res);
    };
    getJournalInfo();
  }, []);

  const fetchJournal = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/journals`, {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
    return data;
  };

  const listJournals = journals["journals"].map((journal) => {
    return (
      <Card className="card-element" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{journal.title}</Card.Title>
          <Card.Text>{journal.content}</Card.Text>
          <Link to={`/details/${journal._id}`}>
            <button className="btn btn-primary">View Journal</button>
          </Link>
          <Card.Footer>
            <small className="text-muted">{convertUTC(journal.time_created)}</small>
          </Card.Footer>
        </Card.Body>
      </Card>
    );
  });

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

  return (
    <div className="main-dashboard">
      <Navigation />
      <h1 className="title">Welcome to your Journable</h1>
      <Container className="container-box">{listJournals}</Container>
    </div>
  );
};

export default Dashboard;

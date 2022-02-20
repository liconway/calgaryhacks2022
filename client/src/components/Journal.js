import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Modal from "react-bootstrap/Modal";
import Card from 'react-bootstrap/Card'

import Navigation from './Navigation';
import img from '../img/wood.png';

const Journal = () => {
  const [titleState, setTitleState] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [journalID, setJournalID] = useState("");
  const [show, setShow] = useState(false);
  const [promptList, setPromptList] = useState([
    {},
    {},
    {}
  ])

  const promptTypeList = [
    "generic",
    "entity",
    "sentence"
  ]

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchPrompt = async () => {
    const promptType = promptTypeList[Math.floor(Math.random() * 3)]
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/prompt?prompt=${promptType}`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    if (res.status === 200) {
      var data = await res.json();
      data = data['promptType'] = promptType
      return data;
    } else {
        return null;
    }
  };

  const showPrompts = promptList.map(prompt => {
    const currPrompt = fetchPrompt()
    if (currPrompt.promptType !== "generic")
      return (
        <Card border="primary" style={{ width: '18rem' }}>
          <Card.Header>{currPrompt.promptType}</Card.Header>
          <Card.Body>
            <Card.Title>{currPrompt.name}</Card.Title>
            <Card.Text>{currPrompt.pre_text}</Card.Text>
          </Card.Body>
        </Card>
      );
    else
      return (
        <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>{currPrompt.promptType}</Card.Header>
        <Card.Body>
          <Card.Text>{currPrompt.pre_text}</Card.Text>
        </Card.Body>
        </Card>
      )
  })

  const handleSave = async (event) => {
    event.preventDefault();

    var title = titleState;
    var content = editorState.getCurrentContent().getPlainText("\u0001");
    var journal = {
      title: title,
      text: content,
    };
    console.log(journal);

    const res = await fetch(`${process.env.REACT_APP_API_URL}/journal`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(journal),
    });
    const data = await res.text();

    console.log(data);
    
    //return once saved
    setJournalID(data);

    window.location.href = '#/details/' + data;
  }

  function validateText() {
    console.log(editorState.getCurrentContent.length);
    console.log(titleState.length);
    if (editorState.getCurrentContent.length > 0 && titleState.length > 0) {
      return true;
    }
    return false;
  }

  require("../css/Journal.css");
  return (
    <div>
    <Navigation />
    <div
      class="container"
      style={{ width: 800, height: 800, backgroundColor: "white" }}
    >
      <Form>
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Title goes here"
            // value={titleState}
            onChange={(e) => setTitleState(e.target.value)}
            style={{ border: "1px solid black" }}
          ></input>
        </div>
        <div
          style={{
            border: "1px solid black",
            padding: "2px",
            minHeight: "580px",
          }}
        >
          <Editor
            value={editorState.getCurrentContent}
            onEditorStateChange={setEditorState}
          />
        </div>

          <Button variant="primary" onClick={handleShow}>
            Save Journal
          </Button>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Save Journal</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you want to save your journal?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={handleSave}
              disabled={!validateText}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </div>
      <div class="entity-group">
        {showPrompts}
      </div>
    </div>
  );
};

export default Journal;

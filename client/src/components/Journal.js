import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Modal from "react-bootstrap/Modal";

const Journal = () => {
  const [titleState, setTitleState] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // useEffect(() => {
  //   const getJournal = async () => {
  //     const res = await fetchJournal();
  //     setTitleState(res);
  //     setEditorState(res);
  //   };
  //   getJournal();
  // }, []);

  // const fetchJournal = async () => {
  //   const res = await fetch(
  //     "https://ch22-api.herokuapp.com/dewit?user=userid123",
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   // const data = await res.json();
  //   const data = await res.text();
  //   return data;
  // };

  const saveJournal = async (journal) => {
    const res = await fetch("https://ch22-api.herokuapp.com/note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(journal),
    });
    const data = await res.text();

    return data;
  };

  function handleSave(event) {
    var title = titleState;
    var content = editorState.getCurrentContent().getPlainText("\u0001");

    var journal = {
      userid: "userid321",
      title: title,
      text: content,
    };
    console.log(journal);
    event.preventDefault();
    saveJournal(journal);

    console.log("Redirecting to details");

    //redirect to Details page
    window.location.href = "/details";
  }

  function validateText() {
    console.log(editorState.getCurrentContent.length);
    console.log(titleState.length);
    if (editorState.getCurrentContent.length > 0 && titleState.length > 0) {
      return true;
    }
    return false;
  }

  return (
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
            <Button variant="primary" onClick={handleSave} disabled={!validateText}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </div>
  );
};

export default Journal;
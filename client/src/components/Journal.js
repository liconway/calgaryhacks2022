import React, { useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Modal from "react-bootstrap/Modal";
import Navigation from "./Navigation";
import Prompt from "./Prompt";

const Journal = () => {
  require("../css/Journal.css");

  const [titleState, setTitleState] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [show, setShow] = useState(false);

  const promptTypeList = ["generic", "entity", "sentence"];

  const createPrompts = promptTypeList.map((promptType) => {
    return <Prompt promptType={promptType} />;
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

    window.location.href = "#/details/" + data;
  };

  function validateText() {
    console.log(editorState.getCurrentContent.length);
    console.log(titleState.length);
    if (editorState.getCurrentContent.length > 0 && titleState.length > 0) {
      return true;
    }
    return false;
  }

  return (
    <div>
      <Navigation />
      <div
        className="editor"
        style={{ width: 800, height: "100%", backgroundColor: "white" }}
      >
        <Form style={{"width":"90%", "marginLeft":"5%"}}>
          <div class="form-group">
            <label for="title" style={{ fontWeight: "bold", fontSize: "25px" }}>
              Title
            </label>
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
      <div class="entity-group">{createPrompts}</div>
    </div>
  );
};

export default Journal;

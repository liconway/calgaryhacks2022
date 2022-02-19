import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Journal = () => {
  const [titleState, setTitleState] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    const getJournal = async () => {
      const res = await fetchJournal();
      setTitleState(res);
      setEditorState(res);
    };
    getJournal();
  }, []);

  const fetchJournal = async () => {
    const res = await fetch(
      "https://ch22-api.herokuapp.com/dewit?user=userid123",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // const data = await res.json();
    const data = await res.text();
    return data;
  };

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
        <Button type="submit" class="btn btn-primary" onClick={handleSave}>
          Save Journal
        </Button>
      </Form>
    </div>
  );
};

export default Journal;

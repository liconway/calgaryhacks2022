import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Editors from "./Editor";

const Journal = () => {
    
    function handleSubmit(event) {
        event.preventDefault();
    }
    
  
    return (
        <div class="container" style={{width:800, height:800, backgroundColor: 'white'}}>
            <Form>
        <div class="form-group">
            <label for="exampleFormControlInput1">Title</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Title goes here"></input>
        </div>
        <Editors />
        <Button type="submit" class="btn btn-primary" onClick={handleSubmit}>Save Journal</Button>
        </Form>
        </div>
    );
}


export default Journal;
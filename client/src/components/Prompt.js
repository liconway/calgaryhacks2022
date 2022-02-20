import React, { useState, useEffect } from "react";

import Card from 'react-bootstrap/Card'
import RefreshIcon from '@mui/icons-material/Refresh';

const Prompt = (props) => {
    const promptType = props.promptType;
    const [prompt, setPrompt] = useState("");

    useEffect(() => {
        getPrompt();
    }, []);

    const getPrompt = async () => {
        const res = await fetchPrompt();
        console.log(res);
        setPrompt(res);
    };

    const fetchPrompt = async () => {
        const res = await fetch(
            `${process.env.REACT_APP_API_URL}/prompt?prompt=${promptType}`, {
            method: "GET",
            credentials: "include",
        }
        );

        return await res.json();
    };

    function getPreText() {
        if (prompt.pre_text !== undefined) {
            return <Card.Text>{prompt.pre_text}</Card.Text>;
        }
        return null;
    }

    return (
        <Card border="primary" style={{ width: '18rem', textAlign: 'center' }}>
            <Card.Body>
                {getPreText()}
                <Card.Text>{prompt.text}</Card.Text>
                <Card.Text>{prompt.name}</Card.Text>
            </Card.Body>
            <RefreshIcon onClick={getPrompt} ></RefreshIcon>
        </Card>
    );

}

export default Prompt;

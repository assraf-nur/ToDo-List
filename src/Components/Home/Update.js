import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const Update = () => {

    const {id} = useParams();
    const [text, setText] = useState({});

    useEffect(() =>{
        fetch(`http://localhost:5000/list/${id}`)
        .then(res => res.json())
        .then(data => {
            setText(data);
        }
        );
    },[])
    

    return (
        <div>
            <h2>Hello</h2>
        </div>
    );
};

export default Update;
import React, { useEffect, useState } from 'react';

const TodoList = () => {

    const [list, setList] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/list')
            .then(res => res.json())
            .then(data => {
                setList(data);
            }
            );
    }, []);

    return (
        <div>
            <h2>{list.length}</h2>
        </div>
    );
};

export default TodoList;
import React, { useEffect, useState } from 'react';

const Home = () => {

    const handleAddTodo = (e) => {
        e.preventDefault();

        const text = e.target.text.value;
        if(text.length === 0) {
            alert('please enter text');
            return;
        }

        const todo = {
            text,
        }

        fetch('http://localhost:5000/list', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        e.target.reset();
        window.location.reload();
    });


};

    return (
        <div>
            <h2 className='text-center text-5xl font-semibold mt-12'>ToDo List</h2>
            <form onSubmit={handleAddTodo} className='text-center mt-12'>
              <textarea name='text' class="textarea textarea-bordered w-96" placeholder="Enter your task here"></textarea>
              <br/>
              <input className='btn btn-sm mt-5 px-5' type="submit" name="submit" value="Add"/>
            </form>
        </div>
    );
};

export default Home;
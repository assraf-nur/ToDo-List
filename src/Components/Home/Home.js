import React from 'react';

const Home = () => {

    const handleAddTodo = (e) => {
        e.preventDefault();

        const text = e.target.text.value;

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
    });


};

    return (
        <div>
            <h2 className='text-center text-5xl font-semibold mt-12'>ToDo List</h2>
            <form onSubmit={handleAddTodo} className='text-center mt-12'>
              <textarea name='text' class="textarea textarea-bordered" placeholder="Bio"></textarea>
              <br/>
              <input className='btn btn-sm mt-5' type="submit" name="submit" value="Add"/>
            </form>
        </div>
    );
};

export default Home;
import React from 'react';

const Home = () => {
    return (
        <div>
            <h2 className='text-center text-5xl font-semibold mt-12'>ToDo List</h2>
            <form className='text-center mt-12'>
              <textarea class="textarea textarea-bordered" placeholder="Bio"></textarea>
              <br/>
              <input className='btn btn-sm mt-5' type="submit" name="submit" value="Add"/>
            </form>
        </div>
    );
};

export default Home;
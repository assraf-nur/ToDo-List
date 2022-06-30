import React from "react";

const Todo = ({ tex }) => {
  const { text } = tex;

  const handleEdit = (e) =>{
    e.preventDefault();
    console.log(text);
  }

  const handleTask = (e) =>{
    e.preventDefault();
    console.log(text);
  }

  return (
      <ul className="text-center mt-5">
        <div class="card w-96 bg-neutral text-neutral-content mx-auto mb-5">
          <div class="card-body items-center text-center">
            <div className="flex gap-5 position-center items-center">
              <input onClick={handleTask} type="radio" name="radio-3" class="radio radio-secondary"/>
                <h3 class="text-2xl font-semibold">{text}</h3>
                <button onClick={handleEdit} class="btn btn-sm bg-red-400">Edit</button>
            </div>
          </div>
        </div>
      </ul>
  );
};

export default Todo;

import React from "react";

const Todo = ({ tex }) => {
  const { text, _id, role } = tex;

  const handleUpdate = (e) => {
    e.preventDefault();
    
  };

  const handleTask = (e) => {
    fetch(`http://localhost:5000/list/task/${_id}`, 
    {
      method: 'PUT',
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      window.location.reload();
    })
  };

  return (
    <ul className="text-center mt-5">
      <div class="card w-fit bg-neutral text-neutral-content mx-auto mb-5">
        <div class="card-body items-center text-center">
          <div className="flex gap-5 position-center items-center">
            <input
              onClick={handleTask}
              type="radio"
              name="radio-3"
              class="radio radio-secondary"
            />
            <h3 class="text-xl font-semibold w-12/12">{
              role === 'done' ? <span style={{textDecoration: 'line-through'}}>{text}</span> : text 
            }</h3>
            <label for="my-modal-3" class="btn modal-button">
              Edit Task
            </label>
          </div>
        </div>
      </div>
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <textarea name='text' class="textarea textarea-bordered w-96"></textarea>
          <button onClick={()=> handleUpdate(text._id)} type="submit" className="btn btn-sm ml-5">Update</button>
        </div>
      </div>
    </ul>
  );
};

export default Todo;

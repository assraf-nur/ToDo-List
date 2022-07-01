import React from "react";

const Todo = ({ tex }) => {
  const { text, _id } = tex;

  const handleEdit = (e) => {
    e.preventDefault();
    console.log(text);
  };

  const handleTask = (e) => {
    e.preventDefault();
    console.log(text);
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
            <h3 class="text-xl font-semibold w-12/12">{text}</h3>
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
          <form>
          <textarea name='text' class="textarea textarea-bordered w-96"></textarea>
          <input type="submit" value="Update" className="btn btn-sm ml-5"/>
          </form>
        </div>
      </div>
    </ul>
  );
};

export default Todo;

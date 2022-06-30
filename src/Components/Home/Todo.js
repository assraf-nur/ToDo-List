import React from "react";

const Todo = ({ tex }) => {
  const { text } = tex;

  return (
      <ul className="text-center mt-5">
        <div class="card w-96 bg-neutral text-neutral-content mx-auto mb-5">
          <div class="card-body items-center text-center">
            <h2 class="card-title">{text}</h2>
          </div>
        </div>
      </ul>
  );
};

export default Todo;

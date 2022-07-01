import React, { useEffect, useState } from "react";

const Completed = () => {
  const [complete, setComplete] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/list")
      .then((res) => res.json())
      .then((data) => setComplete(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/list/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      }
      );

  }

  return (
    <div>
      <h2 className="text-center text-4xl mt-12 mb-12 font-semibold">Completed Task</h2>
      {complete?.map((com) => (
        <>
        {
            com.role === 'done' ? <div>
            <div class="card w-96 bg-neutral text-neutral-content mx-auto mb-5">
                <div class="card-body items-center text-center">
                  <h2 class="card-title">{com.text}</h2>
                </div>
                <button onClick={() => handleDelete(com._id)} type="delete" className="btn btn-sm bg-red-400 w-24 mb-2 mx-auto">Delete</button>
              </div>
            </div> : <></>
        }
        </>
      ))}
    </div>
  );
};

export default Completed;

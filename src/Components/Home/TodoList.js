import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Todo from "./Todo";

const TodoList = () => {
  const [texts, setTexts] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/list")
      .then((res) => res.json())
      .then((data) => setTexts(data));
  }, []);

  return (
    <div>
        {texts?.map((tex) => (
          <Todo key={tex._id} tex={tex}></Todo>
        ))}
    </div>
  );
};

export default TodoList;

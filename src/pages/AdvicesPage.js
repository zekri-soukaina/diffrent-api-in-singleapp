import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./AdvicesPage.css";

export default function AdvicesPage() {
  const [advice, setAdvice] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://api.adviceslip.com/advice");
      console.log(response);
      setAdvice(response.data.slip.advice);
    }

    console.log(fetchData());
  }, []);

  const [like, setLike] = useState(false);
  const toggleLike = () => {
    setLike(!like);
  };

  const [currentCom, setCurrentCom] = useState([
    "dpnt forget to hedrate your body keep in up ",
    "one bird in hand better than ten on tree",
  ]);
  const addComment = (newComent) => {
    const newInList = { newComent };
    const newArray = [...currentCom, newInList];
    setCurrentCom(newArray);
  };
  const [comment, setComment] = useState("");

  function submit(event) {
    event.preventDefault();

    if (!comment) {
      window.alert("you need to enter an advice !");
    } else {
      addComment();
      setComment("");
    }
  }

  return (
    <div className="div">
      <p className="div-2"> {advice}</p>

      <div className="div-3">
        <button className="togglelike" onClick={toggleLike}>
          {like ? "dislike" : "like"}
        </button>
        <div className="random">{Math.floor(Math.random(0, 1) * 1000)} </div>

        <div>{currentCom.map((com) => com)}</div>

        <form onSubmit={submit}>
          make you advice popular :)
          <input
            onChange={(event) => {
              console.log("new input .value:", event.target.value);
              setComment(event.target.value);
            }}
            type="text"
            placeholder="Add new advice to our list!"
          />
          <button>Submit</button>
          {addComment}
        </form>
      </div>
    </div>
  );
}

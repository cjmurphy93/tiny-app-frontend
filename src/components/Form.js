import React from "react";
import { connect } from "react-redux";
import { submitQuestion } from "../actions/question_actions";

const Form = ({ submitQuestion }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [repo, setRepo] = useState("");
  const [live, setLive] = useState("");

  return (
    <>
      <input type="text" placeholder="name" onChange={() => setName()}>
        {name}
      </input>
      <input type="text" placeholder="name" onChange={() => setText()}>
        {text}
      </input>
      <input type="text" placeholder="name" onChange={() => setRepo()}>
        {repo}
      </input>
      <input type="text" placeholder="name" onChange={() => setLive()}>
        {live}
      </input>
    </>
  );
};

const mdp = (dispatch) => ({
  submitQuestion: (question) => dispatch(submitQuestion(question)),
});

export default connect(null, mdp(Form));

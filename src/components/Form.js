import React from "react";
import { connect } from "react-redux";
import { submitQuestion } from "../actions/question_actions";

const Form = ({ submitQuestion }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [repo, setRepo] = useState("");
  const [live, setLive] = useState("");

  return <></>;
};

const mdp = (dispatch) => ({
  submitQuestion: (question) => dispatch(submitQuestion(question)),
});

export default connect(null, mdp(Form));

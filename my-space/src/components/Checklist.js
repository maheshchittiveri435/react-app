import React, { useState } from "react";
import "./Checklist.css";
import Plusicon from "../images/plus.svg";
import DeleteIcon from "../images/delete.png";

const para = <div>Update your To Do list here</div>;
const Checklist = () => {
  const [overlay, setOverlay] = useState(false);
  const addChecklistHandler = () => {
    setOverlay(!overlay);
  };

  const cancelHandler = () => {
    setOverlay(false);
  };

  const [checklist, setChecklist] = useState("");
  const [savedItem, setSavedItem] = useState("");
  const [existinglist, setExistignlist] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setSavedItem(checklist);
    setExistignlist([...existinglist, checklist]);
    setChecklist("");
    setOverlay(false);
  };

  const deleteChecklist = (index) => {
    const updatedChecklist = [...existinglist];
    updatedChecklist.splice(index, 1);
    setExistignlist(updatedChecklist);
  };

  return (
    <div className="check-item">
      <p className="scroll-text" behavior="scroll" direction="left" scrollamount="10">
      {para}
        </p>
      <label className="right">Add Checklist</label>
      <img
        className="right-most"
        src={Plusicon}
        alt="Plus Icon"
        onClick={addChecklistHandler}
      ></img>
      {overlay && (
        <form className="overlay" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Checklist Field"
            value={checklist}
            onChange={(e) => setChecklist(e.target.value)}
          />
          <div>
            <button>Add</button>
            <button onClick={cancelHandler}>Cancel</button>
          </div>
        </form>
      )}
      <h3 className="saved-list-h">Bucket List!!</h3>
      {existinglist.map((item, index) => (
        <div key={index} className="saved-list">
          
          <label>
            <span className="bullet">&#8226;</span>{item}
            <img
            className="delete-right"
            src={DeleteIcon}
            alt="Delete Icon"
            onClick={() => deleteChecklist(index)}
          ></img>
          </label>
          
        </div>
      ))}
    </div>
  );
};

export default Checklist;

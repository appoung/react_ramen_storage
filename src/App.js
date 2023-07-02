import React, { useState } from "react";
import "./App.css";
const RamenInventoryManagement = () => {
  const [ramenList, setRamenList] = useState([]);
  const [newRamenName, setNewRamenName] = useState("");
  const addRamen = (name) => {
    const newRamenList = [...ramenList, { name, count: 0 }];
    setRamenList(newRamenList);
    setNewRamenName("");
  };

  const updateRamenCount = (index, count) => {
    const newRamenList = [...ramenList];
    newRamenList[index].count = count;
    setRamenList(newRamenList);
  };

  const incrementRamenCount = (index) => {
    const newRamenList = [...ramenList];
    newRamenList[index].count++;
    setRamenList(newRamenList);
  };

  const decrementRamenCount = (index) => {
    const newRamenList = [...ramenList];
    if (newRamenList[index].count > 0) {
      newRamenList[index].count--;
      setRamenList(newRamenList);
    }
  };
  const deleteRamen = (index) => {
    const newRamenList = [...ramenList];
    newRamenList.splice(index, 1);
    setRamenList(newRamenList);
  };

  return (
    <div className="ramenstorage">
      <div className="ramenstorage__title">
        <h1>🍜라면창고 시스템🍜</h1>
        <h2>라면리스트🔥</h2>
      </div>
      <div>
        <ul>
          <hr></hr>
          {ramenList.map((ramen, index) => (
            <li key={index}>
              <span>
                {ramen.name} : {ramen.count}개
              </span>
              <br></br>
              <input
                style={{ width: "5ch" }}
                type="number"
                value={ramen.count}
                onChange={(e) => updateRamenCount(index, e.target.value)}
              />
              <button
                className="uparrow"
                onClick={() => incrementRamenCount(index)}
              >
                ▲
              </button>
              <button
                className="downarrow"
                onClick={() => decrementRamenCount(index)}
              >
                ▼
              </button>
              <button className="xbutton" onClick={() => deleteRamen(index)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission
            addRamen(newRamenName); // Call addRamen with newRamenName value
          }}
        >
          <hr></hr>
          <input
            type="text"
            placeholder="라면이름"
            value={newRamenName}
            onChange={(e) => setNewRamenName(e.target.value)}
          />
          <input
            style={{ width: "5ch" }}
            className="addbutton"
            type="submit"
            value="추가"
          />
          <hr></hr>
        </form>
      </div>
    </div>
  );
};

export default RamenInventoryManagement;

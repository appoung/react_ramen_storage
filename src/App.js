import React, { useState } from "react";

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

  return (
    <div className="ramenstorage">
      <h1>🍜라면창고 시스템🍜</h1>
      <div>
        <h2>라면리스트🎈</h2>
        <ul>
          {ramenList.map((ramen, index) => (
            <li key={index}>
              {ramen.name} - Count: {ramen.count}
              <br></br>
              <input
                type="number"
                value={ramen.count}
                onChange={(e) => updateRamenCount(index, e.target.value)}
              />
              <button onClick={() => incrementRamenCount(index)}>▲</button>
              <button onClick={() => decrementRamenCount(index)}>▼</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>추가하기</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission
            addRamen(newRamenName); // Call addRamen with newRamenName value
          }}
        >
          <input
            type="text"
            placeholder="Ramen Name"
            value={newRamenName}
            onChange={(e) => setNewRamenName(e.target.value)}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    </div>
  );
};

export default RamenInventoryManagement;

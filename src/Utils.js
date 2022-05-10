import React from "react";
import namor from "namor";
import "./index.css";

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    mission: namor.generate({ words: 1, numbers: 0 }),
    date: namor.generate({ words: 1, numbers: 0 }),
    launchpad: namor.generate({ words: 1, numbers: 0 })
  };
};

export function makeData(len = 5553) {
  return range(len).map((d) => {
    return {
      ...newPerson(),
      c: range(10).map(newPerson)
    };
  });
}

export const Logo = () => (
  <div
    style={{
      margin: "1rem auto",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    For more examples, visit {""}
    <br />
  </div>
);

export const Tips = () => (
  <div style={{ textAlign: "center" }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>
);

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo</h1>
      <select name="conmpleteOrIncomplete" className="selectBox">
        <option value=""></option>
        <option value="incomplete">未完了</option>
        <option value="complete">完了</option>
      </select>
      <form className="form">
        <input type="text" placeholder="todo" />
        <button type="submit">todo追加</button>
      </form>
      <section className="incompleteArea">
        <h2>未完了</h2>
        <ul className="lists">
          <li>aaa</li>
        </ul>
      </section>
      <section className="completeArea">
        <h2>完了</h2>
        <ul className="lists">
          <li></li>
        </ul>
      </section>
    </div>
  );
}

export default App;

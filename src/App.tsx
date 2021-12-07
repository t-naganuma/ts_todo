import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState();

  const addTodos = () => {
    
  }

  return (
    <div className="App">
      <h1>Todo</h1>
      <form className="form">
        <input type="text" placeholder="todo" />
        <button type="submit" onClick={addTodos}>todo追加</button>
      </form>
      <section className="incompleteArea">
        <h2>未完了</h2>
        <ul className="lists">
          <li>
            <span>aaa</span>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </section>
      <section className="completeArea">
        <h2>完了</h2>
        <ul className="lists">
          <li>
            <span>aaa</span>
            <button>戻す</button>
            <button>削除</button>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;

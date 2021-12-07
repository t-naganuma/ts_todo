import React, { useState } from 'react';
import './App.css';

type Todo = {
  id: number;
  todo: string;
  done: boolean;
}

const App: React.FC = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [count, setCount] = useState<number>(1);

  const onChangeTodoText = (event: React.ChangeEvent<HTMLInputElement>) => setTodoText(event.target.value);

  // todo追加
  const addTodo = () => {
    if(!todoText) return;
    setCount(count + 1);
    const newTodo: Todo = {
      id: count,
      todo: todoText,
      done: false
    };
    setTodos([...todos, newTodo]);
    setTodoText("");
  }

  // todo完了
  const completeTodo = (todo: Todo) => {
    const editTodo: Todo[] = todos.map((t) => {
      if(t.id === todo.id) {
        t.done = !t.done;
      }
      return t;
    });

    setTodos(editTodo);
  }

  // todo削除
  const onClickDelete = (todoId: number) => {
    const newTodos = todos.filter((t) => t.id !== todoId);
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <h1>Todo</h1>
      <form className="form" onClick={(event) => {
        event.preventDefault();
        addTodo();
      }}>
        <input type="text" placeholder="todo" value={todoText} onChange={(event) => onChangeTodoText(event)} />
        <button type="submit" onSubmit={addTodo}>todo追加</button>
      </form>
      <section className="incompleteArea">
        <h2>未完了</h2>
        <ul className="lists">
          {todos.map((todo) => {
            if(!todo.done) {
              return (
                <li key={todo.id}>
                  <span>{todo.todo}</span>
                  <button onClick={() => completeTodo(todo)}>完了</button>
                  <button onClick={() => onClickDelete(todo.id)}>削除</button>
                </li>
              )
            }
          })}
        </ul>
      </section>
      <section className="completeArea">
        <h2>完了</h2>
        <ul className="lists">
          {todos.map((todo) => {
            if(todo.done) {
              return (
                <li key={todo.id}>
                  <span>{todo.todo}</span>
                  <button>戻す</button>
                  <button onClick={() => onClickDelete(todo.id)}>削除</button>
                </li>
              )
            }
          })}
        </ul>
      </section>
    </div>
  );
}

export default App;

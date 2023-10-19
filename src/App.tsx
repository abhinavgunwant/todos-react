import { useState, ChangeEventHandler } from 'react';

import ListTodos from './component/ListTodos';

import Todo from './model/Todo';
import './App.css'

const App = () => {
    const [ todoText, setTodoText ] = useState<string>('');
    const [ todos, setTodos ] = useState<Todo[]>([]);

    const toggleTodoStatus = (id: number) => {
        const todosCopy = [...todos];
        console.log(id);

        for(let i=0; i<todos.length; ++i) {
            if (id === todosCopy[i].id) {
                todosCopy[i].checked = !todosCopy[i].checked;
            }
        }

        setTodos(todosCopy);
    }

    const onAdd = () => {
        const id = Math.random()*100
        console.log('id', id);
        setTodos([
            ...todos, {
                checked: false,
                id,
                text: todoText,
            }
        ]);

        setTodoText('');
    };

    const onTextChanged: ChangeEventHandler<HTMLInputElement> = (e) => {
        setTodoText(e.target.value);
    };

    return <>
        <h1>TODO APP</h1>
        <div id="entry-row">
            <input type="" onChange={ onTextChanged } value={ todoText } />
            <button onClick={ onAdd }>+</button>
        </div>

        <main>
            <div className="todo-items">
                <ListTodos
                    checked={ false }
                    todos={ todos }
                    toggleTodoStatus={ toggleTodoStatus } />
            </div>
            
            <div className="done-items">
                <ListTodos
                    checked={ true }
                    todos={ todos }
                    toggleTodoStatus={ toggleTodoStatus } />
            </div>
        </main>
    </>;
}

export default App


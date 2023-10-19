import TodoComponent from './Todo';
import Todo from '../model/Todo';

interface ListTodosProps {
    todos: Todo[],
    checked: boolean,
    toggleTodoStatus: (a:number) => void
}

export const ListTodos = (props: ListTodosProps) => <>
    {
        props.todos.filter(todo => todo.checked === props.checked).map(
            (todo) => <TodoComponent
                id={ todo.id }
                text={ todo.text }
                checked={ todo.checked }
                toggleTodoStatus={ props.toggleTodoStatus }
                key={todo.id} />
        )
    }
</>;

export default ListTodos;


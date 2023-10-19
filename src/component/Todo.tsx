import Todo from '../model/Todo';

export interface TodoProps extends Todo {
    toggleTodoStatus: Function,
}

export const TodoComponent = (props: TodoProps) => {
    const onCheckboxClicked = () => {
        props.toggleTodoStatus(props.id);
    };

    return <div>
        <input
            type="checkbox"
            checked={ props.checked }
            id={ 'todo-' + props.id }
            onChange={ onCheckboxClicked } />
        <label htmlFor={ 'todo-' + props.id}> { props.text } </label>
    </div>;
}

export default TodoComponent;


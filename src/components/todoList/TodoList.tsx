import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames/bind';
import styles from './TodoList.module.scss';
import { FaTrash } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const cx = classNames.bind(styles);

type Item = {
    id: string;
    content: string;
};
export interface TodoListProps {
    data: Item[];
}

type UserSubmitForm = {
    todo: string;
};

const schema = yup.object<UserSubmitForm>({
    todo: yup.string().required(),
});

export default function TodoList({ data = [] }: TodoListProps) {
    const [todos, setTodos] = useLocalStorage<Item[]>('todo', data);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<UserSubmitForm>({ resolver: yupResolver(schema) });

    const onSubmitHandler = (data: UserSubmitForm) => {
        setTodos((prev) => [...prev, { id: uuidv4(), content: data.todo }]);
        reset();
    };

    const handleRemoveTodo = (id: string) => setTodos((prev) => prev.filter((item) => item.id !== id));

    return (
        <div className={cx('container')}>
            <div className={cx('input-wrapper')}>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <input {...register('todo')} placeholder="Enter your todo" />
                    <button className={cx('btn-add')} type="submit">
                        Add
                    </button>
                </form>
            </div>
            <div className={cx('todo-list')}>
                {todos.map((todo) => (
                    <div className={cx('item')} key={todo.id}>
                        <p>{todo.content}</p>
                        <span className={cx('btn-remove')} onClick={() => handleRemoveTodo(todo.id)}>
                            <FaTrash />
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

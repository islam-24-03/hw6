import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useState} from "react";
import User from '../../components/User'
import { addUser, changeInput, clearInput, deleteAll, result } from '../../store/usersSlice'

function UsersPage() {

    const dispatch = useDispatch()

    const { inputValue, users, resultCalc } = useSelector(state => state.usersReducer)

    const [firstNumber, setFisrtNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');

    const changeInputFunc = (event) => {
        dispatch(changeInput(event.target.value))
    }
    const addUserFunc = () => {
        dispatch(addUser(inputValue))
    }
    const clear = () => {
        dispatch(clearInput())
    }
    const deleteUser = () => {
        dispatch(deleteAll())
    }

    const changeFirstNumber = (e) => {
        setFisrtNumber(e.target.value)
    }
    const changeSecondNumber = (e) => {
        setSecondNumber(e.target.value)
    }

    const plusNumbers = () => {
        if (firstNumber && secondNumber) {
            const summ = Number(firstNumber) + Number(secondNumber)
            dispatch(result(summ))
        } else {
            alert('Заполните поле')
        }
    }

    const minusNumbers = () => {
        if (firstNumber && secondNumber) {
            const summ = Number(firstNumber) - Number(secondNumber)
            dispatch(result(summ))
        } else {
            alert('Заполните поле')
        }
    }

    const umnojenieNumbers = () => {
        if (firstNumber && secondNumber) {
            const summ = Number(firstNumber) * Number(secondNumber)
            dispatch(result(summ))
        } else {
            alert('Заполните поле')
        }
    }

    const delenieNumbers = () => {
        if (firstNumber && secondNumber) {
            const summ = Number(firstNumber) / Number(secondNumber)
            dispatch(result(summ))
        } else {
            alert('Заполните поле')
        }
    }



    return (
    <>
        <input type="text" placeholder="name" onChange={changeInputFunc} value={inputValue}/>
        <button onClick={addUserFunc}>add user</button>

        {users.map(user => <User name={user} />)}
        <button onClick={clear}>clear</button>
        <button onClick={deleteUser}>delete all</button>

        <div>
            <input type="number" placeholder="введите первое число" onChange={changeFirstNumber}/>
            <input type="number" placeholder="введите второе число" onChange={changeSecondNumber}/>
            <button onClick={plusNumbers}>+</button>
            <button onClick={minusNumbers}>-</button>
            <button onClick={umnojenieNumbers}>*</button>
            <button onClick={delenieNumbers}>/</button>
            <h2>{resultCalc}</h2>
        </div>
    </>
  )
}

export default UsersPage
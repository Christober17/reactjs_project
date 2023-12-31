import React,{useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props)=>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate , setEnteredDate] = useState('');

    // const [userInput,setUserInput] = usestate({
    //     enterTitle:'',
    //     enterAmount:'',
    //     enterDate:''
    // });

    const textChangeHandler = (event)=>{
        (setEnteredTitle(event.target.value))
        // setUserInput({
        //     ...userInput,
        //     enterTitle:event.target.value
        // })
        
        
    }

    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enterAmount:event.target.value
        // })
    }

    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enterDate:event.target.value
        // })
    }

    // Alternative thing of useState

    // const inputChangeHandler = (identifier,value)=>{
    //     if(identifier === 'title'){
    //         setEnterInput(value);
    //     }else if(identifier === 'date'){
    //         setDate(value);
    //     }else{
    //         setAmount(value);
    //     }
    // }
    const submitHandler = (event)=>{
        event.preventDefault();

        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={textChangeHandler}/>
                    {/* <input type='number' min="0.01" step="0.01" onChange={(event)=> inputChangeHandler('title',event.target.value)}/> */}
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                    {/* <input type='date' min="2019-01-01" max="2022-12-31" onChange={(event)=> inputChangeHandler('amount',event.target.value)}/> */}
                    
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date'value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                    {/* <input type='date' min="2019-01-01" max="2022-12-31" onChange={(event)=> inputChangeHandler('date',event.target.value)}/> */}
                    
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expenses</button>
            </div>
        </form>
    )

}

export default ExpenseForm;
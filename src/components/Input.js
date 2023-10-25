import {useState} from 'react'
import './Input.css';
const Input = (props) => {
    const [userName,setUserName] = useState('');
    const [age,setAge] = useState(1);
    const [isValid,setIsValid]  = useState(true);
    const submitFormHandler = (event) => {
        event.preventDefault();
        if(userName.trim().length > 0) {
            props.onAddUser({'userName': userName, 'age': age})
            setIsValid(true);
        }
        else{
            setIsValid(false);
            alert("need input")
            return;
        }
        console.log(userName)
    }
    const userNameChangeHandler = (event) => {
        setUserName(event.target.value);
        if((event.target.value).trim().length === 0) {
            setIsValid(false);
            return;
        }
        else{
            setIsValid(true);
        }
    }
    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }
    return (
        <form onSubmit={submitFormHandler} className='form-control '>
            <label htmlFor="user-name" className={`form-control ${!isValid ? 'invalid' : ''} label`}>Username</label>
                <input onChange={userNameChangeHandler}className={`form-control ${!isValid ? 'invalid' : ''} input`} type="text" id="user-name">

            </input>
            <label className="label form-control ">Age (Years)</label>
            <input onChange={ageChangeHandler} placeholder='1' type="number" min="1" max="120" aria-label="lorem ipsum" className="input">
    
            </input>
            <button className="btn">Add User</button>
        </form>
    );
};

export default Input;



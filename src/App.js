import { useState } from 'react'
import './App.css';
import Input from './components/Input';
import List from './components/List';
const DUMMYDATA= [
  { "userName": "John1", "age": "16", "id": "1"},
  { "userName": "John2", "age": "16", "id": "2"},
  { "userName": "John3", "age": "16", "id": "3"},
  { "userName": "John4", "age": "16", "id": "4"},
  { "userName": "John5", "age": "16", "id": "5"},
]
function App() {
  const [users, setListUsers] = useState([]);
  const addUserHandler = (user) => {
    setListUsers((prevUsers) => {
      let updateUsers = [...prevUsers];
      updateUsers.unshift({userName: user.userName, age: user.age, id: Math.random().toString()});
      console.log(updateUsers);
      return(updateUsers);
    })
  }

  return (
    <div className="App">
      <section>
        <Input onAddUser={addUserHandler}/>
      </section>
      <section>
        <List data={users} />
      </section>
    </div>
  );
}

export default App;

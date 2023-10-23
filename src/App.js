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
  return (
    <div className="App">
      <section>
        <Input/>
      </section>
      <section>
        <List data={DUMMYDATA} />
      </section>
    </div>
  );
}

export default App;

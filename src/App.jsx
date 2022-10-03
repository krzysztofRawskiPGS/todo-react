import ToDoList from './lib/components/ToDoList/ToDoList';
import AddToDoItem from './lib/components/AddToDoItem/AddToDoItem';
import Container from './lib/components/Container/Container';

function App() {
  return (
    <div className="App">
      <header>
        <Container>
          <h1>To Do App</h1>
        </Container>
      </header>
      <main>
        <Container>
          <AddToDoItem />
          <ToDoList />
        </Container>
      </main>
    </div>
  );
}

export default App;

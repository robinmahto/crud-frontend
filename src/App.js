import './App.css';
import Form from './components/Form';
import UserLists from './components/UserLists';

function App() {
  return (
    <div className="app bg-teal-900 flex flex-col items-center">
      <Form/>
      <UserLists/>
    </div>
  );
}

export default App;

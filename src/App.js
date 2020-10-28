import Profile from './Component/Profile/Profile'
import './App.css';
import users from './data/user.json'

function App() {

  return (
    <>
      <Profile user={users} />
    </>
  );
}

export default App;

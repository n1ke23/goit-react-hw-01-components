import Profile from './Profile/Profile';
import users from '../data/user.json';
import Statistics from './Statistics/Statistics';
import statistical from '../data/statistical-data.json'
import FriendList from './FriendList/FriendList'
import friends from '../data/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import trans from '../data/transactions.json';


function App() {

  return (
    <>
      <Profile user={users} />
      <Statistics stat={statistical}/>
      <FriendList friends={friends}/>
      <TransactionHistory trans={trans}/>
    </>
  );
}

export default App;

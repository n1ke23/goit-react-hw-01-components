import Profile from './Profile/Profile';
import users from '../data/user.json';
import Statistics from './Statistics/Statistics';
import statistical from '../data/statistical-data.json'
import Percentage from './Percentage/Percentage';
import friends from '../data/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import trans from '../data/transactions.json';


function App() {

  return (
    <>
      <Profile user={users} />
      <Statistics stat={statistical}/>
      {friends.map(elem => <Percentage key={elem.id} avatar={elem.avatar} name={elem.name} isOnline={elem.isOnline} />)}
      <TransactionHistory trans={trans}/>
    </>
  );
}

export default App;

//conditional rendering -> allows you to control what gets rendered in your application
//based on certain conditions (show, hide or change components)
import UserGreeting from "./UserGreeting.jsx";

function App(props){

  return(
      <>
           <UserGreeting isLoggedIn={true} username="Hasitha"/>
      </>
      );
    
}
 
export default App
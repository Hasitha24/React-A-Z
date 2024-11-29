
import PropTypes from 'prop-types';

function UserGreeting(props){
    //option 01:
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
  
    //     return <h2>Please log in to continue</h2>

          //option 02:
    //   return(props.isLoggedIn ? <h2 className="welcome-msg">Welcome {props.username}</h2> :
    //                                      <h2 className="login-prompt">Please log in</h2> 

    //option 3: using contants.This is more readable than previous options
const welcomeMsg = <h2 className="welcome-msg">
                    Welcome {props.username}
                    </h2>

const loginPrompt =  <h2 className="login-prompt">
                    Please log in
                    </h2> 
return(
    props.isLoggedIn ? welcomeMsg : loginPrompt);
    
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps ={
    isLoggedIn: false,
    username:"Guest",
}
export default UserGreeting
import profilePic from './assets/pic.jpg'

function Card(){

    return(
        <div className="card">
            <img className='card-image' src= {profilePic}  alt="profile picture"></img>
            <h2>Hasitha</h2>
            <p>I make websites and make social media posts</p>
        </div>
    );

}

export default Card
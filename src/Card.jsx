import Ashik from './assets/Ashik.jpg';

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={Ashik} alt="Ashik" />
            <h1 className='card-title'>Ashik</h1>
            <p>I am Ashik and I am a student</p>
            </div>
    );
}

export default Card;
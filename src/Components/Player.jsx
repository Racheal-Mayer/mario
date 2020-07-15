import React, {useState} from 'react';


const DisplayTamagotchi = props => {
    const {fullness,happiness, meals, energy, message, image} = props;

    return (
            <div className="display">
                <div className="row">
                    <h1 className="title">Mario's Stats:</h1>
                    <h5 className="stats">Fullness: {props.fullness}</h5>
                    <h5 className="stats">Happiness: {props.happiness}</h5>
                    <h5 className="stats">Coins left: {props.meals}</h5>
                    <h5 className="stats">Energy: {props.energy}</h5> <hr></hr>
                    <h5 className="message">{props.message}</h5>
                <div className="col">
                    <img className="image" src={props.image} alt=""/>
                </div>
            </div>
        </div>
    )
}

const Tamagotchi = props => {

    const [fullness, setFullness] = useState(20);
    const [happiness, setHappiness] = useState(20);
    const [meals, setMeals] = useState(3);
    const [energy, setEnergy] = useState(50);
    const [message, setMessage] = useState("It's a-me, Mario!");
    const [image, setImage] = useState("Images/HiMario2.gif");

    function work() {
        var energyRemaining = energy;
        var chance = randomMeals()*1
        if(energyRemaining >= 5) {
            setMeals(meals + chance);
            setMessage("Hoo hoo! Just what I needed!");
            setEnergy(energy - 5);
            setImage("Images/MarioCoin.gif");
        }
        else {
            setMessage("Mario is too tired.");
            setImage("Images/MarioTired.gif");
            setMeals(meals);
        }
        checkWin();
    }

    function play() {
        var energyRemaining = energy;
        var playchance = getRandomNum() *1;
        var playliked = randomLiked()*1;
        if(energyRemaining >= 5) {
            if(playliked === 1){
                setEnergy(energy - 5);
                setHappiness(happiness + playchance);
                setMessage("Maaama-hoo-ha-hoo, wow-wow!");
                setImage("Images/HappyMario.gif");
            }
        else {
            setEnergy(energy - 5);
            setMessage("I don't want to play!");
            setHappiness(happiness);
            setImage("Images/MarioRun.gif");
            }
        }
        else {
            setMessage("Wahhh, I'm too tired!");
            setHappiness(happiness);
            setImage("Images/MarioTired.gif");
        }
        checkWin();
    }

    function feed() {
        var mealsRemaining = meals;
        var feedchance = getRandomNum()*1;
        var feedLiked = randomLiked()*1;
        if( mealsRemaining >= 1){
            if(feedLiked == 1){
                setMeals(meals - 1);
                setFullness(fullness + feedchance);
                setMessage("Yummmmmmmy!");
                setImage("Images/MarioEating.gif");
            }
        else {
            setMeals(meals - 1);
            setMessage("Yuckyyyy! No!");
            setImage("Images/MarioNo.gif");
        }
    }
        else {
            setMessage("Let's-a go! I am Hungry!");
            setMeals(meals);
            setImage("Images/MarioRun.gif");
        }
        checkWin();
    }

    function sleep() {
        setHappiness(happiness - 5);
        setFullness(fullness -5);
        setEnergy(energy + 15);
        setMessage("Mama Mia! I am tired");
        setImage("Images/MarioTired.gif");
        checkWin();
    }

    function getRandomNum() {
        var min = 5;
        var max = 10;
        var random = Math.floor(Math.random() * (+max +1 - + min)) + +min;
        return random;
    }

    function randomMeals() {
        var min = 1;
        var max = 3;
        var random = Math.floor(Math.random() * (+max +1 - + min)) + +min;
        return random;
        }

    function randomLiked() {
        var min = 1;
        var max = 4;
        var random = Math.floor(Math.random() * (+max +1 - + min)) + min;
        return random;
    }

    function checkWin(){
        if((energy >= 100) && (fullness >= 100) && (happiness >= 100)){
            setMessage("Thanks for playing! Way to go!");
            setImage("Images/WinningMario.gif");
        }
        else {
            if((fullness <= 0) || (happiness <= 0)) {
                setMessage("Awww We Lost, Thanks for-a playing my-a game!");
                setImage("Images/LoseMario.gif");
            }
        }
    }
    function reset(){
        setHappiness(20);
        setEnergy(5);
        setFullness(20);
        setMeals(3);
        setMessage("It's a-me, Mario!");
        setImage("Images/HiMario2.gif");
    }

    return (
        <div className="dashboard">
            <DisplayTamagotchi 
            happiness={happiness} 
            energy={energy}
            fullness={fullness}
            meals={meals}
            message={message}
            image={image}/>
            {
                message === "Thanks for playing! Way to go!" || message === "Awww We Lost, Thanks for-a playing my-a game!" ? 
            <div>
                <button className="btn btn-danger" onClick={reset}>Reset</button> </div> :
            <div> 
                <button className="btn btn-primary" onClick={work}> Work </button>
            <button className="btn btn-success" onClick={sleep}>Sleep</button>
            <button className="btn btn-warning" onClick={feed}>Eat</button>
            <button className="btn btn-danger" onClick={play}>Play</button>
            </div>
            }
        </div>

        )
}


export default Tamagotchi
function Button(){
    const handleClick = (name) => console.log(`${name} clicked Button`);
    return(
        <button onClick={handleClick("Ashik")}>Click me</button>
    )
}

export default Button;
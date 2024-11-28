//External styling (used in simple projects)
//module styling (Used in large projects)
//Inline styling (Used in minimal simple projects)

function Button() {

const styles = {
    
        backgroundColor: "hsl(200,100%,50%)",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    
}


return(
<button style={styles}>Click Me</button>
);
}

export default Button
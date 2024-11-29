function List(){

       

    //Example 02:
    //Array of strings will be converted into an array of objects

    const fruits =[{name:"apple", calories:95},
        {name:"banana",calories:45},
        {name:"orange", calories:105},
        {name:"pineapple",calories:85},
        {name:"guava",calories:198}];

    //sort before listing
    fruits.sort();
    const listItems = fruits.map(fruit => <li key ={fruit.name}>{fruit.name}</li>);

    return(<ol>{listItems}</ol>);
}

export default List
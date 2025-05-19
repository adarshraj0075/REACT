import Child from "./Child";

function Middle({msg}){
    return(
        <>
        <h2>i am middle comp</h2>
        <p>
            below is a child component ;
        </p>
        <Child msg={msg}/>
        </>
    )
}

export {Middle};
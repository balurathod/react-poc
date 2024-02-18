
export default function Child(props) {

    //var message = "Hello Daddy";

    return (
        <>
            <h3>I am Child</h3>
            <p>I got this msg from Parent: {props.message}</p>
            {/* <p>{props.handleCallback(message)}</p> */}
        </>
    )
}
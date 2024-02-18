import Child from "./Child";

export default function Parent() {

    // function CallBack(childData) {
    //     return(
    //         <p>Message from Child - {childData}</p>
    //     )
    // }

    return (
        <>
            <h3>Parent to child</h3><br />
            <Child message="Hello Child"/>
            {/* <Child handleCallback={CallBack} /> */}
        </>
    )

}
function Public (props) {
    return (
        <div>
            <a href={"sign-in"}>sing in</a>
            <a href={"sign-up"}>sing up</a>
            <h2>{props.title}</h2>
        </div>
    )
}

export default Public;
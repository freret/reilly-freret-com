export default function Messaging() {

    function handleSubmit(e) {
        e.preventDefault()
        const msg = document.getElementById("messageInput").value
        fetch("/sendMessage", {
            method: "POST",
            body: JSON.stringify({
                message: msg
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    return (
        <>
            <h1>Hi, Al! ❤️</h1>
            <form onSubmit={handleSubmit} id="mainForm">
                <label>
                    Message:
                    <input type="text" id="messageInput" maxLength={25} style={{"margin-left": "10px"}}/>
                </label>
                <button formAction={'submit'} style={{"margin-left": "10px"}}>Send</button>
                <p style={{"font-size": "small", color: "gray", "font-style": "italic"}}>Fewer than 25 characters, no emoji yet :(</p>
            </form>
        </>
    )
}
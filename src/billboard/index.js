import Emoji from "../utils/emoji"

export default function Billboard() {
    return (
        <>
            <h1>Billboard</h1>
            <p><Emoji description={"dev icon"} withCharacter="👾" /> public repo <a href="https://github.com/reilly-freret/matrix-with-python" target={'_blank'}>here</a></p>
            <div style={{display: "flex", "justify-content": "space-between"}}>
                <img src={"img/clock.png"} width={"48%"} height={"40%"} alt={"Billboard clock face"} title={"Billboard clock face"}/>
                <img src={"img/spotify.png"} width={"48%"} height={"40%"} alt={"Billboard spotify integration"} title={"Billboard spotify integration"}/>
            </div>

            <h2>Motivation</h2>
            <p>I came across the <a href={"https://tidbyt.com"} target={"_blank"}>Tidbyt project</a> and thought "wow, that's beautiful". And it is! But there are some oddities:
            </p>
            <ul style={{ "list-style-type": "circle", "padding-left": "32px" }}>
                <li>It requires a constant internet connection to operate</li>
                <li>Applications must be deployed to their servers</li>
                <li>All content is displayed by rendering an image on Tidbyt's servers, then sending that image to your device</li>
            </ul>

            <p>That's all well and good for a consumer device, but I like a little more customizability in my IoT.</p>
            
            <h2>BOM</h2>
            <ul style={{ "list-style-type": "circle", "padding-left": "32px" }}>
                <li><a href={"https://www.raspberrypi.com/products/raspberry-pi-4-model-b/"} target={"_blank"}>Raspberry Pi 4</a></li>
                <li><a href={"https://www.adafruit.com/product/2345"} target={"_blank"}>Matrix HAT + RTC</a></li>
                <li><a href={"https://a.co/d/0htPfJ5f"} target={"_blank"}>4A 5V power supply</a></li>
                <li><a href={"https://www.adafruit.com/product/2279"} target={"_blank"}>LED Panel</a></li>
            </ul>

            <h2>Hardware</h2>
            <p>Thanks to Adafruit, the hardware was pretty easy to set up. I soldered headers to my Raspberry Pi and the Matrix HAT, connected them together with some board spacers I had laying around, and plugged in the LED Panel's built-in cable to the HAT.</p>
            
            <p>I don't have a picture of this :(</p>

            <h2>Software</h2>
            <p>This was much more interesting to figure out than the hardware. Relying heavily on various open-source libraries for the Raspberry Pi, I decided on this broad pattern:</p>
            <ul style={{ "list-style-type": "circle", "padding-left": "32px" }}>
                <li><strong>Configuration class</strong> to handle the initial board setup, pin definitions, screen size, etc.</li>
                <li><strong>Device class</strong> to handle user inputs, switching between apps, and painting queued images to the screen</li>
                <li><strong>App class</strong> from which all functions inherit</li>
            </ul>

            <p>Once the configuration class has set everything up, the device class takes over and displays the first app in the list (the list of apps and their order can be configured with the command line).</p>

            <p>Each <code>App</code> implements a <code>__data_update__</code> and <code>__render_update__</code> method, the intervals of which are configurable when the App inheritor is created. These update methods are attached to two separate timer threads (<code>setInterval</code>) that extend the built-in Python <code>threading</code> module. This allows us a LOT more flexibility in our actual rendering logic: we don't need to manage individual screen paints ourselves; we can add/modify the next frame in the queue, and trust that it'll be displayed at each render interval.</p>

            <p>I tried to make each app as performant as possible by rendering new frames only when new data from <code>__data_update__</code> didn't match previously cached data. Additionally, while apps are "backgrounded", they don't make render or data updates.</p>

            <p>This is a very broad overview of many hours of work -- please check out the <a href={"https://github.com/reilly-freret/matrix-with-python"} target={"_blank"}>repo</a> for implementation details!</p>
        </>
    )
}
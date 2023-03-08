import { Link } from "inferno-router"
import Emoji from "../utils/emoji"

const PlatformProSupport = () => (
  <>
    <h1>Platform Pro</h1>
    
    <p><Emoji description={"phone icon"} withCharacter="📱" /> view on the <a href="https://apps.apple.com/us/app/platform-pro/id6446038782" target={"_blank"}>app store</a> </p>
    <p><Emoji description={"dev icon"} withCharacter="👾" /> check out the <a href="https://github.com/freret/platform-pro" target={'_blank'}>iOS app</a> and <a href="https://github.com/freret/platform-pro-api" target={'_blank'}>API</a> repos</p>
    <p><Emoji description="hand raised icon" withCharacter="🙋🏻" /> reach out to <a href={"mailto:platformpro@proton.me"}>platformpro@proton.me</a> with questions or ideas</p>

    <h2>Roadmap</h2>
    <ul>
      <li>
        <input type={"checkbox"} id="item-1" disabled checked />
        <label for="item-1">closest departures</label>
      </li>
      <li>
        <input type={"checkbox"} id="item-2" disabled checked />
        <label for="item-2">active alerts</label>
      </li>
      <li>
        <input type={"checkbox"} id="item-3" disabled checked />
        <label for="item-3">alert detail</label>
      </li>
      <li>
        <input type={"checkbox"} id="item-4" disabled />
        <label for="item-4">enhanced alert detail</label>
      </li>
      <ul style={{ "padding": "revert" }}>
        <li>
          <input type={"checkbox"} id="item-5" disabled />
          <label for="item-5">timestamps (began, updated, ended/ending)</label>
        </li>
        <li>
          <input type={"checkbox"} id="item-6" disabled />
          <label for="item-6">affected routes</label>
        </li>
      </ul>
    </ul>

    <h2>Privacy Policy</h2>
    <p>Platform Pro doesn't collect or store any personal information. There are no ads. Any of the (non-personal and non-identifying) information that we <em>do</em> store is never shared with anyone. Our servers record networking logs, which we use to fix bugs and may include a user's device type, connection type, request type, or broad location (with resolution no more granular than "which city are they in"). We do not interact with any identifying data supplied by users or by Apple on behalf of those users. Application download data is furnished by Apple and governed by their App Store's terms and conditions. Any crash logs that may be sent to Platform Pro are also governed by Apple's terms and conditions.
    </p>

    <p><Link to={"/"}>home</Link></p>
  </>
)

export default PlatformProSupport
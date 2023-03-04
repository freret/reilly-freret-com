import { Link } from "inferno-router"

const PlatformProSupport = () => (
  <>
    <h1>Platform Pro</h1>
    <p><span role={"img"} aria-label="dev icon">👾</span> check out the <a href="https://github.com/freret/platform-pro" target={'_blank'}>iOS app</a> and <a href="https://github.com/freret/platform-pro-api" target={'_blank'}>API</a> repos</p>
    <p><span role={"img"} aria-label="hand raised icon">🙋🏻</span> reach out to <a href={"mailto:platformpro@proton.me"}>platformpro@proton.me</a></p>
    <p><span role={"img"} aria-label="under construction">🚧</span> this page is (clearly) under construction; check back later for more info</p>
    <h2>Privacy Policy</h2>
    <p>Platform Pro doesn't collect or store any personal information. There are no ads. Any of the non-personal information we do store is never shared with anyone. Our servers record networking logs, which we use to fix bugs and may include a user's device type, connection type, request type, or broad location (with resolution no more granular than "which city are they in"). We do not interact with any identifying data supplied by users or by Apple on behalf of those users. Application download data is furnished by Apple and governed by their App Store's terms and conditions. Any crash logs that may be sent to Platform Pro are also governed by Apple's terms and conditions.
    </p>
    <p><Link to={"/"}>home</Link></p>
  </>
)

export default PlatformProSupport
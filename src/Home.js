import { Link } from "inferno-router";
import Emoji from "./utils/emoji";

export default function Home() {
  return (
    <>
      <h1>Reilly Freret</h1>
      <p>code stylist</p>
      <p><Emoji description={"email"} withCharacter="📬" /> [firstname].[lastname]@proton.me</p>

      <h2>Currently</h2>
      <p>software engineer and architect at <a href={"https://with.co"}>withco</a></p>

      <h2>Recently</h2>
      <p>co-founder and head of engineering at <a href={"https://www.sobrietyhub.com/"} target="_blank">sobriety hub</a></p>
      <p>software and devops engineer at <a href={"https://www.bgcpartners.com/"} target="_blank">bgc partners</a></p>
      {/* <p>creator/maintainer of <Link to={"/platformpro"}>platform pro</Link></p>
      <p>tinkerer on a <Link to={"/billboard"}>better* version of Tidbyt</Link></p> */}
      <p>b.s. in computer science from <a href={"https://cse.wustl.edu/index.html"} target="_blank">wash u in st. louis</a></p>
      {/* <p style={{"font-style": "italic", color: "gray"}}>*subjective, I guess</p> */}
    </>
  )
}
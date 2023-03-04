import { Link } from "inferno-router";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <p><span role={"img"} aria-label="under construction">🚧</span> under construction</p>
      <p><Link to={"/platformpro"}>platform pro</Link></p>
    </>
  )
}
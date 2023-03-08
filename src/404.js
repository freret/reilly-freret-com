import { Link } from "inferno-router";

export default function PageNotFound() {
  return (
    <>
      <h1>404</h1>
      <p>page not found</p>
      <p><Link to={"/"}>home</Link></p>
    </>
  )
}
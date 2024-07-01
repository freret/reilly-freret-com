import { Link } from "inferno-router"


export function Layout({ children }) {
  return (
    <div style={{ "max-width": "1000px", "margin": "auto", "padding": "30px" }}>
      {window.location.pathname != "/" && <p><Link to={"/"}>home</Link></p>}
      {children}
      {window.location.pathname != "/" && <p><Link to={"/"}>home</Link></p>}    </div>
  )
}
export default function Layout({ children }) {
  return (
    <div style={{"max-width": "1000px", "margin": "auto", "padding": "30px"}}>
      {children}
    </div>
  )
}
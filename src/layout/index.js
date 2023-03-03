export default function Layout({ children }) {
  return (
    <div style={{"max-width": "1000px", "margin": "auto"}}>
      {children}
    </div>
  )
}
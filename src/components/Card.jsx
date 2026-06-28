// Reusable glassmorphism card. New sections (projects, patents, blog, ...)
// can be added by composing this component.
export default function Card({ id, title, children }) {
  return (
    <div className="card" id={id}>
      <h2>{title}</h2>
      {children}
    </div>
  )
}

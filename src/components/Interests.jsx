// Beyond Code — light "interests" chips (reuses the Skills .skill chip style).
const interests = [
  { icon: '🏊', label: 'Swimming' },
  { icon: '🥾', label: 'Trekking' },
  { icon: '🚴', label: 'Biking' },
  { icon: '✈️', label: 'Travel' },
  { icon: '📷', label: 'Photography' },
  { icon: '🏓', label: 'Table Tennis' },
]

export default function Interests() {
  return (
    <section id="interests">
      <h2 className="section-title">Beyond Code</h2>
      <div className="skills">
        {interests.map((item) => (
          <span className="skill" key={item.label}>
            <span className="interest-icon">{item.icon}</span> {item.label}
          </span>
        ))}
      </div>
    </section>
  )
}

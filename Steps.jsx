import { steps } from '../data/site.js'

export default function Steps() {
  return (
    <section className="section section--tile" id="how">
      <div className="wrap split">
        <div className="split__head">
          <h2>How it works</h2>
          <p>No contracts, no advance payment. You only pay once the work is done.</p>
        </div>
        <ol className="steps">
          {steps.map((s) => (
            <li key={s.title}>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

import { faq } from '../data/site.js'

export default function Faq() {
  return (
    <section className="section section--tile" id="faq">
      <div className="wrap split">
        <div className="split__head">
          <h2>Questions people ask us</h2>
        </div>
        <div className="faq">
          {faq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

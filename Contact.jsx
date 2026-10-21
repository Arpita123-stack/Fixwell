import { business, areas } from '../data/site.js'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap contact__grid">
        <div>
          <h2>Easiest way to reach us is the phone</h2>
          <a className="contact__phone" href={business.phoneLink}>
            {business.phone}
          </a>
          <p className="contact__sub">
            {business.hours}. If nobody picks up we are on a job, so leave a message or send a
            WhatsApp and we will call back.
          </p>
          <a
            className="btn btn--ghost"
            href={`https://wa.me/${business.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            Message on WhatsApp
          </a>
        </div>
        <div>
          <h3>Where we work</h3>
          <ul className="areas">
            {areas.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <h3 className="contact__office">Our shop</h3>
          <p>{business.address}</p>
        </div>
      </div>
    </section>
  )
}

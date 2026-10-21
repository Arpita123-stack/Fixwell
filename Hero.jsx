import { business, heroFacts } from '../data/site.js'
import JobCard from './JobCard.jsx'

export default function Hero({ serviceId, onServiceChange }) {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <h1>Plumbing, electrical, AC and cleaning. One phone number for all of it.</h1>
          <p className="hero__lead">
            We are a family-run team and we only work in the neighbourhoods listed
            further down, so someone is usually close by. Call us, or fill in the
            job card and we will ring you back within {business.callbackMinutes} minutes.
          </p>
          <ul className="hero__facts">
            {heroFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
          <div className="hero__actions">
            <a className="btn btn--yellow" href={business.phoneLink}>
              Call {business.phone}
            </a>
            <a
              className="btn btn--ghost"
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
        <div className="hero__card">
          <JobCard serviceId={serviceId} onServiceChange={onServiceChange} />
        </div>
      </div>
    </section>
  )
}

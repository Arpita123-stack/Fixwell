import { business } from '../data/site.js'

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap site-header__row">
        <a className="brand" href="#top">
          <span className="brand__mark" aria-hidden="true" />
          {business.name}
        </a>
        <nav className="nav" aria-label="Main">
          <a href="#rates">Prices</a>
          <a href="#how">How it works</a>
          <a href="#about">About us</a>
          <a href="#faq">Questions</a>
        </nav>
        <a className="btn btn--yellow btn--small" href={business.phoneLink}>
          Call<span className="call-number">&nbsp;{business.phone}</span>
        </a>
      </div>
    </header>
  )
}

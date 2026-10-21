import { business } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__row">
        <p>
          &copy; {new Date().getFullYear()} {business.name}
        </p>
        <p>Prices are starting prices. The final price is agreed with you before work begins.</p>
      </div>
    </footer>
  )
}

import { business, money, services } from '../data/site.js'

export default function Rates({ onChoose }) {
  return (
    <section className="section" id="rates">
      <div className="wrap">
        <div className="section__head">
          <h2>What we charge</h2>
          <p>
            These are starting prices for the jobs we do most. The technician gives you the real
            price once he has seen the problem, and you can say no. The visit charge is{' '}
            {money(business.visitCharge)}.
          </p>
        </div>

        <table className="rates">
          <caption className="sr-only">Services, starting prices and usual visit times</caption>
          <thead>
            <tr>
              <th scope="col">Job</th>
              <th scope="col">What it covers</th>
              <th scope="col">From</th>
              <th scope="col">Usually takes</th>
              <th scope="col">
                <span className="sr-only">Book</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {services.map((s) => (
              <tr key={s.id}>
                <th scope="row">{s.name}</th>
                <td>{s.covers}</td>
                <td className="price">{money(s.from)}</td>
                <td data-label="Usually takes">{s.time}</td>
                <td className="action">
                  <button type="button" className="btn btn--outline btn--small" onClick={() => onChoose(s.id)}>
                    Book {s.name.toLowerCase()}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

import { about } from '../data/site.js'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about">
        <div>
          <h2>{about.heading}</h2>
          {about.paragraphs.map((p) => (
            <p className="about__text" key={p}>
              {p}
            </p>
          ))}
        </div>
        <aside className="wont">
          <h3>{about.wontDoHeading}</h3>
          <ul>
            {about.wontDo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>{about.wontDoNote}</p>
        </aside>
      </div>
    </section>
  )
}

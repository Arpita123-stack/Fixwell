import { useEffect, useId, useRef, useState } from 'react'
import { business, services, areas, slots } from '../data/site.js'
import { sendJob } from '../api.js'

const blank = { name: '', phone: '', area: areas[0], slot: slots[0], problem: '' }

function makeTicket() {
  return `${business.ticketPrefix}-${Math.floor(1000 + Math.random() * 9000)}`
}

export default function JobCard({ serviceId, onServiceChange }) {
  const uid = useId()
  const [form, setForm] = useState(blank)
  const [errors, setErrors] = useState({})
  const [busy, setBusy] = useState(false)
  const [job, setJob] = useState(null)
  const doneHeading = useRef(null)

  // After booking, move focus to the confirmation so screen readers announce it.
  useEffect(() => {
    if (job) doneHeading.current?.focus()
  }, [job])

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))
  const fieldId = (key) => `${uid}-${key}`

  async function handleSubmit(e) {
    e.preventDefault()

    const found = {}
    if (!form.name.trim()) found.name = 'Please tell us your name.'
    if (form.phone.replace(/\D/g, '').length < 10) {
      found.phone = 'We need a 10-digit mobile number to ring you back.'
    }
    setErrors(found)
    const firstBad = Object.keys(found)[0]
    if (firstBad) {
      document.getElementById(fieldId(firstBad))?.focus()
      return
    }

    setBusy(true)
    const service = services.find((s) => s.id === serviceId)
    const draft = {
      ticket: makeTicket(),
      service: service.name,
      name: form.name.trim(),
      phone: form.phone.trim(),
      area: form.area,
      slot: form.slot,
      problem: form.problem.trim(),
    }
    const { delivered } = await sendJob(draft)
    setBusy(false)
    setJob({ ...draft, delivered })
  }

  function startAgain() {
    setJob(null)
    setForm(blank)
    setErrors({})
  }

  if (job) {
    const first = job.name.split(' ')[0]
    const message =
      `Hello ${business.name}, job ${job.ticket}.\n` +
      `${job.service} in ${job.area}, ${job.slot.toLowerCase()}.\n` +
      (job.problem ? `${job.problem}\n` : '') +
      `${job.name}, ${job.phone}`

    return (
      <div className="jobcard jobcard--done" id="book">
        <div className="jobcard__head">
          <h2 ref={doneHeading} tabIndex={-1}>
            Thanks, {first}
          </h2>
          <p className="jobcard__no">
            Job no. <strong>{job.ticket}</strong>
          </p>
        </div>
        <div className="jobcard__body">
          <p className="stamp">{job.delivered ? 'Booked' : 'Ready to send'}</p>
          <dl className="summary">
            <div>
              <dt>Job</dt>
              <dd>{job.service}</dd>
            </div>
            <div>
              <dt>Where</dt>
              <dd>{job.area}</dd>
            </div>
            <div>
              <dt>When</dt>
              <dd>{job.slot}</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>{job.phone}</dd>
            </div>
          </dl>
          <p className="jobcard__note">
            {job.delivered
              ? `We will ring you on ${job.phone} within ${business.callbackMinutes} minutes to confirm.`
              : 'This card has not reached us yet. Send it on WhatsApp and we will reply as soon as we see it.'}
          </p>
        </div>
        <div className="jobcard__perf" aria-hidden="true" />
        <div className="jobcard__stub">
          <a
            className="btn btn--primary"
            href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noreferrer"
          >
            Send on WhatsApp
          </a>
          <button type="button" className="btn btn--outline" onClick={startAgain}>
            Book another visit
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="jobcard" id="book">
      <form onSubmit={handleSubmit} noValidate aria-labelledby={fieldId('title')}>
        <div className="jobcard__head">
          <h2 id={fieldId('title')}>Book a visit</h2>
          <p className="jobcard__no">Job no. to be filled in by us</p>
        </div>

        <div className="jobcard__body">
          <div className="field">
            <label htmlFor={fieldId('service')}>Job type</label>
            <select
              id={fieldId('service')}
              value={serviceId}
              onChange={(e) => onServiceChange(e.target.value)}
            >
              {services.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor={fieldId('problem')}>What is wrong? (optional)</label>
            <textarea
              id={fieldId('problem')}
              rows={2}
              value={form.problem}
              onChange={set('problem')}
              placeholder="The tap under the kitchen sink keeps dripping"
            />
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor={fieldId('name')}>Your name</label>
              <input
                id={fieldId('name')}
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={set('name')}
                aria-invalid={errors.name ? 'true' : undefined}
                aria-describedby={errors.name ? fieldId('name-error') : undefined}
              />
              {errors.name && (
                <p className="field__error" id={fieldId('name-error')}>
                  {errors.name}
                </p>
              )}
            </div>
            <div className="field">
              <label htmlFor={fieldId('phone')}>Mobile number</label>
              <input
                id={fieldId('phone')}
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={set('phone')}
                aria-invalid={errors.phone ? 'true' : undefined}
                aria-describedby={errors.phone ? fieldId('phone-error') : undefined}
              />
              {errors.phone && (
                <p className="field__error" id={fieldId('phone-error')}>
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          <div className="field">
            <label htmlFor={fieldId('area')}>Area</label>
            <select id={fieldId('area')} value={form.area} onChange={set('area')}>
              {areas.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>

          <fieldset className="field">
            <legend>When do you need us?</legend>
            <div className="slots">
              {slots.map((s) => (
                <label className="slot" key={s}>
                  <input
                    type="radio"
                    name={`${uid}-slot`}
                    value={s}
                    checked={form.slot === s}
                    onChange={set('slot')}
                  />
                  <span>{s}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="jobcard__perf" aria-hidden="true" />
        <div className="jobcard__stub">
          <p>
            We ring you back within {business.callbackMinutes} minutes during working hours ({business.hours}).
          </p>
          <button type="submit" className="btn btn--primary" disabled={busy}>
            {busy ? 'Sending…' : 'Book this visit'}
          </button>
        </div>
      </form>
    </div>
  )
}

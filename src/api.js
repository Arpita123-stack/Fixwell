// Where a filled-in job card goes.
//
// Out of the box nothing is sent anywhere: the card is shown back to the
// customer with a button that opens WhatsApp with the details filled in.
//
// To receive bookings, create a file called .env in the project root with
//   VITE_JOBS_ENDPOINT=https://your-server.example/jobs
// The card will then POST the job as JSON to that address. Any form service
// that accepts a JSON POST (Formspree, Getform, your own API) will work.

const endpoint = import.meta.env.VITE_JOBS_ENDPOINT

export async function sendJob(job) {
  if (!endpoint) return { delivered: false }
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(job),
    })
    return { delivered: res.ok }
  } catch {
    return { delivered: false }
  }
}

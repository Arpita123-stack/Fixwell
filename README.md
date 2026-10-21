# Fix Well: local service provider website

A one-page React site (built with Vite) for a family-run home repair and cleaning business.
Sections: header with phone button, hero with a "job card" booking form, rate card, how it works,
about us, questions, contact.

## Run it

You need Node 20.19 or newer.

```
npm install
npm run dev
```

Open the address it prints (usually http://localhost:5173).
To make the files you upload to a host: `npm run build`, then upload the `dist` folder.

## Make it yours

Almost everything you will want to change is in **`src/data/site.js`**:
business name, phone and WhatsApp number, hours, prices, services, areas, the how-it-works steps,
the about text and the questions.

**All names, numbers, prices and stories in that file are sample text.** The founders' story,
"since 2011", the prices and the areas are made up. Replace them with your real details.
Also change the title and description in `index.html`.

Colours and fonts are at the top of `src/styles.css`.

## Getting bookings

Out of the box the job card does not send anything anywhere. After filling it in, the customer
sees a summary and a button that opens WhatsApp with the details already typed.

To receive bookings directly, create a file called `.env` next to `package.json`:

```
VITE_JOBS_ENDPOINT=https://your-server.example/jobs
```

The card will then POST each job to that address as JSON
(`ticket, service, name, phone, area, slot, problem`). Any form service that accepts a JSON POST
will work. See `src/api.js`.

## Reviews

There is no reviews section on purpose. Add one once you have real customer reviews
(with their permission) rather than filling it with sample ones.

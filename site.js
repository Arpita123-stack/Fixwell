// Everything you will want to change lives in this file.
// All names, numbers, prices and stories below are SAMPLE TEXT.
// Replace them with your own before the site goes live.

export const business = {
  name: 'FixWell',
  phone: '+91 98765 43210',
  phoneLink: 'tel:+919876543210',
  whatsapp: '919876543210', // country code + number, digits only
  hours: 'Monday to Saturday, 8 am to 8 pm',
  address: 'Shop 14, Main Market Road',
  currency: '₹',
  visitCharge: 199,
  warrantyDays: 30,
  callbackMinutes: 15,
  ticketPrefix: 'MB', // job numbers look like MB-4821
}

export const money = (n) => business.currency + n.toLocaleString('en-IN')

export const heroFacts = [
  `Visit charge is ${money(business.visitCharge)}. We take it off the bill if you go ahead with the work.`,
  'You hear the price before we start, never after.',
  `${business.warrantyDays} days warranty on every repair.`,
]

export const services = [
  {
    id: 'plumbing',
    name: 'Plumbing',
    covers: 'Leaking taps and pipes, blocked drains, flush tanks, geyser and pump fitting.',
    from: 299,
    time: '45 minutes to 2 hours',
  },
  {
    id: 'electrical',
    name: 'Electrical',
    covers: 'Fans, switches, MCBs that keep tripping, new points, light fittings.',
    from: 249,
    time: '30 minutes to 90 minutes',
  },
  {
    id: 'ac',
    name: 'AC service',
    covers: 'Jet wash service, gas top-up, fitting and removal.',
    from: 599,
    time: 'About an hour per AC',
  },
  {
    id: 'cleaning',
    name: 'Deep cleaning',
    covers: 'Kitchen, bathrooms or the whole house. We bring our own machines and supplies.',
    from: 1499,
    time: '3 to 8 hours',
  },
  {
    id: 'carpentry',
    name: 'Carpentry',
    covers: 'Door locks and hinges, curtain rods, furniture assembly, small repairs.',
    from: 349,
    time: '1 to 3 hours',
  },
  {
    id: 'painting',
    name: 'Painting touch-ups',
    covers: 'Damp patches, cracks, one wall or one room.',
    from: 899,
    time: 'Half a day',
  },
]

export const slots = ['Within 2 hours', 'This evening', 'Tomorrow morning', 'Tomorrow evening']

export const areas = [
  'Sector 4',
  'Sector 7',
  'Sector 11',
  'Sector 15',
  'Old Town',
  'Market Road',
  'Lake View',
  'Green Park',
]

export const steps = [
  {
    title: 'You call, or fill in the job card',
    text: 'Tell us what is wrong, even roughly. A photo on WhatsApp helps a lot.',
  },
  {
    title: 'We ring you back',
    text: `Within ${business.callbackMinutes} minutes in working hours. We confirm the time and tell you who is coming.`,
  },
  {
    title: 'We look first, then give you a price',
    text: `The technician checks the problem and quotes on the spot. If you say no, you only pay the ${money(business.visitCharge)} visit charge.`,
  },
  {
    title: 'We fix it and clean up after',
    text: `You pay when the work is done, cash or UPI. The repair is covered for ${business.warrantyDays} days.`,
  },
]

export const about = {
  heading: 'Who you will be dealing with',
  paragraphs: [
    'Rakesh is a plumber and his brother Imran is an electrician. In 2011 they got tired of working for contractors who cared more about finishing fast than finishing properly, so they started doing it themselves.',
    'There are eight of us now. Rakesh and Imran still answer the phone most mornings, and they still turn up on jobs when something tricky comes in.',
  ],
  wontDoHeading: 'What we do not do',
  wontDo: [
    'Building work or structural repairs.',
    'Wiring a whole house from scratch.',
    'Anything involving gas pipelines.',
    'Jobs that need a licence we do not hold.',
  ],
  wontDoNote: 'If you ask for one of these we will say so straight away, and point you to someone who does it if we can.',
}

export const faq = [
  {
    q: 'Do you charge just for coming out?',
    a: `The visit charge is ${money(business.visitCharge)}. If you go ahead with the work, we take it off the bill.`,
  },
  {
    q: 'Do you work on Sundays?',
    a: 'For emergencies only, like a burst pipe or no power in the house. Call us and we will tell you if someone can come.',
  },
  {
    q: 'What if the problem comes back?',
    a: `Call us. Anything we repaired is covered for ${business.warrantyDays} days, and we come back at no charge.`,
  },
  {
    q: 'Do you bring the parts?',
    a: 'We carry the common ones: taps, switches, MCBs, flush fittings. For anything bigger we show you the price before we buy it.',
  },
  {
    q: 'Which areas do you cover?',
    a: `${areas.join(', ')}. If you are close to these, call and ask.`,
  },
]

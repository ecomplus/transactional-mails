'use strict'

/**
 * Smoke test: renders every order status template against the sample
 * order with different shipping line shapes (with/without `delivery_time`
 * and `posting_deadline`, pickup, mail and carrier labels) and fails on
 * render errors or on broken deadline sentences (empty number before unit).
 *
 * Run with `npm test`.
 */

const templates = require('../src/')
const store = require('./data/store.json')
const customer = require('./data/customer.json')
const baseOrder = require('./data/order.json')

const orderTemplates = [
  'new_order', 'pending', 'authorized', 'underAnalysis', 'paid', 'partiallyPaid',
  'inProduction', 'inSeparation', 'readyForShipping', 'invoiceIssued', 'shipped',
  'partiallyShipped', 'delivered', 'partiallyDelivered'
]

const scenarios = {
  'carrier': { label: 'PAC' },
  'pickup': { label: 'Retirar na loja' },
  'pickup-lowercase': { label: 'retirar na loja' },
  'mail': { label: 'E-mail' },
  'carrier-no-posting-deadline': { label: 'PAC', omit: ['posting_deadline'] },
  'carrier-no-delivery-time': { label: 'PAC', omit: ['delivery_time'] },
  'carrier-no-deadlines': { label: 'PAC', omit: ['delivery_time', 'posting_deadline'] },
  'pickup-no-deadlines': { label: 'Retirar na loja', omit: ['delivery_time', 'posting_deadline'] },
  'mail-no-deadlines': { label: 'E-mail', omit: ['delivery_time', 'posting_deadline'] },
  'no-label-no-deadlines': { label: undefined, omit: ['delivery_time', 'posting_deadline'] }
}

const langs = ['pt_br', 'en_us']
const toText = html => html
  .replace(/<style[\s\S]*?<\/style>/g, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
// "em até dias", "in days", "within working days"... (unit without number)
const brokenSentence = /(em até|em|in|within)\s+(dias?( úteis| útil)?|(working )?days?)\b/i

const run = async () => {
  let failures = 0
  for (const [scenario, { label, omit = [] }] of Object.entries(scenarios)) {
    for (const lang of langs) {
      for (const method of orderTemplates) {
        const order = JSON.parse(JSON.stringify(baseOrder))
        order.shipping_method_label = label
        order.shipping_lines.forEach(shipping => omit.forEach(field => delete shipping[field]))
        const id = `${scenario} / ${lang} / ${method}`
        try {
          const text = toText(await templates[method](store, customer, order, lang))
          const broken = text.match(brokenSentence)
          if (broken) {
            failures++
            console.error(`FAIL ${id}: broken sentence "…${text.slice(Math.max(0, broken.index - 40), broken.index + 40)}…"`)
          }
        } catch (err) {
          failures++
          console.error(`FAIL ${id}: ${err.message.split('\n')[0]}`)
        }
      }
    }
  }
  const total = Object.keys(scenarios).length * langs.length * orderTemplates.length
  console.log(`${total - failures}/${total} renders OK`)
  process.exit(failures ? 1 : 0)
}

run()

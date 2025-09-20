/**
 * https://github.com/ecomclub/transactional-mails
 * @author E-Com Club <ti@e-com.club>
 * @license MIT
 */

'use strict'

// Node.js i18n support
require('./intl')

// template render function
const render = require('./lib/render')

/**
 * Default transactional email templates for E-Com Plus stores.
 * @module @ecomplus/transactional-mails
 * @exports {@link templates}
 * @example
 * const transactionalMails = require('@ecomplus/transactional-mails')
 */

module.exports = {

  /**
     * @method
     * @memberof transactionalMails
     * @description Returns HTML markup for a generic email.
     * @param {object} store - Store body object
     * @param {object} message - Message object with email content
     * @param {string} message.title - Email title/headline
     * @param {string} [message.subtitle] - Optional subtitle below the title
     * @param {string} [message.body] - Main message body text (may have HTML tags)
     * @param {string} [message.button_text] - Text for the call-to-action button
     * @param {string} [message.button_link] - URL for the call-to-action button
     * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
     * @returns {Promise}
     *
     * @example

  const message = {
    "title": "Olá",
    "subtitle": "Subtítulo",
    "body": "Texto <b>bold</b>",
    "button_text": "Comprar",
    "button_link": "https://www.ecomplus.io/"
  }
  transactionalMails.generic(store, message, 'pt_br')
    .then(html => sendEmail(html, options))
    .catch(err => console.error(err))

     */

    generic (store, message, lang) {
      return render('generic', {
        ...message,
        store
      }, store, lang)
    },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for customer welcome email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [customMessage] - Custom text for the main template phrase
   * @returns {Promise}
   *
   * @example

transactionalMails.welcome(store, customer, 'pt_br', 'Hello {name}, welcome to our Shop!')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  welcome (store, customer, lang, customMessage) {
    return render('welcome', {
      store,
      customer,
      custom_message: customMessage
    }, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for abandoned cart email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} cart - Cart body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [customMessage] - Custom text for the main template phrase
   * @returns {Promise}
   *
   * @example

transactionalMails.abandonedCart(store, customer, cart, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  abandonedCart (store, customer, cart, lang, customMessage) {
    return render('abandoned-cart', {
      store,
      customer,
      cart,
      custom_message: customMessage
    }, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for pending payment email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [customMessage] - Custom text for the main template phrase
   * @returns {Promise}
   *
   * @example

transactionalMails.pending(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  pending (store, customer, order, lang, customMessage) {
    return render('pending', {
      store,
      customer,
      order,
      custom_message: customMessage
    }, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for delivered order email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [customMessage] - Custom text for the main template phrase
   * @returns {Promise}
   *
   * @example

transactionalMails.delivered(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  delivered (store, customer, order, lang, customMessage) {
    return render('delivered', {
      store,
      customer,
      order,
      custom_message: customMessage
    }, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for order shipped email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [customMessage] - Custom text for the main template phrase
   * @returns {Promise}
   *
   * @example

transactionalMails.shipped(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  shipped (store, customer, order, lang, customMessage) {
    return render('shipped', {
      store,
      customer,
      order,
      custom_message: customMessage
    }, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for payment unauthorized email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [customMessage] - Custom text for the main template phrase
   * @returns {Promise}
   *
   * @example

transactionalMails.unauthorized(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  unauthorized (store, customer, order, lang, customMessage) {
    return render('unauthorized', {
      store,
      customer,
      order,
      custom_message: customMessage
    }, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for order voided email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [customMessage] - Custom text for the main template phrase
   * @returns {Promise}
   *
   * @example

transactionalMails.voided(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  voided (store, customer, order, lang, customMessage) {
    return render('voided', {
      store,
      customer,
      order,
      custom_message: customMessage
    }, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for new order email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [customMessage] - Custom text for the main template phrase
   * @returns {Promise}
   *
   * @example

transactionalMails.underAnalysis(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  underAnalysis (store, customer, order, lang, customMessage) {
    return render('under_analysis', {
      store,
      customer,
      order,
      custom_message: customMessage
    }, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for partially paid order email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [customMessage] - Custom text for the main template phrase
   * @returns {Promise}
   *
   * @example

transactionalMails.partiallyPaid(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  partiallyPaid (store, customer, order, lang, customMessage) {
    return render('partially_paid', {
      store,
      customer,
      order,
      custom_message: customMessage
    }, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for paid order email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [customMessage] - Custom text for the main template phrase
   * @returns {Promise}
   *
   * @example

transactionalMails.paid(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  paid (store, customer, order, lang, customMessage) {
    return render('paid', {
      store,
      customer,
      order,
      custom_message: customMessage
    }, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for order in dispute email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [customMessage] - Custom text for the main template phrase
   * @returns {Promise}
   *
   * @example

transactionalMails.inDispute(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  inDispute (store, customer, order, lang, customMessage) {
    return render('in_dispute', {
      store,
      customer,
      order,
      custom_message: customMessage
    }, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for partially refunded email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [customMessage] - Custom text for the main template phrase
   * @returns {Promise}
   *
   * @example

transactionalMails.partiallyRefunded(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  partiallyRefunded (store, customer, order, lang, customMessage) {
    return render('partially_refunded', {
      store,
      customer,
      order,
      custom_message: customMessage
    }, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for refunded order email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [customMessage] - Custom text for the main template phrase
   * @returns {Promise}
   *
   * @example

transactionalMails.refunded(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  refunded (store, customer, order, lang, customMessage) {
    return render('refunded', {
      store,
      customer,
      order,
      custom_message: customMessage
    }, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for order invoice issued email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [customMessage] - Custom text for the main template phrase
   * @returns {Promise}
   *
   * @example

transactionalMails.invoiceIssued(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  invoiceIssued (store, customer, order, lang, customMessage) {
    return render('invoice_issued', {
      store,
      customer,
      order,
      custom_message: customMessage
    }, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for order in production email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [customMessage] - Custom text for the main template phrase
   * @returns {Promise}
   *
   * @example

transactionalMails.inProduction(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  inProduction (store, customer, order, lang, customMessage) {
    return render('in_production', {
      store,
      customer,
      order,
      custom_message: customMessage
    }, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for order in separation email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [customMessage] - Custom text for the main template phrase
   * @returns {Promise}
   *
   * @example

transactionalMails.inSeparation(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  inSeparation (store, customer, order, lang, customMessage) {
    return render('in_separation', {
      store,
      customer,
      order,
      custom_message: customMessage
    }, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for order ready for shipping email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [customMessage] - Custom text for the main template phrase
   * @returns {Promise}
   *
   * @example

transactionalMails.readyForShipping(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  readyForShipping (store, customer, order, lang, customMessage) {
    return render('ready_for_shipping', {
      store,
      customer,
      order,
      custom_message: customMessage
    }, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for partially shipped order email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [customMessage] - Custom text for the main template phrase
   * @returns {Promise}
   *
   * @example

transactionalMails.partiallyShipped(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  partiallyShipped (store, customer, order, lang, customMessage) {
    return render('partially_shipped', {
      store,
      customer,
      order,
      custom_message: customMessage
    }, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for partially delivered order email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [customMessage] - Custom text for the main template phrase
   * @returns {Promise}
   *
   * @example

transactionalMails.partiallyDelivered(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  partiallyDelivered (store, customer, order, lang, customMessage) {
    return render('partially_delivered', {
      store,
      customer,
      order,
      custom_message: customMessage
    }, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for order returned for exchange email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [customMessage] - Custom text for the main template phrase
   * @returns {Promise}
   *
   * @example

transactionalMails.returnedForExchange(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  returnedForExchange (store, customer, order, lang, customMessage) {
    return render('returned_for_exchange', {
      store,
      customer,
      order,
      custom_message: customMessage
    }, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for order received for exchange email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [customMessage] - Custom text for the main template phrase
   * @returns {Promise}
   *
   * @example

transactionalMails.receivedForExchange(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  receivedForExchange (store, customer, order, lang, customMessage) {
    return render('received_for_exchange', {
      store,
      customer,
      order,
      custom_message: customMessage
    }, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for returned order email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [customMessage] - Custom text for the main template phrase
   * @returns {Promise}
   *
   * @example

transactionalMails.returned(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  returned (store, customer, order, lang, customMessage) {
    return render('returned', {
      store,
      customer,
      order,
      custom_message: customMessage
    }, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for authorized payment email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [customMessage] - Custom text for the main template phrase
   * @returns {Promise}
   *
   * @example

  transactionalMails.authorized(store, customer, order, 'pt_br')
    .then(html => sendEmail(html, options))
    .catch(err => console.error(err))

     */

  authorized (store, customer, order, lang, customMessage) {
    return render('authorized', {
      store,
      customer,
      order,
      custom_message: customMessage
    }, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for new order email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [customMessage] - Custom text for the main template phrase
   * @returns {Promise}
   *
   * @example

  transactionalMails.authorized(store, customer, order, 'pt_br')
    .then(html => sendEmail(html, options))
    .catch(err => console.error(err))

     */

  new_order (store, customer, order, lang, customMessage) {
    return render('new_order', {
      store,
      customer,
      order,
      custom_message: customMessage
    }, store, lang)
  },

  /**
   * @method
   * @memberof promo
   * @description Returns HTML markup for item in promotion email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} product - product body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [customMessage] - Custom text for the main template phrase
   * @returns {Promise}
   *
   * @example

  transactionalMails.promo(store, customer, order, 'pt_br')
    .then(html => sendEmail(html, options))
    .catch(err => console.error(err))

     */

  promo (store, customer, product, lang, customMessage) {
    return render('promo', {
      store,
      customer,
      product,
      custom_message: customMessage
    }, store, lang)
  },

  /**
   * @method
   * @memberof stock
   * @description Returns HTML markup for item in stock email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [customMessage] - Custom text for the main template phrase
   * @returns {Promise}
   *
   * @example

  transactionalMails.stock(store, customer, order, 'pt_br')
    .then(html => sendEmail(html, options))
    .catch(err => console.error(err))

     */

  stock (store, customer, product, lang, customMessage) {
    return render('stock', {
      store,
      customer,
      product,
      custom_message: customMessage
    }, store, lang)
  }

}

/**
 * @namespace transactionalMails
 */

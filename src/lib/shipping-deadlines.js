'use strict'

/**
 * Builds a helper that formats the deadlines of a shipping line
 * ("3 dias úteis", "5 days"...) for the email templates.
 * Every value is `null` when the corresponding deadline is missing,
 * so templates can skip the whole sentence instead of printing
 * an empty number with a dangling unit.
 * @param {object} i18n - Dictionary for the current language
 * @returns {function(object): {posting: ?string, delivery: ?string, total: ?string}}
 */
module.exports = i18n => {
  const formatDays = (days, isWorkingDays) => {
    if (typeof days !== 'number' || isNaN(days)) {
      return null
    }
    const unit = isWorkingDays
      ? (days === 1 ? i18n.working_day : i18n.working_days)
      : (days === 1 ? i18n.day : i18n.days)
    return `${days} ${unit}`
  }

  return (shipping) => {
    const deliveryTime = (shipping && shipping.delivery_time) || null
    const postingDeadline = (shipping && shipping.posting_deadline) || null
    const deliveryDays = deliveryTime && typeof deliveryTime.days === 'number'
      ? deliveryTime.days
      : null
    const postingDays = postingDeadline && typeof postingDeadline.days === 'number'
      ? postingDeadline.days
      : null

    let total = null
    if (deliveryDays !== null || postingDays !== null) {
      // unit follows delivery time when available, posting deadline otherwise
      const isWorkingDays = deliveryDays !== null
        ? deliveryTime.working_days
        : postingDeadline.working_days
      total = formatDays((deliveryDays || 0) + (postingDays || 0), isWorkingDays)
    }

    return {
      // posting deadline only, eg.: "será postado em até <posting>"
      posting: postingDays !== null ? formatDays(postingDays, postingDeadline.working_days) : null,
      // delivery time only, eg.: package already shipped
      delivery: deliveryDays !== null ? formatDays(deliveryDays, deliveryTime.working_days) : null,
      // posting deadline + delivery time, eg.: "entrega prevista em até <total>"
      total
    }
  }
}

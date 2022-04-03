import {
  isValid,
  format,
  isBefore,
  subMonths,
  formatDistanceToNow,
} from 'date-fns'

export const convertToDistance = (date: string): string => {
  const dateObj = new Date(date)
  if (!isValid(dateObj)) return ''

  const before1Month = subMonths(new Date(), 1)

  // if date is before 1 month ago, return original day
  if (isBefore(dateObj, before1Month)) {
    return format(dateObj, 'yyyy-MM-dd')
  }

  // if date is after 1 month ago, return distance to now
  return formatDistanceToNow(dateObj) + ' ago'
}

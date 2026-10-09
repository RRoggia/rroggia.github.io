const MONTHS = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]

// Formats 'YYYY-MM-DD' strings without Date parsing, so the day never shifts with the timezone.
export default function formatDate( isoDate, { short = false } = {} ) {
  const match = /^(\d{4})-(\d{2})-(\d{2})/u.exec( isoDate || '' )
  if ( !match ) {
    return null
  }
  const [ , year, month, day ] = match
  const monthName = MONTHS[ Number( month ) - 1 ]
  return `${short ? monthName.slice( 0, 3 ) : monthName} ${Number( day )}, ${year}`
}

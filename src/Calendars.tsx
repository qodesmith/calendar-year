import {days, months} from './constants'

type Props = {
  year: number
}

export default function Calendars({year}: Props) {
  return (
    <ol className="mx-auto grid h-[11in] w-[8.5in] grid-cols-[repeat(3,1fr)] grid-rows-[repeat(4,1fr)]">
      {months.map((month, i) => {
        const daysInMonth = new Date(year, i + 1, 0).getDate()
        const offset = new Date(year, i, 1).getDay()

        return (
          <li key={month} className="border">
            <h3 className="text-center text-xl font-bold">{month}</h3>
            <ol className="grid grid-cols-[repeat(7,1fr)] text-center">
              {days.map(day => (
                <li key={day} className="text-sm italic">
                  {day.slice(0, 3)}
                </li>
              ))}
              {Array.from({length: daysInMonth}).map((_, i) => {
                const cls = i === 0 ? getOffsetClassName(offset) : undefined

                return (
                  <li key={i} className={cls}>
                    {i + 1}
                  </li>
                )
              })}
            </ol>
          </li>
        )
      })}
    </ol>
  )
}

/**
 * By explicitly returning strings, we gain access to "dynamically" setting the
 * Tailwind classes. Trying something like `col-start-${num}` doesn't work.
 */
function getOffsetClassName(offset: number) {
  switch (offset) {
    case 1:
      return 'col-start-2'
    case 2:
      return 'col-start-3'
    case 3:
      return 'col-start-4'
    case 4:
      return 'col-start-5'
    case 5:
      return 'col-start-6'
    case 6:
      return 'col-start-7'
    default:
      return undefined
  }
}

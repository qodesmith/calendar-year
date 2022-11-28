import {useState} from 'react'
import Calendars from './Calendars'
import YearInputSection from './YearInputSection'

export default function App() {
  const [year, setYear] = useState<number>(() => new Date().getFullYear())

  return (
    <div className="py-8">
      <header className="prose max-w-none pb-8 text-center dark:prose-invert">
        <h1 className="mb-2">Calendar Year {year}</h1>
        <YearInputSection onYearChange={setYear} />
      </header>
      <Calendars year={year} />
    </div>
  )
}

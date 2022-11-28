import {useState} from 'react'
import YearInputSection from './YearInputSection'

export default function App() {
  const [year, setYear] = useState<number>(() => new Date().getFullYear())

  return (
    <div className="prose max-w-none text-center dark:prose-invert">
      <header>
        <h1>Calendar Year {year}</h1>
        <YearInputSection onYearChange={setYear} />
      </header>
    </div>
  )
}

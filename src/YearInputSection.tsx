import {BaseSyntheticEvent, useCallback, useRef, useState} from 'react'

type PropsType = {
  onYearChange: (year: number) => void
}

export default function YearInputSection({onYearChange}: PropsType) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [year, setYear] = useState<string>(() => `${new Date().getFullYear()}`)
  const handleOnChange = useCallback((e: BaseSyntheticEvent) => {
    setYear(e.target.value.replace(/[^\d]/, '')) // https://bit.ly/3ikQhGd
  }, [])
  const handleOnClick = useCallback(() => {
    if (inputRef.current === null) return

    const {value} = inputRef.current
    const yearValue = Number(value)

    if (
      value === '' ||
      Number.isNaN(yearValue) ||
      yearValue < 1 ||
      yearValue > 9999
    ) {
      return
    }

    onYearChange(yearValue)
  }, [])

  return (
    <div className="flex justify-center">
      <input
        type="number"
        min={1}
        max={9999}
        step={1}
        value={year}
        ref={inputRef}
        onChange={handleOnChange}
        className="py rounded-lg px-3"
      />
      <button onClick={handleOnClick} className="ml-2">
        Change Year
      </button>
    </div>
  )
}

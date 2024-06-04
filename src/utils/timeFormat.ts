export function setUTCTime(time: number | string | Date = new Date()) {
  const _time = new Date(time)
  const year = _time.getFullYear()
  const month = _time.getMonth()
  const date = _time.getDate()
  return Date.UTC(year, month, date)
}

export function getTimestamp(
  time: string | string | Date | number = new Date(),
) {
  const _date = new Date(time)
  return _date.getTime()
}

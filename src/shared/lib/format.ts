export function formatYearRange(startYear: number, endYear = new Date().getFullYear()): string {
  if (startYear >= endYear) {
    return `${endYear}`
  }

  return `${startYear}-${endYear}`
}

export function toSentenceList(items: string[]): string {
  if (items.length <= 1) {
    return items[0] ?? ''
  }

  if (items.length === 2) {
    return `${items[0]} and ${items[1]}`
  }

  return `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`
}

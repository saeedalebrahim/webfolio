import { useEffect, useState } from 'react'
import { getPortfolioData } from '../services/portfolioService'
import type { PortfolioData } from '../types'

type PortfolioState = {
  data: PortfolioData | null
  loading: boolean
  error: string | null
}

export function usePortfolioData() {
  const [state, setState] = useState<PortfolioState>({
    data: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    let active = true

    getPortfolioData()
      .then((data) => {
        if (!active) {
          return
        }

        setState({ data, loading: false, error: null })
      })
      .catch(() => {
        if (!active) {
          return
        }

        setState({ data: null, loading: false, error: 'Failed to load portfolio data.' })
      })

    return () => {
      active = false
    }
  }, [])

  return state
}

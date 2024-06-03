'use client' // Error components must be Client Components
 
import ErrorPage from '@/components/common/error'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
 
  return (
    <ErrorPage error={error} reset={reset}/>
  )
}
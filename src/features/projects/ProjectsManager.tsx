import * as React from 'react'
import { useGetV3ProjectsQuery } from '../../app/services/api.generated'

export default function ProjectsManager() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetV3ProjectsQuery({
    page: 1
  })

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
        <h3>Projects </h3>
          </>
      ) : null}
    </div>
  )
}
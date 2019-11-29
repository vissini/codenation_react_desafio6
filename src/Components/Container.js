import React from 'react'

const Container = ({repositories}) => {

  const showNotFound = () => {
    return (
      <div data-test="nao-encontrado">Not Found - 404</div>
    )
  }

  const showEmpty = () => {
    return (
      <div data-test="sem-repositorios">Empty</div>
    )
  }

  const showRepositories = () => {
    if (repositories === null) {
      return showNotFound()
    } else {
      if (repositories.length > 0) {
        return (
          repositories.map(dt => (
            <div key={dt.id} data-test="repositorio">
              {dt.name} - {dt.html_url} - {dt.stargazers_count}
            </div>
          ))
        )
      } else {
        return showEmpty()
      }
    }
  }

  return(
    <div className="card" style={{  backgroundColor:'#eeeeee'}}>
      {showRepositories()}
    </div>
  )
}

export {Container}
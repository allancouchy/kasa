import { Link } from 'react-router-dom'
import { ErrorWrapper } from '../styled-components/Error'

const Error = () => {
  return (
    <main>
      <ErrorWrapper>
        <div>
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
        </div>
        <Link to={'/'}>Retournez à la page d'accueil</Link>
      </ErrorWrapper>
    </main>
  )
}

export default Error

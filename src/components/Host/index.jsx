const Host = ({ name, picture }) => {
  return (
    <div>
      <p data-testid='host-name'>{name}</p>
      <img src={picture} alt={name} data-testid='host-picture' />
    </div>
  )
}

export default Host

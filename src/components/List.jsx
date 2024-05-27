const List = ({ items = [] }) => (
  <div>
    {items.map((item, index) => (
      <p key={index} data-testid={'list-item'}>{item}</p>
    ))}
  </div>
)

export default List

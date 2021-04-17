export default function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element" onClick={handleClick}>
      <img src={props.card.link} alt={props.card.name} className="element__image" />
      <button className="element__remove" name="element__remove" type="button"></button>
      <div className="element__caption">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button className="element__like" name="element__like" type="button"></button>
          <p className="element__like-count">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

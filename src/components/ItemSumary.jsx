// Mostramos los ítems del summary

export const ItemSumary = ({ iconItem, textItem, scoreItem }) => {
  return (
    <article className={textItem.toLowerCase()}>
        <img src={iconItem} alt={textItem.toLowerCase()} />
        <p>{textItem}</p>
        <p>{scoreItem}<span> / 100</span></p>
    </article>
  )
}

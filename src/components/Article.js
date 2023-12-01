function Article({ title, date = "January 1, 1970", preview, minutes }) {
  if (minutes <= 30) {
    return( <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <small>{minutes}</small>
      <p>{preview}</p>
    </article>)
  }
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <small>{minutes}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;

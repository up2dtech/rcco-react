function Service(props) {
  return (
    <>
      <img src={props.src} alt={props.alt} />
      <p>{props.description}</p>
    </>
  );
}
export default Service;

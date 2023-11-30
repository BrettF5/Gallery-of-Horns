function HornedBeast({ key, title, imageUrl, description }) {
    return (
      <div key={key}>
        <h2>{title}</h2>
        <img src={imageUrl} alt={title} />
        <p>{description}</p>
      </div>
    );
  }
  
  export default HornedBeast;
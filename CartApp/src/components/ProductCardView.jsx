export const ProductCardView = ({ handler, id, name, description, price }) => {
  const onAddProduct = (product) => {
    // console.log(product);
    handler(product);
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">$ {price}</p>
          <button
            onClick={() => onAddProduct({ id, name, description, price })}
            className="btn btn-primary"
          >
            Añadir
          </button>
        </div>
      </div>
    </>
  );
};

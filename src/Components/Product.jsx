

const Product = ({product,handleCard}) => {
    const {title,price,description,image} = product
    return (
        <div className="card border-2 w-full border-sky-500 rounded-xl p-4">
            <img className='' src={image} alt="" />
            <h1 className='text-2xl font-bold'>{title}</h1>
            <p className='text-xl'>{description}</p>
            <div className="card-footer flex justify-between">
              <h3 className='text-xl text-orange-600 font-bold'>Price: {price} $</h3>
              <button onClick={()=>handleCard(product)} className='bg-green-400 p-2 text-xl font-bold rounded-xl '>Add To Cart</button>
            </div>
          </div>
    );
};

export default Product;
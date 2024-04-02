import './style.css'
async function getDetails(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return await res.json();
}

export default async function Details({ params }) {
    const data = await getDetails(params.id);
  
    return (
        <div className="text-center details__div">
            <img className="product__image" src={data.image} style={{ width: '400px', height: '500px', marginBottom: '10px' }} />
            <h1>{data.title}</h1>
            <h2>price: {data.price}</h2>
            <h2>Description: {data.description}</h2>
            <h2>Category: {data.category}</h2>
            <h3>Rate: {data.rating.rate}</h3>
            <h3>Count: {data.rating.count}</h3>
        </div>
    );
}

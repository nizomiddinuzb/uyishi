'use client'
import './style.css'
import Image from 'next/image';
import Link from "next/link";

async function getData() {
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
}

export default async function Links() {
    const data = await getData();
    return (
        <body>
            <header>
                <nav>
                    <ul className="nav__ul">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <image
                        src="/logo.png"
                        alt="logo"
                        width="100"
                        height="100"
                    />
                    <ul className='nav__ul'>
                        <li><a href="#">Archive</a></li>
                        <li><a href="#">Pro Version</a></li>
                        <li><a href="#">Download</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', justifyContent: 'center' }}>
                    {data.map(product => (
                        <div className="api__div" key={product.id} style={{ textAlign: 'center' }}>
                            <img className="product__image" src={product.image} alt={product.title} style={{ width: '200px', height: '200px', marginBottom: '10px' }} />
                            <Link className='asosiy__link' href={`/links/${product.id}`}>{product.title}</Link>
                        </div>
                    ))}
                </section>
            </main>
        </body>
    );
}

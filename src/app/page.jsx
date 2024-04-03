'use client'
import Link from "next/link"

export default function Home() {
    return(
        <main>
            <Link className="links" href="/links">Links</Link>
            <p>Links ni ustiga bosing 👌</p>
            <h1>Home page</h1>
        </main>
    )
}
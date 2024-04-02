'use client'

import Link from "next/link"

export default function Home() {
    return(
        <main>
            <Link href="/links">Links</Link>
            <h1>Home page</h1>
        </main>
    )
}
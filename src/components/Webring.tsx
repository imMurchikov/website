"use client"

import { useEffect, useState } from "react"

interface Site {
    id: number
    name: string
    url: string
    favicon: string | null
}

interface SiteData {
    prev: Site
    curr: Site
    next: Site
}

export default function Webring() {
    const [data, setData] = useState<SiteData | null>(null)

    useEffect(() => {
        fetch("https://webring.otomir23.me/murchikov/data")
            .then((r) => r.json())
            .then(setData)
            .catch(() => setData(null))
    }, [])

    const renderLink = (site: Site) => (
        <a
            key={site.id}
            href={site.url}
            className="ascii-link"
            target="_blank"
            rel="noopener noreferrer"
        >
            {site.favicon && (
                <img
                    src={site.favicon}
                    alt=""
                    width={16}
                    height={16}
                    className="webring-favicon"
                    onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none"
                    }}
                />
            )}
            <span>{site.name}</span>
        </a>
    )

    if (!data) {
        return (
            <div className="webring-container-fallback">
                <a href="https://webring.otomir23.me/murchikov/prev" className="ascii-link">
                    prev
                </a>
                <a href="https://webring.otomir23.me/">[otoring]</a>
                <a href="https://webring.otomir23.me/murchikov/next" className="ascii-link">
                    next
                </a>
            </div>
        )
    }

    return (
        <div className="webring-container">
            {renderLink(data.prev)}
            <a href="https://webring.otomir23.me/">[otoring]</a>
            {renderLink(data.next)}
        </div>
    )
}
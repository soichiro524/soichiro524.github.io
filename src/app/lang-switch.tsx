'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function LangSwitch() {
    const pathname = usePathname()
    const [lang, path] = pathname.substring(1).split('/', 2)
    const targetLang = lang === 'ja' ? 'en' : 'ja'
    const href = `/${targetLang}/${path || ''}`

    return (
        <div
            style={{
                position: "fixed",
                top: 16,
                right: 16,
                zIndex: 1000,
                display: "flex",
                gap: "8px",
            }}
        >
            <Link href={href}>
                <button
                    type="button"
                    style={{
                        padding: "4px 12px",
                        borderRadius: "9999px",
                        border: "none",
                        background: "#4f8cff",
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                        cursor: "pointer",
                        transition: "background 0.2s, transform 0.1s",
                    }}
                >
                    {targetLang === 'ja' ? '日本語' : 'English'}
                </button>
            </Link>
        </div>
    )
}

export function Navigation() {
    const pathname = usePathname()
    const [lang] = pathname.substring(1).split('/')

    return (
        <nav>
              <Link href={`/${lang}/about`}>About</Link>
              <Link href={`/${lang}/papers`}>Papers</Link>
              <Link href={`/${lang}/presentations`}>Presentations</Link>
        </nav>
    )
}

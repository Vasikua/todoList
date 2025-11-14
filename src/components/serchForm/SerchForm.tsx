import React from 'react'

export default function SerchForm({ search, setSearch }: { search: string; setSearch: (value: string) => void }) {
    return (
        <header style={{ flexDirection: "column", gap: "5px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", }}>
                <p > search </p>

            </div >
            <input
                type="text"
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setSearch(e.target.value)
                }}
            />
        </header>
    )
}

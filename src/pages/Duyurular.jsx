// src/pages/Duyurular.jsx
import React from "react";
import { announcements } from "../data/announcements";

export default function Duyurular() {
    return (
        <div style={{ padding: "20px" }}>
            <h1>Duyurular</h1>
            <ul>
                {announcements.map(({ id, title, description }) => (
                    <li key={id} style={{ marginBottom: "1.5rem" }}>
                        <strong>{title}</strong>
                        <p>{description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}


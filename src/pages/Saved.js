import React, { useEffect, useState } from 'react';

const Saved = () => {
    const [saved, setSaved] = useState([]);

    useEffect(() => {
        // Ambil data yang disimpan dari local storage
        const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || [];
        setSaved(savedArticles);
    }, []);

    return (
        <div>
            <h1>Berita yang Disimpan</h1>
            {saved.length === 0 ? (
                <p>Tidak ada berita yang disimpan.</p>
            ) : (
                saved.map(article => (
                    <div key={article.web_url}>
                        <h2>
                            <a href={article.web_url} target="_blank" rel="noopener noreferrer">
                                {article.headline.main}
                            </a>
                        </h2>
                    </div>
                ))
            )}
        </div>
    );
};

export default Saved;
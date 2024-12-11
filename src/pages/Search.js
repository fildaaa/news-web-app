// src/pages/Search.js
import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [query, setQuery] = useState('');
    const [news, setNews] = useState([]);

    const handleSearch = async () => {
        const response = await axios.get(`https://api.nytimes.com/svc/archive/v1/2024/1.json?q=${query}&api-key=sEWt9ftM7MeoEZVw0Yf9jOTaoEoHfsp3`);
        setNews(response.data.response.docs);
    };

    return (
        <div>
            <h1>Cari Berita</h1>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch}>Cari</button>
            {news.map(article => (
                <div key={article.web_url}>
                    <h2>
                        <a href={article.web_url} target="_blank" rel="noopener noreferrer">
                            {article.headline.main}
                        </a>
                    </h2>
                </div>
            ))}
        </div>
    );
};

export default Search;
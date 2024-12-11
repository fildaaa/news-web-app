// src/pages/Indonesia.js
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Programming = () => {
    const [news, setNews] = useState([]);
    const [saved, setSaved] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(`https://api.nytimes.com/svc/archive/v1/2024/1.json?q=Programming&api-key=sEWt9ftM7MeoEZVw0Yf9jOTaoEoHfsp3`);
            setNews(response.data.results);
        };
        fetchNews();
    }, []);

    // const handleSave = (article) => {
    //     if (saved.includes(article)) {
    //         setSaved(saved.filter(item => item !== article));
    //     } else {
    //         setSaved([...saved, article]);
    //     }
    // };

    const handleSave = (article) => {
        let updatedSaved;
        if (saved.includes(article)) {
            updatedSaved = saved.filter(item => item !== article);
        } else {
            updatedSaved = [...saved, article];
        }
        setSaved(updatedSaved);
        
        // Simpan ke local storage
        localStorage.setItem('savedArticles', JSON.stringify(updatedSaved));
    };

    return (
        <div>
            <h1>Berita Programming</h1>
            {news.map(article => (
                <div key={article.url}>
                    <h2><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h2>
                    <button onClick={() => handleSave(article)}>
                        {saved.includes(article) ? 'Un-Save' : 'Save'}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Programming;
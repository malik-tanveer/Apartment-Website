import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/Blog.css";

const articles = [
    {
        category: "Apartment living",
        title: "Finding the perfect apartment and key features to look for",
        image: "https://cdn.prod.website-files.com/66f4e01fa59de41cc63969ba/66f508c84133943d0cbd6a88_blog-01.avif",
        animation: "fade-up"
    },
    {
        category: "Interior design",
        title: "Maximizing space and tips for small apartment living",
        image: "https://cdn.prod.website-files.com/66f4e01fa59de41cc63969ba/66f508d0db9976ff615aad25_blog-02.avif",
        animation: "fade-right"
    },
    {
        category: "Real estate tips",
        title: "Why location matters when choosing the best neighborhood",
        image: "https://cdn.prod.website-files.com/66f4e01fa59de41cc63969ba/66f508d86da01e9c087c8b34_blog-03.avif",
        animation: "fade-left"
    },
    {
        category: "Green living",
        title: "Sustainable living in modern apartments today",
        image: "https://cdn.prod.website-files.com/66f4e01fa59de41cc63969ba/66f508e0a86af37b9d2da2a1_blog-04.avif",
        animation: "zoom-in"
    },
];

const Blog = () => {
    useEffect(() => {
        AOS.init({ duration: 800, easing: "ease-in-out", once: true });
    }, []);

    return (
        <>
            <div className="Blogcontain" data-aos="flip-down">
                <div className="blog-header">
                    <h1>Our Blog</h1>
                    <p className="blog-desc">
                        Stay updated with our latest insights, tips, and ideas on apartment living and modern lifestyle. Discover inspiration and expert advice from our team.
                    </p>
                </div>
            </div>

            <div className="articles-container">
                {articles.map((article, index) => (
                    <div key={index} className="article-card" data-aos={article.animation}>
                        <div className="image-container">
                            <img src={article.image} alt={article.title} className="article-image" />
                        </div>
                        <span className="article-category">{article.category}</span>
                        <h2 className="article-title">{article.title}</h2>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Blog;
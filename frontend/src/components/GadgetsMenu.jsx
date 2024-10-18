import React, { useState } from 'react';

const articles = [
  {
    title: "Sneak Peak: Best Smart Home Gadgets & Features of 2020",
    link: "https://demo.tagdiv.com/newspaper_pro/td-post-sneak-peak-best-smart-home-gadgets-features-of-2020/",
    category: "Gadgets",
    img: "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/31-696x466.jpg.webp",
    date: "August 7, 2019",
    excerpt: "We woke reasonably late following the feast and free flowing wine the night before..."
  },
];

const GadgetsMenu = () => {
  const [showExcerpt, setShowExcerpt] = useState({});
  const [getArticles,setArticles]=useState(articles);

  const toggleExcerpt = (index) => {
    setShowExcerpt((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="td_block_wrap tdb_loop tdi_58 tdb-numbered-pagination">
      <div className="td_block_inner">
        {getArticles.map((article, index) => (
          <div key={index} className="tdb_module_loop td_module_wrap td-animation-stack td-cpt-post">
            <div className="td-module-container td-category-pos-above">
              <div className="td-image-container">
                <div className="td-module-thumb">
                  <a href={article.link} title={article.title}>
                    <span className="entry-thumb td-thumb-css" style={{ backgroundImage: `url(${article.img})` }}></span>
                  </a>
                </div>
              </div>
              <div className="td-module-meta-info">
                <a href="#" className="td-post-category">{article.category}</a>
                <p className="entry-title td-module-title">
                  <a href={article.link}>{article.title}</a>
                </p>
                <button onClick={() => toggleExcerpt(index)}>
                  {showExcerpt[index] ? 'Hide Excerpt' : 'Show Excerpt'}
                </button>
                {showExcerpt[index] && (
                  <div className="td-excerpt">{article.excerpt}</div>
                )}
                <div className="td-editor-date">
                  <span className="td-post-date">{article.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GadgetsMenu;

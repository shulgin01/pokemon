import React from 'react';

const NotFound = () => {
    return (
        <section className="s-not-found">
            <div className="container">
                <div className="not-found">
                    <span className="not-found__number">404</span>
                    <h1 className="title-page not-found__title">Страница не найдена</h1>
                    <p className="not-found__text">
                        По ссылке, которую вы пытались открыть, страницы не оказалось.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
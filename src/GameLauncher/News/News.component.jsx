import React, { Suspense, lazy } from 'react';
// import styles from './News.module.css'

const NewsContainer = lazy(() => import('./NewsContainer.component'))

export default function News() {
    return(
        <Suspense fallback={<div>Im Loading...</div>}>
            <NewsContainer />
        </Suspense>
    )
}
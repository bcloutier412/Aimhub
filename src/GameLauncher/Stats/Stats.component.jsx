import React, { Suspense, lazy } from 'react';
import styles from './Stats.module.css'

const StatsContainer = lazy(() => import('./StatsContainer.component'))

export default function Stats() {
    return(
        <Suspense fallback={<div>Im Loading...</div>}>
            <StatsContainer />
        </Suspense>
    )
}

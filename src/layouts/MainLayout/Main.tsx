import { Suspense } from 'react'

import AnimatedOutlet from 'components/AnimatedOutlet'
import Loading from 'components/Loading'

const Main = () => (
    <Suspense fallback={<Loading />}>
        <AnimatedOutlet />
    </Suspense>
)

export default Main

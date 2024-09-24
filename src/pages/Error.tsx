import { useRouteError } from 'react-router-dom'

import * as S from 'styles/pages/Error'

const Error = () => {
    const error = useRouteError() as Record<string, string | number>

    console.error(error)

    return (
        <S.Container>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>{error?.status}</p>
            <p>
                <i>{error?.statusText || error?.message}</i>
            </p>
        </S.Container>
    )
}

export default Error

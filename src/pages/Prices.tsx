import * as S from 'styles/pages/Prices'
import AnimatedPageWrapper from 'components/AnimatedPageWrapper'
import Ribbon from 'components/ui/Ribbon'

const Prices = () => {
    console.log('toto Service')

    return (
        <AnimatedPageWrapper>
            <Ribbon>
                <S.Title>Mes tarifs</S.Title>
            </Ribbon>
            <p>En construction</p>
        </AnimatedPageWrapper>
    )
}

export default Prices

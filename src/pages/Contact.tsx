import { ChangeEvent, FormEvent, useCallback, useState } from 'react'

import * as S from 'styles/pages/Contact'
import AnimatedPageWrapper from 'components/AnimatedPageWrapper'
import Icons from 'components/ui/Icons'
import Input from 'components/ui/Input'
import Ribbon from 'components/ui/Ribbon'
import Textarea from 'components/ui/Textarea'

const Contact = () => {
    const [inputsValue, setInputValue] = useState<{
        lastName?: string
        firstName?: string
        email?: string
        phone?: string
        message?: string
    }>({})

    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name } = event.target
            const { value } = event.target

            setInputValue(values => ({ ...values, [name]: value }))
        },
        [],
    )

    const handleSubmit = useCallback(
        (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault()

            console.log('toto inputsValue', inputsValue)
        },
        [inputsValue],
    )

    return (
        <AnimatedPageWrapper>
            <Ribbon>
                <S.Title>Me contactez</S.Title>
            </Ribbon>
            <S.Form onSubmit={handleSubmit}>
                <S.Fieldset>
                    <S.Legend>Information personnelle</S.Legend>
                    <Input
                        label='Nom *'
                        placeholder='Entrez votre nom'
                        name='lastName'
                        value={inputsValue.lastName ?? ''}
                        onChange={handleChange}
                        isRequired
                    />
                    <Input
                        label='Prénom *'
                        name='firstName'
                        placeholder='Entrez votre prénom'
                        value={inputsValue.firstName ?? ''}
                        onChange={handleChange}
                        isRequired
                    />
                    <Input
                        label='E-mail *'
                        name='email'
                        type='email'
                        placeholder='Entrez votre adresse e-mail'
                        value={inputsValue.email ?? ''}
                        onChange={handleChange}
                        isRequired
                    />
                    <Input
                        label='Téléphone'
                        name='phone'
                        type='tel'
                        placeholder='Entrez votre téléphone'
                        value={inputsValue.phone ?? ''}
                        onChange={handleChange}
                        pattern='[0-9]{10}'
                    />
                </S.Fieldset>
                <Textarea
                    label='Message *'
                    name='message'
                    placeholder='Entrez votre message'
                    value={inputsValue.message ?? ''}
                    onChange={handleChange}
                    isRequired
                />
                <S.ButtonSend type='submit'>
                    Envoyer
                    <Icons iconName='send' size='20px' />
                </S.ButtonSend>
            </S.Form>
        </AnimatedPageWrapper>
    )
}

export default Contact

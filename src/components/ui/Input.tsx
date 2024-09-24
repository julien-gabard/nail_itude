import { ChangeEventHandler, FC } from 'react'

import * as S from 'styles/components/ui/Input'

export interface IInputProps {
    errorMessage?: string | undefined
    infoMessage?: string | undefined
    /**
     * Default false
     */
    isRequired?: boolean
    /**
     * Default ''
     */
    label?: string
    labelPosition?: 'left' | undefined
    name?: string | undefined
    onChange?: ChangeEventHandler<HTMLInputElement>
    pattern?: string
    placeholder?: string
    /**
     * Default 'text'
     */
    type?: 'email' | 'number' | 'password' | 'tel' | 'text' | 'url'
    /**
     * Default ''
     */
    value?: string | number
}

const Input: FC<IInputProps> = ({
    errorMessage,
    infoMessage,
    isRequired = false,
    label = '',
    labelPosition,
    name,
    onChange,
    pattern,
    placeholder,
    type = 'text',
    value = '',
}) => (
    <S.Label $labelPosition={labelPosition}>
        <S.LabelName>{label}</S.LabelName>
        {infoMessage && <S.MessageInfo>{infoMessage}</S.MessageInfo>}
        <S.Input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={isRequired}
            pattern={pattern}
        />
        {errorMessage && <S.MessageError>{errorMessage}</S.MessageError>}
    </S.Label>
)

export default Input

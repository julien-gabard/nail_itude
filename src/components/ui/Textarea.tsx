import { ChangeEventHandler, FC } from 'react'

import * as S from 'styles/components/ui/Textarea'

export interface ITextareaProps {
    /**
     * Default false
     */
    isRequired?: boolean
    /**
     * Default ''
     */
    label?: string
    name?: string
    onChange?: ChangeEventHandler<HTMLTextAreaElement>
    /**
     * Default ''
     */
    placeholder?: string
    /**
     * Default ''
     */
    value?: string | number | readonly string[] | undefined
}

const Textarea: FC<ITextareaProps> = ({
    isRequired = false,
    label = '',
    name,
    onChange,
    placeholder = '',
    value = '',
}) => (
    <S.Label>
        {label}
        <S.Textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={isRequired}
        />
    </S.Label>
)

export default Textarea

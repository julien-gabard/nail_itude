import { TIconName } from 'types/icons'

export interface IRoutes {
    id: 'home' | 'prices' | 'contact' | 'photos'
    path: string
    labelName: string
    iconName: TIconName
}

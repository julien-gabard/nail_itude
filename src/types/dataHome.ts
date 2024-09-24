export interface IDataHome {
    titlePart: string
    descriptionPart: string[]
    servicesPart: {
        id: string | number
        title: string
        message: string | string[]
    }[]
    photosPart: {
        messages: string[]
    }
}

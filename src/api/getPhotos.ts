import { defer } from 'react-router-dom'

import { TDataPhotos } from 'types/dataPhotos'

import photo1 from 'assets/photos/1.jpg'
import photo10 from 'assets/photos/10.jpg'
import photo11 from 'assets/photos/11.webp'
import photo12 from 'assets/photos/12.webp'
import photo13 from 'assets/photos/13.jpg'
import photo14 from 'assets/photos/14.jpg'
import photo15 from 'assets/photos/15.webp'
import photo16 from 'assets/photos/16.webp'
import photo17 from 'assets/photos/17.webp'
import photo18 from 'assets/photos/18.webp'
import photo19 from 'assets/photos/19.webp'
import photo2 from 'assets/photos/2.jpg'
import photo20 from 'assets/photos/20.webp'
import photo3 from 'assets/photos/3.webp'
import photo4 from 'assets/photos/4.webp'
import photo5 from 'assets/photos/5.jpg'
import photo6 from 'assets/photos/6.webp'
import photo7 from 'assets/photos/7.webp'
import photo8 from 'assets/photos/8.jpg'
import photo9 from 'assets/photos/9.webp'

const fakeData: TDataPhotos = [
    {
        id: 'photo_1',
        photo: photo1,
    },
    {
        id: 'photo_2',
        photo: photo2,
    },
    {
        id: 'photo_3',
        photo: photo3,
    },
    {
        id: 'photo_4',
        photo: photo4,
    },
    {
        id: 'photo_5',
        photo: photo5,
    },
    {
        id: 'photo_6',
        photo: photo6,
    },
    {
        id: 'photo_7',
        photo: photo7,
    },
    {
        id: 'photo_8',
        photo: photo8,
    },
    {
        id: 'photo_9',
        photo: photo9,
    },
    {
        id: 'photo_10',
        photo: photo10,
    },
    {
        id: 'photo_11',
        photo: photo11,
    },
    {
        id: 'photo_12',
        photo: photo12,
    },
    {
        id: 'photo_13',
        photo: photo13,
    },
    {
        id: 'photo_14',
        photo: photo14,
    },
    {
        id: 'photo_15',
        photo: photo15,
    },
    {
        id: 'photo_16',
        photo: photo16,
    },
    {
        id: 'photo_17',
        photo: photo17,
    },
    {
        id: 'photo_18',
        photo: photo18,
    },
    {
        id: 'photo_19',
        photo: photo19,
    },
    {
        id: 'photo_20',
        photo: photo20,
    },
]

const getPhotos = () => {
    const fetchData = async () => {
        // False loading times, to simulate the response to a request
        await new Promise(resolve => setTimeout(resolve, 0))

        return fakeData
    }

    return defer({
        dataPromise: fetchData(),
    })
}

export default getPhotos

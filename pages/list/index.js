import { useEffect, useState } from "react"
import { useRouter } from 'next/router'

import UserService from "../../services/UserService"

const userService = new UserService()

export default function List() {
    const router = useRouter()

    const [breed, setBreed] = useState('')
    const [img, setImg] = useState([])
    const [overlay, setOverlay] = useState(false)
    const [thisUrl, setThisUrl] = useState([])

    const onChange = (e) => {
        const getBreed = e.target.value
        setBreed(getBreed)
    }

    const overlayImg = (url) => {
        setThisUrl(url)
        setOverlay(true)
    }


    const getBreedImages = async () => {
        try {
            const token = localStorage.getItem('token')

            if (token !== null) {

                const { data } = await userService.list(breed, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': token
                    }
                })
                setImg(data.list)
            }
            else {
                router.push('/register')
            }


        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        getBreedImages()
    }, [breed])



    return (
        <>
            <div className="select">
                <label className="select__label">Choose a breed:</label>
                <select
                    className="select__options"
                    onChange={(e) => onChange(e)}>

                    <option value='chihuahua'>Chihuahua</option>
                    <option value='husky'>Husky</option>
                    <option value='pug'>Pug</option>
                    <option value='labrador'>Labrador</option>
                </select>
            </div>


            <div className={overlay ? 'overlay open' : 'overlay'} onClick={() => setOverlay(false)}>
                <img src={thisUrl}></img>
            </div>

            <div className='gallery'>
                {img.map((i, k) => (
                    <div key={k} onClick={() => overlayImg(i)}>
                        <img src={i} alt='dog images' />
                    </div>
                ))}
            </div>
        </>
    )
}
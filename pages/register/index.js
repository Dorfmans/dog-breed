import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Input from '../../components/input'
import Button from '../../components/button'

import validateEmail from '../../utils/validation'

import UserService from '../../services/UserService'

import Logo from '../../public/imgs/LOGO.png'
import Mail from '../../public/imgs/MAIL.svg'

const userService = new UserService();


export default function Register() {

    const [email, setEmail] = useState('');
    const [isSubmiting, setIsSubmiting] = useState(false);

    const router = useRouter()

    const validButton = () => {
        if (!email) {
            return false;
        }
        if (!validateEmail) {
            return false
        }
        return true
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail) {
            return;
        }

        setIsSubmiting(true)

        try {
            const body = JSON.stringify({
                email: email
            })

            const { data } = await userService.register(body, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            localStorage.setItem('token', data.user.token)

        } catch (error) {
            alert(error)
        }

        setIsSubmiting(false)

        router.push('/list')
    }

    return (
        <>
            <section className={`register`}>

                <div className={`register__Image`}>
                    <Image
                        src={Logo}
                    />
                </div>

                <form onSubmit={onSubmit} className={`register__Input`}>
                    <Input
                        icon={Mail}
                        type='email'
                        text='Insert your email...'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        isNotValidMessage="Insert a valid Email"
                        showIsNotValid={email && !validateEmail(email)}
                    />
                    {validButton() &&
                        <Button
                            type='submit'
                            className='register__Input__Button'
                            onClick={() => console.log('clicked')}
                            disabled={!validateEmail(email) || isSubmiting}
                            text='Send' />}
                </form>

                <div className='credit'>by <a href='mailto: raphaeldorfman@gmail.com'>Raphael Dorfman</a></div>
            </section>
        </>
    )
}
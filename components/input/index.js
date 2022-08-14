import Image from 'next/image'

export default function Input({ icon, type, text, value = '', onChange, showIsNotValid = false, isNotValidMessage = '' }) {

    return (
        <>
            <div>
                <div className='registerInput'>
                    <Image
                        src={icon}
                        alt="icon"
                        width={20}
                        height={20}
                    />

                    <input
                        type={type}
                        placeholder={text}
                        value={value}
                        onChange={onChange}
                    />
                </div>

                {showIsNotValid && <p className="isNotValidMessage">{isNotValidMessage}</p>}
            </div>
        </>
    )
}
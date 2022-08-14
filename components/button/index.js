export default function Button({ type, className, onClick, disabled = true, text }) {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
            disabled={disabled}>

            {text}
        </button>
    )
}
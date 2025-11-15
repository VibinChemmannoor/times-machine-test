const Button = ({type, label, handleSubmit})=>{
    return (
        <>
         <button
          type={type}
          className="w-full bg-gray-800 text-white py-2 rounded-sm mt-2 hover:bg-black transition"
          onClick={handleSubmit}
        >
          {label}
        </button>
        </>
    )
}

export default Button;
const Button = ({type, label, handleSubmit})=>{
    return (
        <>
         <button
          type={type}
          className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
          onClick={handleSubmit}
        >
          {label}
        </button>
        </>
    )
}

export default Button;
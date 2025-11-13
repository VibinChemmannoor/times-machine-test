const Input = ({ label, type, name, placeholder, onChange, error, formik }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && <p className="font-small text-red-400">{formik.errors[name]}</p>}
    </div>
  );
};
export default Input;

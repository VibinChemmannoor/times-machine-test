const CountryCard = ({country}) =>{
    return (
    <div className="border rounded-xl bg-white p-4 flex gap-4 items-center">
      <img
        src={country?.flag}
        alt={country?.name}
        className="w-14 h-10 rounded object-cover"
      />
      <div>
        <p className="font-medium text-gray-700">{country?.name}</p>
        <p className="text-sm text-gray-500">{country?.region}</p>
      </div>
    </div>
    )
}

export default CountryCard;
const TextInput = ({lable, name, value, onChange,
     required = false}) => {
    return ( 
        <div className="mb-4">
                <label htmlFor={name} className="block font-semibold">
                    {lable}
                </label>
                <input 
                    name={name}
                    type="text" 
                    className="w-full p-2 border rounded-lg" 
                    value={value}
                    onChange={onChange}
                    required={required}
                />
            </div>
     );
}
 
export default TextInput;
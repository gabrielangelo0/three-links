function Input(props) {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        {props.etiqueta}
      </label>
      <input type="text" className="border p-2" />
    </div>
  );
}

export default Input;

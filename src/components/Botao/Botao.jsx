function Botao(props) {
  return (
    <button className="border rounded-lg border-gray-400 cursor-pointer flex items-center justify-center gap-4 w-full overflow-hidden">
      {props.children}
    </button>
  );
}

export default Botao;

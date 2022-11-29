import "../css/Input.css";

function Input({ type = "text", erro = false, value, placeholder }) {
  let nome_da_classe = erro ? "Input Input--cancel" : "Input";
  nome_da_classe = type == "button" ? "Input Input--blue" : "Input";

  return <input placeholder={placeholder} type={type} value={value} className={nome_da_classe} />;
}

export default Input;

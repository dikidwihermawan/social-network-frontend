function Button(props) {
  const {
    color = "bg-gradient-to-r from-blue-400 to-blue-500",
    type = "submit",
    children,
  } = props;
  return (
    <button
      {...props}
      type={type}
      className={`shadow-xl px-4 py-2 rounded-full text-white text-xs focus:outline-none ${color}`}
    >
      {children}
    </button>
  );
}

export default Button;

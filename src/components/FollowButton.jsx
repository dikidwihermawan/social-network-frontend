function FollowButton(props) {
  const {
    background = "bg-gradient-to-r from-blue-400 to-blue-500",
    type = "submit",
    color = "text-white",
    children,
  } = props;
  return (
    <button
      {...props}
      type={type}
      className={`${color} ${background} shadow-xl px-4 py-2 rounded-full text-xs focus:outline-none `}
    >
      {children}
    </button>
  );
}

export default FollowButton;

const Button = ({ text }) => {
  return (
    <button className="inline-block text-blue-800 text-sm md:text-xl bg-white mt-6 md:mt-10 rounded-full px-3 py-1 md:px-8 md:py-2 font-bold">
      {text}
    </button>
  );
};

export default Button;

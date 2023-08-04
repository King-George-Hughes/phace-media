const Button = ({ text }) => {
  return (
    <button className="inline-block text-gray-900 text-sm md:text-xl bg-white mt-6 md:mt-10 rounded-full px-3 py-1 md:px-10 md:py-4 font-bold">
      {text}
    </button>
  );
};

export default Button;

// font-family: Insaniburger with Cheese;
// font-size: 40px;
// font-weight: 400;
// line-height: 46px;
// letter-spacing: 0.05em;
// text-align: left;

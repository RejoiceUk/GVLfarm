import React from 'react';

// Reusable Button atom with variant-based styling and responsive behavior
export default function Button({
  type = "button",
  text = "Continue",
  buttonVariant = "primary", // you can switch variants later
  onClick,
  image,
  className,
  ...rest
}) {
  // Base style common to all buttons - with responsive classes
  const baseStyle = "py-2 px-8 text-center font-[500] md:text-[1rem] text-[.8rem] flex items-center justify-center cursor-pointer";
  
  // Variant styles for different button appearances
  const buttonVariants = {
    dark: "bg-[var(--primary-color)] text-white",
    transparent: "bg-transparent border text-white border-white  hover:bg-[var(--primary-hover-light)]",
    white: "text-[var(--primary-color)] bg-white hover:bg-",
  };
  
  // Apply the style based on the buttonVariant or fallback to primary
  const variantStyle = buttonVariants[buttonVariant] || buttonVariants.white;
  
  return (
    // The `disabled` attribute ensures the button is unclickable when variant is 'disabled'
    <button
      className={`${baseStyle} ${variantStyle} ${className}`}
      type={type}
      onClick={onClick}
      {...rest} // Spread the rest of the props to the button here
    >
      <span className="flex justify-center items-center">{text}</span>
    </button>
  );
}
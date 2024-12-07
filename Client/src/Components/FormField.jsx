import React from 'react';

const FormField = ({labelName,type,name,placeholder,value,handleChange,isSurpriseMe,handleSurpriseMe}) => {
//   labelName: The label text for the form field.
//   type: The input type (e.g., text, email).
//   name: The name attribute for the input field.
//   placeholder: Placeholder text for the input field.
//   value: The current value of the input field.
//   handleChange: A function to handle changes to the input field.
//   isSurpriseMe: A boolean to determine if the "Surprise Me" button should be displayed.
//   handleSurpriseMe: A function to handle the "Surprise Me" button click.
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
      {/* Uses the htmlFor attribute to associate the label with the input field by the name prop */}
        <label
        htmlFor={name}
        className='block text-sm font-medium text-gray-900'
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
          type='button'
          onClick={handleSurpriseMe}
          className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black'
          >
            Surprise Me
          </button>
        )}
      </div>
      <input 
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff]
      focus:border-[#4649ff] outline-none block w-full p-3'
      />
    </div>
  );
}
// The FormField component is a reusable form input element that includes a 
// label and an optional "Surprise Me" button. It uses Flexbox for layout, 
// conditional rendering for the button, and various CSS classes for styling.
//  The component is designed to be flexible and adaptable for different types of form inputs and scenarios.
export default FormField;

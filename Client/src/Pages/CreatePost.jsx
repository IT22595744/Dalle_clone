import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../Assets";
import { getRandomPrompt} from "../Utils";
import { FormField, Loader } from "../Components";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = () => {};

  const handleSubmit = () => {};

  const handleChange = (e) => {
   setForm({...form,[e.target.name]:e.target.value})

  };

  const handleSurpriseMe = () => {
    const randomPrompt=getRandomPrompt(form.prompt);
    setForm({...form,prompt:randomPrompt})
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Create imaginative and visually stunning images through DALL-E AI and
          share them with the community
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Ex., john doe"
            value={form.name}
            handleChange={handleChange}
          />

          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div
            className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
          w-64 p-3 h-64 flex justify-center items-center"
          >
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}

            {generatingImg && (
              <div
                className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]
              rounded-lg"
              >
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className="text-white bg-green-700 font-medium
              rounded-md text-sm w-full sm:w-auto px-5 py-2.5
              text-center"
          >
            {generatingImg ? "Generating..." : "Generate"}
          </button>
        </div>

        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px]">
            Once you have created the image you want , you can share it with
            others in the community
          </p>
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? "Sharing..." : "Share with the Community"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;

// CreatePost Component
// Purpose:
// The CreatePost component is a form that allows users to create a post by inputting their name and a prompt, optionally generating an image, and sharing the post with the community.

// State:
// form: An object containing name, prompt, and photo fields.
// generatingImg: A boolean indicating if an image is being generated.
// loading: A boolean indicating if the form is in the process of being submitted.
// Functions:
// generateImage: A placeholder function to generate an image (currently empty).
// handleSubmit: A placeholder function to handle form submission (currently empty).
// handleChange: Updates the form state with the new input values.
// handleSurpriseMe: Uses getRandomPrompt to set a random prompt in the form state.
// Structure:
// The component renders a title and description.
// It includes a form with two FormField components for the name and prompt inputs.
// It displays a preview area for the generated image or a placeholder image.
// Buttons for generating the image and submitting the form are included.
// Conditional rendering is used for the loader overlay during image generation and for changing button text based on the state.
import React, { useState } from 'react';

const FileUpload = ({ text, input, context }) => {
    let [image, setImage] = useState(context ? context : "");

    let handleImage = (e) => {
        let file = e.target.files[0];
        setImage(URL.createObjectURL(file));
    };

    return (
        <>
            {image && <img src={image} alt="Image Preview" className="w-full h-56 object-cover" />}
            <div className="flex items-center justify-center w-full">
                <label for={input.id} className="text-center w-2/3 cursor-pointer border-b border-stone-800 mx-auto ">
                    <p className="">{text}</p>
                    <input
                        {...input}
                        className='hidden'
                        onChange={handleImage}
                    />
                </label>
            </div>
        </>
    );
}

export default FileUpload;

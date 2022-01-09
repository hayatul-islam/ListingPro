import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Test = () => {

    const { register, handleSubmit, reset } = useForm();
    const [saveImage, setSaveImage] = useState('');

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:4040/fileUpload', data)
            .then((result) => {
                if (result.data.insertedId) {
                    reset();
                }
            })
    };

console.log(saveImage);

     const handleImageUpload = async (e) => {
        const base64 = await convertBase64(e.target.files[0]);
        setSaveImage(base64)
    }
    
    const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
            console.log(fileReader.result);
        }
        fileReader.onerror = ((error) => {
            reject(error);
            console.log(error);
        })
    })
}


    return (
        <div>
                <input onClick={handleImageUpload} type="file" name="image" />
                <input type="submit" value="Send" />
            
        </div>
    );
};

export default Test;
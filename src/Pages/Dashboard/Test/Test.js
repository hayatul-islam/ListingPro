import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Test = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:4040/fileUpload', data)
            .then((result) => {
                if (result.data.insertedId) {
                    reset();
                }
            })
    };


    return (
        <div>
            <form
                action='http://localhost:4040/fileUpload'
                method='post'
                encType='multipart/form-data'
            >
                <input type="file" name="image" />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Test;
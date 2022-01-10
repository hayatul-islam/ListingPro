import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddCategory = () => {

    const { register, handleSubmit, reset } = useForm();
    const [saveImage, setSaveImage] = useState();

    const onSubmit = (data => {
        data.image = saveImage;
        fetch('https://aqueous-garden-52898.herokuapp.com/addCategory', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((result) => {
                if (result.insertedId) {
                    reset()
                }
            })

    });


    const imageUploader = async (e) => {
        const base64 = await convertBase64(e.target.files[0]);
        setSaveImage(base64);
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };


    return (
        <div>
            <Row>
                <Col xs={12} md={12}>
                    <div className='shadow px-4 py-5 rounded'>
                        <h2 className='pb-4 text-center'>Add New Category</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Row>
                                <Col xs={12} md={6}>
                                    <div className='pb-2'>
                                        <label className='mb-2' htmlFor="">Category Name</label> <br />
                                        <input type="text" className='w-100 mb-2 py-1' {...register("name", { required: true })} placeholder='Enter your Category' />
                                    </div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <div className='pb-2'>
                                        <label className='mb-2' htmlFor="">Category Image</label> <br />
                                        <input onChange={imageUploader} type="file" className='w-100 mb-2 py-1' placeholder='Enter Category image' />
                                    </div>
                                </Col>
                            </Row>
                            <input className='py-2 px-3' type="submit" value="Add Category" />
                        </form>
                    </div>
                </Col>
            </Row>



        </div>
    );
};

export default AddCategory;
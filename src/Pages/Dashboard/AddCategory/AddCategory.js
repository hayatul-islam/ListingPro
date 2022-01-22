import React, { useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from "axios";
import useListing from '../../../Hooks/useListing';

const AddCategory = () => {

    const desc = useRef();
    const [file, setFile] = useState(null);
    const { apiLink } = useListing();

    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            name: desc.current.value,
        };
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.image = fileName;
            try {
                // await axios.post("http://localhost:4040/api/upload", data);
                await axios.post(`${apiLink}/api/upload`, data);
            } catch (err) { }
        }
        try {
            // await axios.post("http://localhost:4040/category", newPost);
            await axios.post(`${apiLink}/category`, newPost);
            window.location.reload();
        } catch (err) { }
    };

    return (
        <div>
            <Row>

                <Col xs={12} md={12}>
                    <div className='shadow px-4 py-5 rounded'>
                        <h2 className='pb-4 text-center'>Add New Category</h2>
                        <form onSubmit={submitHandler}>
                            <Row>
                                <Col xs={12} md={6}>
                                    <div className='pb-2'>
                                        <label className='mb-2' htmlFor="">Category Name</label> <br />
                                        <input
                                            ref={desc}
                                            type="text"
                                            className='w-100 mb-2 py-1'
                                            placeholder='Enter your Category' />
                                    </div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <div className='pb-2'>
                                        <label className='mb-2' htmlFor="">Category Image</label> <br />
                                        <input
                                            type="file"
                                            id="file"
                                            accept=".png,.jpeg,.jpg"
                                            onChange={(e) => setFile(e.target.files[0])}
                                            className='w-100 mb-2 py-1'
                                            placeholder='Enter Category image' />
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
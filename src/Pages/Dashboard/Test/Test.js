
import { useState } from "react";
export default function Test() {

    // const [saveImage, setSaveImage] = useState();
    // const imageUploader = async (e) => {
    //     const base64 = await convertBase64(e.target.files[0]);
    //     setSaveImage(base64);
    // };
    // console.log(saveImage)

    // const convertBase64 = (file) => {
    //     return new Promise((resolve, reject) => {
    //         const fileReader = new FileReader();
    //         fileReader.readAsDataURL(file);
    //         fileReader.onload = () => {
    //             resolve(fileReader.result);
    //         };
    //         fileReader.onerror = (error) => {
    //             reject(error);
    //         };
    //     });
    // };






    return (
        <div className="App">
            {/* <input type="file" onChange={imageUploader} /> */}
        </div>
    );
}
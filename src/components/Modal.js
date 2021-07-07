import React, { useState } from 'react';
import { storage, db , firebase } from '../Firebase/Firebase';
import '../stylesheet/Modal.css';


require('firebase/auth')
function upload_img(event, pinDetails, setPinDetails, setShowLabel, setShowModalPin) {
    if (event.target.files && event.target.files[0]) {
        if (/image\/*/.test(event.target.files[0].type)) {
            const reader = new FileReader();

            reader.onload = function () {
                setPinDetails({
                    ...pinDetails,
                    img_blob: reader.result
                });
                setShowLabel(false);
                setShowModalPin(true);
            }

            reader.readAsDataURL(event.target.files[0]);
        }
    }
}

function check_size(event) {
    const image = event.target;

    image.classList.add('pin_max_width');

    if (
        image.getBoundingClientRect().width < image.parentElement.getBoundingClientRect().width ||
        image.getBoundingClientRect().height < image.parentElement.getBoundingClientRect().height
    ) {
        image.classList.remove('pin_max_width');
        image.classList.add('pin_max_height');
    }

    image.style.opacity = 1;
}

function save_pin(pinDetails, add_pin) {
    const users_data = {
        ...pinDetails,
        author: 'Jack',
        board: 'default',
        title: document.querySelector('#pin_title').value,
        description: document.querySelector('#pin_description').value,
        destination: document.querySelector('#pin_destination').value,
        pin_size: document.querySelector('#pin_size').value,
    }

    add_pin(users_data);
}


function Modal(props) {
    const [pinDetails, setPinDetails] = useState({
        author: '',
        board: '',
        title: '',
        description: '',
        destination: '',
        img_blob: '',
        pin_size: '',
    });
    const [showLabel, setShowLabel] = useState(true);
    const [showModalPin, setShowModalPin] = useState(false);

  

    const[title, setTitle] = React.useState("");
    const[description, setDescription] = React.useState("");
    const[location, setLocation] = React.useState("");
    const [error, setError] = useState('');
    const [productImg, setProductImg] = useState(null);

    const types = ['image/png', 'image/jpeg']; // image types

    const productImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError('')
        }
        else {
            setProductImg(null);
            setError('Please select a valid image type (jpg or png)');
        }
    }

    // add product
    const addProduct = (e) => {
        e.preventDefault();
        const uploadTask = storage.ref(`product-images/${productImg.name}`).put(productImg);
        uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
        }, err => setError(err.message)
            , () => {
                storage.ref('product-images').child(productImg.name).getDownloadURL().then(url => {
                    db.collection('Products').add({
                        ProductImg: url
                    }).then(() => {
                        setProductImg('');
                        setError('');
                        document.getElementById('file').value = ''; 
                    }).catch(err => setError(err.message))
                })
            })

    }


    const addPin= () =>{
        if(!title && !description && !location){
            alert("The fields must be completed")
        }else{
        const date = Date();
        db.collection('pin').doc(date).set({data: date, title: title, description: description, location: location}).then(()=>{
            alert("Message has been submitted")
        }).catch((error)=>{
            alert(error.message);
        })

setTitle("");
setDescription("");
setLocation("");
        }
    };

    return (
        <div className="add_pin_modal">
            <div className="add_pin_container">
                <div className="side" id="left_side">
                    <div className="section1">
                        <div className="pint_mock_icon_container">
                        <img src="https://img.icons8.com/ios-glyphs/90/000000/more.png" alt="edit" className="pint_mock_icon"/>
                        </div>
                    </div>

                    <div className="section2">
                        <label htmlFor="upload_img" id="upload_img_label"
                            style={{
                                display: showLabel ? 'block' : 'none'
                            }}>
                            <div className="upload_img_container">
                                <div id="dotted_border">
                                    <div className="pint_mock_icon_container">
                                    <img src="https://img.icons8.com/material-rounded/24/000000/upload--v2.png" alt="upload_img" className="pint_mock_icon" />
                                    </div>
                                    <div id="recomend_label">Kliknij, aby dodać zdjęcie</div>
                                    <div id="recomend_label">Rekomendacja: Użyj wysokiej jakości zdjęć w formacie .jpg, mniejszych niż 20MB</div>
                                </div>
                            </div>

                            <input  type="file" name="upload_img" id="upload_img"  required onChange={productImgHandler}/>
                        </label>

                        <div className="modals_pin"
                            style={{
                                display: showModalPin ? 'block' : 'none'
                            }}>
                            <div className="pin_image">
                                <img onLoad={check_size} src={pinDetails.img_blob} alt="pin_image" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="side" id="right_side">
                    <div className="section1">
                        <div className="select_size">
                            <select defaultValue="Wybierz rozmiar" name="pin_size" id="pin_size">
                                <option value="">Wybierz rozmiar</option>
                                <option value="mały">mały</option>
                                <option value="średni">średni</option>
                                <option value="duży">duży</option>
                            </select>
                            <button type="submit" onSubmit={addProduct} onClick={addPin} className="save_pin">Zapisz</button>
                        </div>
                    </div>

                    <div className="section2">
   
                        <input placeholder="Tytuł ogłoszenia" type="text" className="new_pin_input" id="pin_title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        <input placeholder="Opis ogłoszenia" type="text" className="new_pin_input" id="pin_description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                        <input placeholder="Lokalizacja" type="text" className="new_pin_input" id="pin_destination" value={location} onChange={(e) => setLocation(e.target.value)}/> 
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
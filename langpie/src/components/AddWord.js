import React, {useState, useContext} from "react";
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import {modalContext} from "../App";

export default function AddWord(){
    const [front, setFront] = useState("");
    const [back, setBack] = useState("");
    const selectOptions = ["Nature", "Car", "Kitchen"];


    const {setIsModalClosed} = useContext(modalContext);

    const handleSubmit = (e) => {
        e.preventDefault();
    } 

    const closeModal = () => {
        setIsModalClosed(true);

    }

    return (
        <>
        <div className="modal-overlay">
            <div className='modal-content'>
                <CancelIcon onClick={closeModal} sx={{position: "absolute", top: "5px", right: "10px"}}/>
                <form>
                <input type="text" value={front} onChange={e => setFront(e.target.value)} placeholder="word"/><br/>
                <input type="text" value={back} onChange={e => setBack(e.target.value)}  placeholder="deck name"/><br/>
                <select>
                    {selectOptions.map(el => {
                        return <option value={el}>{el}</option>
                    })}
                </select>
                <Button variant="contained" type="submit" onClick={handleSubmit} sx={{width:"20px", height: "18px", textTransform: "none"}}>Add</Button>
                </form>
            </div>
        </div>
        </>
    )
}
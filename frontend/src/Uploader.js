import axios from 'axios';
import { useState } from "react";
import LoadingButton from '@mui/lab/LoadingButton';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';

function Uploader(props) {
    const backendURL = 'http://127.0.0.1:5000'
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)
    const onFileUpload = async () => {
        setLoading(true)
        const formData = new FormData()
        formData.append("study", file)
        console.log(file.name)
        axios.post(backendURL + "/upload", formData)
            .then(response => {
                props.setPaperData([...props.paperData, response.data.response])
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error)
                setLoading(false)
            })
    }
    return (
        <div style={{ marginLeft: '2vw' }}>
            <p>Choose a pdf to upload.</p>
            <Stack direction="row" spacing={2}>
                <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
                <LoadingButton disabled={file === null} variant="contained" onClick={onFileUpload} loading={loading}> upload </LoadingButton >
            </Stack>
        </div>

    );
}

export default Uploader;

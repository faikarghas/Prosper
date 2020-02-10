import React,{useState,createRef} from 'react'
import Dropzone, {useDropzone} from 'react-dropzone';
import {Grid} from '@material-ui/core';
import { useStore } from "../lib/store";


function BeforeUpload({openDialog,isDragReject,widthPr}) {
    return (
        <React.Fragment>
            <img src="/images/upload.png" alt="logo upload" />
            {isDragReject ?
                <p><strong>PDF format only</strong></p>
                :
                <React.Fragment>
                <p className="tx1">DRAG & DROP</p>
                <p className="tx2">TO UPLOAD</p>
                <button
                    type="button"
                    onClick={openDialog}
                >
                    OR, SELECT FILES
                </button>
                </React.Fragment>

            }
        </React.Fragment>
    )
}


function AfterUpload({acceptedFiles,remove}) {
    return (
        <div>
            <p>UPLOADED</p>
            <button onClick={() => remove(acceptedFiles)}>remove</button>
        </div>
    )
}



function drozone({title}) {
    const [loaded,setLoaded] = useState(false)
    const [dropDisable, setDropDisable] = useState(false);
    const {state, dispatch} = useStore();
    const [hide, setHide] = useState(1);
    const [transY, setTransY] = useState(0);
    const [colorLoaded, setColorLoaded] = useState('#ffffff00');



    const dropzoneRef = createRef();
        const openDialog = () => {
        // Note that the ref is set async,
        // so it might be null at some point
        if (dropzoneRef.current) {
            dropzoneRef.current.open()
        }
    };

    function onDropFile(acceptedFiles) {

        if (acceptedFiles.length > 0) {
            const reader = new FileReader()
            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onloadstart = () => {
                console.log('mulai');
            }
            reader.onprogress = function(data) {
                if (data.lengthComputable) {
                    var progress = parseInt( ((data.loaded / data.total) * 100), 10 );
                    console.log(progress);
                }
            }
            reader.onloadend = function(event) {
                console.log(acceptedFiles[0].name);
                dispatch({type: "increment", file:acceptedFiles[0]})
                setLoaded(true)
                setHide(0)
                setTransY('50%')
                setColorLoaded('#388e3c')
                setDropDisable(true)
            };
            reader.readAsDataURL(acceptedFiles[0])
        }

    }

    function remove(acceptedFiles) {
        let newState = state.file.filter(item=>{
            return item !== acceptedFiles[0]
        })
        setDropDisable(false)
        setLoaded(false)
        setHide(1)
        setTransY(0)
        setColorLoaded('#ffffff00')
        dispatch({type: "remove", file:newState})
    }


    return (
        <Grid item xs={12} md={4}>
            <div className="section_upload_services-upload">
                <div className="title">
                    <h4>{title}</h4>
                </div>
                <div className="upload-box">
                <Dropzone onDrop={onDropFile} ref={dropzoneRef} noClick noKeyboard accept="application/pdf" disabled={dropDisable}>
                    {({getRootProps, getInputProps, acceptedFiles,isDragReject,isDragAccept}) => {
                        return (
                        <div className="container">
                            <div {...getRootProps({className: 'dropzone'})}>
                                <input {...getInputProps()} />
                                <div className="logo_wrapper" style={{backgroundColor:colorLoaded,transform:`translateY(${transY})`}}>
                                    {loaded ?
                                    <img src="/images/correct.png" alt="logo correct"/> 
                                    : 
                                    <img src="/images/upload.png" alt="logo upload"/>}
                                </div>
                                {isDragReject ?
                                    <p><strong>PDF format only</strong></p>
                                    :
                                    <React.Fragment>
                                    <p className="tx1" style={{opacity:hide}}>DRAG & DROP</p>
                                    <p className="tx2" >{loaded ? acceptedFiles[0].name : 'TO UPLOAD'}</p>
                                    { loaded ?
                                    <button onClick={() => remove(acceptedFiles)}>remove</button>
                                    :
                                    <button type="button" onClick={openDialog} >  OR, SELECT FILES </button>
                                    }
                                    </React.Fragment>
                                }
                            </div>
                        </div>
                        );
                    }}
                </Dropzone>
                </div>
            </div>
        </Grid>
    )
}

drozone.propTypes = {

}

export default drozone


import React,{useState,createRef,useEffect,useRef} from 'react'
import Dropzone, {useDropzone} from 'react-dropzone';
import {Grid} from '@material-ui/core';
import { useStore } from "../lib/store";


function drozone({title}) {
    const [loaded,setLoaded] = useState(false)
    const [dropDisable, setDropDisable] = useState(false);
    const {state, dispatch} = useStore();
    const [hide, setHide] = useState(1);
    const [transY, setTransY] = useState(0);
    const [colorLoaded, setColorLoaded] = useState('#ffffff00');
    const [none, setNone] = useState('none');
    const [progressBar, setProgressBar] = useState(0);
    const [circumference, setCircumference] = useState(0);
    const [hideOverlay, setHideOverlay] = useState({opacity:0,visibility:'hidden'});

    const circle = useRef(null);

    useEffect(() => {
        cr()
    })

    function cr(params) {
        var circumference = 46 * 2 * Math.PI;
        setCircumference(circumference)
    }


    const dropzoneRef = createRef();
    const openDialog = () => {
        // Note that the ref is set async,
        // so it might be null at some point
        if (dropzoneRef.current) {
            dropzoneRef.current.open()
        }
    };

    function onDropFile(acceptedFiles,rejectedFiles) {

        if (acceptedFiles.length > 0) {
            const reader = new FileReader()
            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onloadstart = () => {
                setHideOverlay({opacity:1,visibility:'visible'})
            }
            reader.onprogress = function(data) {
                if (data.lengthComputable) {
                    var progress = parseInt( ((data.loaded / data.total) * 100), 10 );
                    const offset = circumference - progress / 100 * circumference;
                    setProgressBar(progress)
                    circle.current.style.strokeDashoffset = offset;
                }
            }
            reader.onloadend = function(event) {
                setTimeout(() => {
                    setHideOverlay({opacity:0,visibility:'hidden'})
                }, 1000);
                dispatch({type: "increment", file:acceptedFiles[0]})
                setLoaded(true)
                setHide(0)
                setTransY('50%')
                setColorLoaded('#388e3c')
                setDropDisable(true)
            };
            reader.readAsDataURL(acceptedFiles[0])
        }

        const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > 26214400;

        if (isFileTooLarge) {
            setNone('block')
            setTimeout(() => {
                setNone('none')
            }, 1500);
        }

    }

    function remove(acceptedFiles) {
        let newState = state.file.filter(item=>{
            return item !== acceptedFiles[0]
        })
        setProgressBar(0)
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
                    <p>{title}</p>
                </div>
                <div className="upload-box">
                <Dropzone maxSize={10485760}  onDrop={onDropFile} ref={dropzoneRef} noClick noKeyboard accept="application/pdf" disabled={dropDisable}>
                    {({getRootProps, getInputProps, acceptedFiles,isDragReject,rejectedFiles}) => {
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
                                <div className="overlay-progress" style={{opacity:hideOverlay.opacity,visibility:hideOverlay.visibility}}>
                                    <svg
                                        className="progress-ring"
                                        width="120"
                                        height="120">
                                        <circle
                                            ref={circle}
                                            className="progress-ring__circle"
                                            stroke="#f15d2a"
                                            strokeWidth="7"
                                            fill="transparent"
                                            r="46"
                                            cx="60"
                                            cy="60"
                                            style={{strokeDasharray:`${circumference} ${circumference}`,strokeDashoffset:`${circumference}`}}
                                        >
                                        </circle>
                                    </svg>
                                    <p className="number_progress">{progressBar}%</p>
                                </div>
                                <div className="text-danger" style={{marginTop:'1rem',display:none}}>
                                    File is too large.
                                </div>
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


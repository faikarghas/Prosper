import React,{useState} from 'react'

import {sridarma,tangguhSwakarsaMandiri,bersihSepertiBaru,northcliffIndonesia,escoAuto,collabStore,forexdanaFund} from '../../lib/data'

function client({title,data}) {
    const [show, setShow] = useState(false);

    function _setShow() {
        setShow(!show)
    }

    function _showList(list) {
        return list
    }

    function _getList(dataku) {
        switch (data) {
            case 'data1':
                return  _showList(sridarma);
            case 'data2':
                return  _showList(tangguhSwakarsaMandiri);
            case 'data3':
                return  _showList(bersihSepertiBaru);
            case 'data4':
                return  _showList(northcliffIndonesia);
            case 'data5':
                return  _showList(escoAuto);
            case 'data6':
                return  _showList(collabStore);
            case 'data7':
                return  _showList(forexdanaFund);
            default:
                break;
        }
    }

    return (
        <li>
            <div className="click" onClick={_setShow}>
                <p className={show ? 'rotate' : ''}>></p>
                <h4>{title}</h4>
            </div>
            <ul className={show ? 'show-init portCap' : 'hidepostcap'}>
                {
                    // showLIst
                    _getList().dataClient.map((res,i)=>{
                        return (
                            <React.Fragment>
                                <li key={i}>
                                <p>{res.title}</p>
                                {res.client}
                                <br/>
                                <br/>
                                {res.desc}
                                </li>
                            </React.Fragment>
                        )
                    })
                }
            </ul>
        </li>
    )
}


export default client


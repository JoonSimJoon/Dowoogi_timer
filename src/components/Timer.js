import { render } from "@testing-library/react";
import logo from '../logo.svg';
import * as js_func from "../js_func/js_fuctions.js";
import React, { useState,useRef,useEffect } from 'react';
import ReactInterval from 'react-interval';
import ReactDOM from 'react-dom';


// https://github.com/nkbt/react-works/tree/master/packages/interval

function Timer () {
    
    const [contdown1, setContdown1] = useState(js_func.CountDownTimer('08/08/2024 09:00 AM','03/06/2023 01:00 PM').timeresult1);
    const [contdown2, setContdown2] = useState(js_func.CountDownTimer('08/08/2024 09:00 AM','03/06/2023 01:00 PM').timeresult2);
    
    function timecopy(e) {
      e.preventDefault();
      js_func.copyToClipboard(js_func.CountDownTimer('08/08/2024 09:00 AM','03/06/2023 01:00 PM').timeresult3);
      alert('복사 됨');
    }
    
      return (
        // <div>
            <div className="Timer" onClick={timecopy}>
              김동욱 제대까지: <br/>
            {contdown1}
                <ReactInterval timeout={1000} enabled={true}
                callback={() => {setContdown1(js_func.CountDownTimer('08/08/2024 09:00 AM','03/06/2023 01:00 PM').timeresult1);
                }} />
                <br/>
            {contdown2}
                <ReactInterval timeout={1000} enabled={true}
                callback={() => {setContdown2(js_func.CountDownTimer('08/08/2024 09:00 AM','03/06/2023 01:00 PM').timeresult2);
                }} />

                
            </div>
        // </div>
      );
}


export default Timer;

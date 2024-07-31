"use client"
import axios from "axios";
import { useEffect } from "react";

export default function Test() {
    // const latitude = 37.7749;
    // const longitude = -122.4194;  US

    const latitude = 14.444307393764221;
    const longitude = 121.00434249842048;
    

    axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
        .then(res => {
            console.log(res.data)
    })


    // useEffect(() => {
    //     PrintElem()
    // },[document])
    
    // function PrintElem()
    // {
    //     var mywindow = window.open('', 'PRINT', 'height=400,width=600');

    //     mywindow?.document?.write(document?.getElementById("print"))
    //     mywindow?.document.close(); // necessary for IE >= 10
    //     mywindow?.focus(); // necessary for IE >= 10*/

    //     mywindow?.print();
    //     mywindow?.close();

    //     return true;
    // }
    return (
        <div id="print" className="bg-blue-500">hi</div>
    )
}
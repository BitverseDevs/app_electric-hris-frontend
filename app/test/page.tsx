import axios from "axios";

export default function Test() {
    // const latitude = 37.7749;
    // const longitude = -122.4194;  US

    const latitude = 14.444307393764221;
    const longitude = 121.00434249842048;
    

    axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
        .then(res => {
            console.log(res.data)
        })
    return (
        <div>hi</div>
    )
}
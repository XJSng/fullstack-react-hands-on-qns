import React, {useState} from 'react'

export default function GuestList() {

    const [guests, setGuests] = useState(
        [
            'Tony Stark',
            'Hawkeye',
            'Spider Man',
            'Bruce Wayne'
        ]
    )

    return (
        <React.Fragment>
            <h1>Guest List:</h1>
<ul>
{guests.map((e)=>{
    return <li>{e}</li>
})
}</ul>
        </React.Fragment>
    )
}
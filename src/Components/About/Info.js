import React from 'react';
import InfoCard from './InfoCard';
import { faClock ,faMapMarker, faPhone} from '@fortawesome/free-solid-svg-icons'


const infosData=[
    {
        title:'Opening Hours',
        description:'We are open 7 days from 10:00 AM - 10:00 PM',
        icon: faClock,
        background:'primary'
    },
    {
        title:'Visit Our Location',
        description:'Mojaffor Nogor, Chattogram',
        icon: faMapMarker,
        background:'secondary'
    },
    {
        title:'Contact Us Now',
        description:'+8801674613968',
        icon: faPhone,
        background:'primary'
    }
]

const Info = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="row w-80">
            {
                infosData.map(info=><InfoCard info={info}></InfoCard>)
            }
            </div>
        </div>
    );
};

export default Info;
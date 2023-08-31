import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import SingleMember from './SingleMember/SingleMember';

const OurTeam = () => {
    const teamDetails = [
        {
            name: "Rana",
            designation: "Creative Head",
            pic: "https://img.freepik.com/free-photo/male-graphic-designer-sitting-office_1170-1038.jpg?w=996&t=st=1688219098~exp=1688219698~hmac=4dfb04d4e3f0e83b045ff36938c495ce6928d2c0a766cb2f92fa7352742f54f6"

        },
        {
            name: "Nadim",
            designation: "Marketing Head",
            pic: "https://img.freepik.com/free-photo/handsome-man-suit-standing-outdoors-park_181624-19099.jpg?w=996&t=st=1688218929~exp=1688219529~hmac=41abe5057516dbab956fd5c8627cd7264afb1d65512e5f2ac652dac9cccab353"

        },
        {
            name: "Opurbo",
            designation: "HR",
            pic: "https://img.freepik.com/free-photo/smart-looking-teacher_53876-23045.jpg?w=996&t=st=1688218980~exp=1688219580~hmac=1861b1039923628121a3cf5bf1d1b887c0af140a1ae3f7cd9e913603e3278edd"

        },
        {
            name: "Mim",
            designation: "Manager",
            pic: "https://img.freepik.com/free-photo/young-beautiful-woman-smiling-posing-purple-wall_176420-2852.jpg?t=st=1688219005~exp=1688219605~hmac=00b140a6de127b9a95cb213a5010ece7123295337f82bf7f8fd9d5aa57468434"

        },
    ]
    return (
        <>
            <h1 className='text-center text-4xl font-bold underline text-orange-600 my-6'>Our Team</h1>
            <div className='mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-5'>
                {
                    teamDetails.map((member, idx) => <SingleMember key={idx} member={member}></SingleMember>)
                }

            </div>
        </>
    );
};

export default OurTeam;
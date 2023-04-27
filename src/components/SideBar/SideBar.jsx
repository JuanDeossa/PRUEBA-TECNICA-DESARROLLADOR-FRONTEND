import React, { useState } from 'react'
import { SideBarOptions } from '../../Constants/Constants'

export const SideBar = () => {
    const [optionSelected, setOptionSelected] = useState(1)

    const f1 =(e)=> {
        const val =e.target.value
        console.log(val);
        setOptionSelected(val)
    }

    return (
        <div className='w-full h-full bg-indigo-600'>
            <ul className='mx-auto w-32 text-white font-bold text-xl pt-32 flex flex-col gap-8'>
                {SideBarOptions.map((option,index)=>(
                    <li
                        onClick={f1}
                        value={option.id}
                        className={`rounded-xl border-white border-solid border-2 p-2 ${option.id===optionSelected?"border-4":"border-2"}`}
                        key={option.id}>
                        {option.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
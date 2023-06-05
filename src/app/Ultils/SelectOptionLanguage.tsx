'use client'

import React, { useState } from 'react'
import english from '../assets/language/english.jpg'
import vietnam from '../assets/language/vietnam.jpg'
import france from '../assets/language/france.jpg'
import Image, { StaticImageData } from 'next/image';


const SelectOptionLanguage = () => {
    const [selectedOptionLanguage, setSelectedOptionLanguage] = useState('english')
    const ImagePath = () =>{
        let imagePath : StaticImageData | string = ''
        if(selectedOptionLanguage === 'english'){
            imagePath = english
        }else if(selectedOptionLanguage === 'vietnam'){
            imagePath = vietnam
        }else if(selectedOptionLanguage === 'france'){
            imagePath = france
        }
        return imagePath
    }
  
}

export default SelectOptionLanguage

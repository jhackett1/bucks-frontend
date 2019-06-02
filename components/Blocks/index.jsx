import React from 'react'

import RichText from './RichText'
import PersonProfile from './PersonProfile';


export default ({blocks}) =>
    <>
        {blocks.map((block, i)=>
            <>
                {(block.type === "rich_text") && <RichText key={i} content={block.value}/>}
                {(block.type === "person_profile") && <PersonProfile key={i} headline={block.value.headline} text={block.value.text} imgAlt={block.value.image.title} imgSrc={block.value.image.large.src}/>}
            </>
        )}
    </>
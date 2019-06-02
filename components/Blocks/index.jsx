import React from 'react'

import RichText from './RichText'
import PersonProfile from './PersonProfile';
import CallToActionButton from './CallToActionButton';


export default ({blocks}) =>
    <>
        {blocks.map((block, i)=>
            <>
                {(block.type === "rich_text") && <RichText key={i} content={block.value}/>}
                {(block.type === "call_to_action") && <CallToActionButton key={i} url={block.value.url} text={block.value.button_text}/>}
                {(block.type === "person_profile") && <PersonProfile key={i} headline={block.value.headline} text={block.value.text} imgAlt={block.value.image.title} imgSrc={block.value.image.large.src}/>}
            </>
        )}
    </>
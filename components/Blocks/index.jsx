import React from 'react'

import RichText from './RichText'


export default ({blocks}) =>
    <>
        {blocks.map((block, i)=>
            <>
           
                {(block.type === "rich_text") && <RichText content={block.value}/>}
            </>
        )}
    </>
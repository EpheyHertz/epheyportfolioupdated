'use client'
import React from 'react'
import { gridItems } from '@/data'
import { BentoGridItem } from './ui/BentoGrid'
import { BentoGrid } from './ui/BentoGrid'

const Grid = () => {
    return (
        <BentoGrid>
          {gridItems.map(({id,title,description,className,img,
            imgClassName,titleClassName
          }) => {
            return (
              <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                
              />
            );
          })}
        </BentoGrid>
      );
      
}

export default Grid
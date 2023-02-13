import React from 'react';
import '../css/tag.css';
import { TagComponentProps } from '../interfaces/TagComponentProps';

//component for tags on moviecard
export function TagComponent({tags, className}: TagComponentProps) { 
    return (
        <div className={`movieTag`}>
            {
                tags.map((tag: any) => {
                    return <p 
                        className={className}
                        key={tag}
                    >{tag}</p>
                })
            }
        </div>
    );
}

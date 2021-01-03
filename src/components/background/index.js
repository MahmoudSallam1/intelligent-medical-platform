import React from 'react'
import {BackgroundImage,Title,Span} from './styles/background'

export default function Background({children,...restProps}) {
    return (
        <BackgroundImage {...restProps}>
            {children}
        </BackgroundImage>
    )
}


Background.Title = function BackgroundTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Background.Span = function BackgroundSpan({children,...restProps}){
    return <Span {...restProps}>{children}</Span>
}

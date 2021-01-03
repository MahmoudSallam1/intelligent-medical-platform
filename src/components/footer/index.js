import React from 'react'
import {Container,Title,Content} from './styles/footer'

export default function Footer({children,...restProps}) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}


Footer.Title = function FooterTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>
}


Footer.Content = function FooterContent({children,...restProps}){
    return <Content {...restProps}>{children}</Content>
}


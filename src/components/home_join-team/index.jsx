import { forwardRef } from 'react'
import { Image, Wrapper } from '../../GlobalStyles'
import { 
    Inner, 
    Background,
    WrapSection, 
    Heading, 
    Title, 
    Text,
    Wrap, 
    Overlay,
    Group 
} from './JoinTeamStyled'

const JoinTeam = ({ children, ...restProps }) => {
    return (
        <Inner {...restProps}>{children}</Inner>
    )
}

JoinTeam.WrapSection = function JoinTeamWrapSection({ children, ...restProps }) {
    return (
        <WrapSection {...restProps} >{children}</WrapSection>
    )
}

JoinTeam.Background = function JoinTeamBackground({ children, ...restProps }) {
    return (
        <Background {...restProps} >{children}</Background>
    )
}

JoinTeam.Wrapper = function JoinTeamWrapper({ children, ...restProps }) {
    return (
        <Wrapper {...restProps}>{children}</Wrapper>
    )
}

JoinTeam.Group = function JoinTeamGroup({ children, ...restProps }) {
    return (
        <Group {...restProps}>{children}</Group>
    )
}

JoinTeam.Heading = forwardRef(function JoinTeamHeading({ children, ...restProps }, ref) {
    return (
        <Heading {...restProps} ref={ref}>{children}</Heading>
    )
})

JoinTeam.Title = function JoinTeamTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>{children}</Title>
    )
}

JoinTeam.Text = function JoinTeamText({ children, ...restProps }) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

JoinTeam.Wrap = function JoinTeamWrap({ children, ...restProps }) {
    return (
        <Wrap {...restProps}>{children}</Wrap>
    )
}

JoinTeam.Image = forwardRef(function JoinTeamImage({ ...restProps }, ref) {
    return (
        <Image {...restProps} ref={ref}/>
    )
})

JoinTeam.Overlay = function JoinTeamOverlay({children, ...restProps}) {
    return (
        <Overlay {...restProps}>{children}</Overlay>
    )
}

export default JoinTeam
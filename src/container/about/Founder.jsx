import { useContext } from 'react'
import { Founder } from '../../components'
import { ScrollContext } from '../../context'

const FounderContainer = ({ data }) => {
    const { aboutTitleFounders, aboutFounders, activeElement } = useContext(ScrollContext)

    return (
        <Founder>
            <Founder.Wrapper>
                <Founder.Title
                    ref={aboutTitleFounders}
                    active={activeElement?.titleFounders}
                >
                    {data.title}
                </Founder.Title>
                <Founder.Group ref={aboutFounders} active={activeElement?.founders}>
                    {data.founders.map((founder, index) =>
                        <Founder.Box key={index}>
                            <Founder.Wrap>
                                <Founder.Image src={founder.img} alt='' />
                            </Founder.Wrap>
                            <Founder.Info>
                                <Founder.Name>{founder.founderName}</Founder.Name>
                                <Founder.Position>{founder.position}</Founder.Position>
                            </Founder.Info>
                        </Founder.Box>
                    )}
                </Founder.Group>
            </Founder.Wrapper>
        </Founder>
    )
}

export default FounderContainer
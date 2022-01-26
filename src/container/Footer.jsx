import { Logo } from '../components'
import { Footer } from '../components'

const FooterContainer = ({ data }) => {
    // const renderList = (list) => {
    //     return list.map((item, index) => {
    //         switch (typeof item) {
    //             case 'string':
    //                 return (
    //                     <Footer.Item key={index}>
    //                         <Footer.Text>{item}</Footer.Text>
    //                     </Footer.Item>
    //                 )
    //             case 'object':
    //                 // if (item.path.includes("/")) {
    //                 //     return (
    //                 //         <Footer.Item key={index}>
    //                 //             <Footer.RouteLink to={item.path}>{item.title}</Footer.RouteLink>
    //                 //         </Footer.Item>
    //                 //     )
    //                 // } else {
    //                 //     return (
    //                 //         <Footer.Item key={index}>
    //                 //             <Footer.Link href={item.path} target='_blank' rel='noreferrer'>{item.title}</Footer.Link>
    //                 //         </Footer.Item>
    //                 //     )
    //                 // }
    //                 console.log('object');
    //             case undefined:
    //                 return (
    //                     <Footer.Item key={index}>
    //                         <Footer.Image src={item.img} alt={item.alt} />
    //                     </Footer.Item>
    //                 )
    //             default:
    //                 break
    //         }
    //     })
    // }

    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Heading>
                    <Logo />
                    <Footer.Text>{data.text}</Footer.Text>
                </Footer.Heading>
                <Footer.Wrap>
                    {data.nav.map(({ title, list }, index) =>
                        <Footer.NavList key={index}>
                            <Footer.ListTitle>{title}</Footer.ListTitle>
                            {/* {renderList(list)} */}
                        </Footer.NavList>
                    )}
                </Footer.Wrap>
                <Footer.CoppyRight>
                    <Footer.Text>{data.coppyRight}</Footer.Text>
                </Footer.CoppyRight>
            </Footer.Wrapper>
        </Footer>
    )
}

export default FooterContainer
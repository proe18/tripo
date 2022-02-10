import { useLocation } from 'react-router-dom'
import { Footer, Content } from '../container'
import * as ROUTES from '../constants/routes'
import { footerData } from '../data/Footer_data'
import { policyAndTermsData } from '../data/PolicyAndTerms_data'

const PolicyAndTerms = () => {
    const location = useLocation()

    const checkPath = (path) => {
        switch (path) {
            case ROUTES.POLICY:
                return policyAndTermsData.policy
            case ROUTES.TERMS:
                return policyAndTermsData.terms
            default: break
        }
    }   

    const contentData = checkPath(location.pathname)

    return (
        <>
            <Content data={contentData} />
            <Footer data={footerData} />
        </>
    )
}

export default PolicyAndTerms
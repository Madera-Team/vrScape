
import './documentation.scss';
import { Faqs } from './faqs/Faqs';
import { OculusControl } from './imagesSvg/OculusControl';

export const Documentation = () => {

    return(
        <>
        <div className="documentation-cont">
            <h1 className='faq-title'>FAQ</h1>
            <Faqs/>
            <div className="control-info-cont">
                <h1 className='oculus-control-title'>HOW TO USE THE CONTROL?</h1>
                <OculusControl/>
            </div>
        </div>
        </>
    )
}
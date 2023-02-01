
import './documentation.scss';
import { Faqs } from './faqs/Faqs';
import { OculusControl } from './imagesSvg/OculusControl';

export const Documentation = () => {

    return(
        <>
        <div className="documentation-cont">
            <Faqs/>
            <div className="control-info-cont">
                <OculusControl/>
            </div>
        </div>
        </>
    )
}
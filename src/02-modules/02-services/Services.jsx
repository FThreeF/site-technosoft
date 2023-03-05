import ServiceBlock from '04-elements/02-blocks/02-serviceBlock/ServiceBlock';
import styleNames from './services.module.css';

const Services = ({DataServices}) => {
    return (
        <div className={`${styleNames.wrapper} wrapper`}>
            <div className={`${styleNames.container} container`}>
                {DataServices.Service.map(el => 
                    <ServiceBlock DataService={el}/>    
                )}
            </div>
        </div>
    )
}

export default Services;
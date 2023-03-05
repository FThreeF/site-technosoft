import styleNames from './serviceBlock.module.css';

const ServiceBlock = ({DataService}) => {
    return (
        <div className={styleNames.block}>
            <h1 className={styleNames.title}>{DataService.title}</h1>
            <p className={styleNames.text}>{DataService.text}</p>
        </div>
    )
}

export default ServiceBlock;
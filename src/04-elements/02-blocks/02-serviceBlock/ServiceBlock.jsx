import styleNames from './serviceBlock.module.css';

const ServiceBlock = ({DataService, Image}) => {
    console.log(DataService.image)
    return (
        <div className={styleNames.block}>
            <h1 className={styleNames.title}>{DataService.title}</h1>
            <p className={styleNames.text}>{DataService.text}</p>
            <img className={styleNames.image} src={Image} alt="" />
            <button className={styleNames.button}>Подробней</button>
        </div>
    )
}

export default ServiceBlock;
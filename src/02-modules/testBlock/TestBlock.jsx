import styleNames from './testBlock.module.css';

const TestBlock = ({title}) => {
    return (
        <div className={`${styleNames.wrapper} wrapper`}>
            <div className={`${styleNames.container} container`}>
                <h2 className={`${styleNames.title} title`}>{title}</h2>
            </div>
        </div>
    )
}

export default TestBlock;
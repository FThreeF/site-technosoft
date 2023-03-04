import Description from '02-modules/01-description/Description';
import styleNames from './main.module.css';


const Main = ({DataMain}) => {
    return (
        <div className={`${styleNames.page} page`}>
            <Description DataDescription={DataMain.Description}/>
        </div>
    )
}

export default Main;
import Description from '02-modules/01-description/Description';
import Services from '02-modules/02-services/Services';
import styleNames from './main.module.css';


const Main = ({DataMain}) => {
    return (
        <div className={`${styleNames.page} page`}>
            <Description DataDescription={DataMain.Description}/>
            <Services DataServices={DataMain.Services}/>
        </div>
    )
}

export default Main;
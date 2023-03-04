import Main from '01-pages/00-main/Main';
import 'App.css';

const App = ({DataContent}) => {
  return (
    <div className='app'>
      <Main DataMain={DataContent.Main}/>
    </div>
  )
}

export default App;
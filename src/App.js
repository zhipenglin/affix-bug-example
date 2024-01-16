import {useState, useEffect} from 'react';
import {Affix} from 'antd';
import logo from './logo.svg';

function App() {
    const [innerShow, setInnerShow] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setInnerShow(true);
        }, 0);
    }, []);
    return (<div style={{
        height: '200vh'
    }}>
        <div style={{
            height: '48px', 'background': 'blue'
        }}></div>
        <Affix offsetTop={48}>
            <div>
                {innerShow && <div style={{
                    height: '100px', 'background': 'red'
                }}/>}
            </div>
        </Affix>
        <img src={logo} alt="logo" style={{width: '200px', height: '200px'}}/>
    </div>);
}

export default App;

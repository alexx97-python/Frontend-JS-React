import React from 'react';
import './style/main_component.scss';


const MainComponent = (props) =>{
    return (
        <div className="main-component">
            <div className="links">
                <div className="link">
                    <a href="">ДЛЯ НЕЕ</a>
                </div>
                <div className="link">
                    <a href="">ДЛЯ НЕГО</a>
                </div>
            </div>
        </div>
    )
}

export default MainComponent;
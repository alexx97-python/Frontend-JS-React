import React from 'react';
import ItemCard from './ItemCard/ItemCard';
import Sidebar from './Sidebar/Sidebar';
import './style/catalog.scss';

const Catalog = (props) => {
    return (
        <div className="catalog__wrapper">
            <div className="sidebar__wrapper">
                <Sidebar />
            </div>
            <div className="items__catalog__wrapper">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
        </div>
    );
}

export default Catalog;
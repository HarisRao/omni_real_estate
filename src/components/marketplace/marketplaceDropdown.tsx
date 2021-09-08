import React from 'react';
import './marketplace.css'
import Select from 'react-select';
import { Button } from 'reactstrap';

const prices = [
    { value: 'all', label: 'All' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
];
const categories=['category','Bathrooms','Price','Amenities','Bedrooms','Area']


class MarketplaceDropdown extends React.Component{
  
  render(){
    return (
        <div id="box" className="p-3">
            {categories.map((category,index)=>
             <Select key={index} className="m-2 py-2 px-2" options={prices} placeholder={category}></Select>
            )}
            <Button className="my-2 ml-3 py-2 px-3 btn-sm" color="white">Search Property</Button>
        </div>
    );

  }
 
}

export default MarketplaceDropdown;

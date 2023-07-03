import React, { useState } from 'react'
import Food from './Food';
// import { NavLink } from 'react-router-dom';

const Item = () => {

    const [data,setItem]=useState(Food);

    const filterItem= (currItem)=>{
        const updateItem =Food.filter((currelem)=>{
            return currelem.category === currItem;
        })
        setItem(updateItem);
    }
    
  return (
    <>
    <h1 className='head'>Food Menu</h1><hr></hr>
    
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12  col-md- 3 d-flex justify-content-center item'>
                <button onClick={()=> setItem(Food)} >All Food</button>
                <button onClick={()=> filterItem('Fast Food')} >Fast Food</button>
                <button className='btn btn-warning' onClick={()=> filterItem('Break fast')} >Break fast</button>
                <button className='btn btn-warning' onClick={()=> filterItem('Lunch')} >Lunch</button>
                <button className='btn btn-warning' onClick={()=> filterItem('Dinner')} >Dinner</button>
                <button className='btn btn-warning' onClick={()=> filterItem('Veg')} >Veg</button>
                <button className='btn btn-warning' onClick={()=> filterItem('Non Veg')} >Non Veg</button>
                <button className='btn btn-warning' onClick={()=> filterItem('Tea')} >Tea</button>
                <button className='btn btn-warning' onClick={()=> filterItem('Coffee')} >Coffee</button>
            </div>
        </div>
    </div>



    <div className='container-fluid '>
        <div className='row'>
         {/* row ke andr aoo using {} */}
            {
                data.map((elem)=>{
                    const {name,category,price,img}=elem;
                    return (
                        /* col-lg-1 col-md-6 col-sm-12 */
                        <div className='col-12 col-md '>
                        {/* col-lg-3 col-md-3 col-sm-1 */}
                            <div className='food-card '>

                                <div className='food-img-left'>
                                    <img src={img} alt={img} height={'129px'} width={'134px'}></img>
                                </div>
                                <div className='food-detail-right'>
                                    <h3>{name}</h3>
                                    <h5> {category}</h5>
                                    <span>price : {price}</span>
                                    <button className='btn ' >Order Now</button>
                                </div>


                                {/* <div className="order d-flex">
                                    <span>Price : 120.00</span>
                                    <NavLink to={''}  className={'btn'}>
                                    <span className='badge badge-success'>Order Now</span>

                                    </NavLink>
                                </div> */}


                            </div>
                        </div>
                    
                    )
                })
            }
       
        </div>
    </div>
    </>
    )
}

export default Item;
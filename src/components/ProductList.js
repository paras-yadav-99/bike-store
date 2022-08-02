import React, { Component } from 'react'
import ProductTitle from './ProductTitle'
import {Link} from 'react-router-dom'
import './ProductList.css'

export default class ProductList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className='py-5'>
                    <div className='container'>
                        <ProductTitle name='Our' title='Products'/>
                        <div className='row py-5'>                           
                                
                                <Link to='/bikes' className=' mb-sm-2 col-md-6'>
                                    <div className='imgContainer'>
                                        <img 
                                        className='img-thumbnail'
                                        src='https://cdn.shopify.com/s/files/1/2171/2821/products/UNI_Moke_Classic_V4_Stealth_Black_FrontView2_90c1d640-ec6c-47b1-a0d8-3b80f8629d3e_2000x.jpg?v=1568116920' 
                                        alt='Bike'
                                        />
                                        <div className='imgTextPosition'>
                                            <div className='Text'>Bikes</div>
                                        </div>
                                   </div>
                                </Link>
                                             
                                <Link to='/accessories' className='col-md-6'>
                                    <div className='imgContainer'>
                                            <img 
                                            className='img-thumbnail'
                                            src ="https://assets.bigcartel.com/product_images/234186842/IMG_3539.JPG?auto=format&fit=max&w=1000" 
                                            alt='Accessory'
                                            />
                                            <div className='imgTextPosition'>
                                                <div className='Text'>Accessories</div>
                                            </div>
                                    </div>
                                </Link>
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        ) 
    }
}



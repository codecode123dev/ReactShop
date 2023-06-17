import React, { useEffect, useState } from 'react'
import '../assets/css/ProductDetail.css'
import Header from './Header'
import { Breadcrumb } from './Breadcrumb'
import image from '../assets/img/Mask.png'
import { useParams } from 'react-router-dom'
import { itemProduct } from '../pages/HomePage'
import user from '../assets/img/user.png'
import start from '../assets/img/Star.png'
import Footer from './Footer'



function ProductDetail() {
    const { productId } = useParams();
    const thisProduct = itemProduct.filter((prod) => prod.id ===  +productId)
  

    return (
        <>
            <Header/>
            <div className='container text-[14px] my-[20px]'>
                {thisProduct.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div className='grid grid-cols-2'>
                                <div className='flex justify-center'>
                                    <img src={image} alt='product' />
                                </div>
                                <div className='text-[14px] '>
                                    <div>
                                        <div className='text-[32px] text-[#2D2D2D]'>{item.name}</div>
                                        <div className='text-[#000000]'>by <span className='text-[#1565C0]'>{item.category}</span> </div>
                                        <div
                                        className='mt-[10px]  w-[500px] h-[46px] flex flex-row'>
                                            <div className='bg-[#DFDFDF] rounded-[10px]'>
                                                <sup className='text-[#29B6F6] text-[16px]'>$</sup> 
                                                <span className='text-[#1565C0] text-[32px]'>{item.price}</span>
                                            </div>  
                                            <div className='ml-[10px]'>
                                                <p>Save 25%</p>
                                                <p>Inclusive deal of the day</p>
                                            </div>
                                        </div>
                                        <div className='mt-[10px]'>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row mt-[10px]'>
                                        <div className='border-[2px] rounded-[10px]'>
                                            <select name=''>
                                                <option value="">Select</option>
                                                <option value=''>a</option>
                                                <option value=''>b</option>
                                                <option value=''>c</option>
                                            </select>
                                        </div>
                                        <div className='ml-[20px]'>
                                            <button className='w-[169px] h-[46px] border-[2px] bg-[#1565C0] border-[#1565C0] rounded-[5px] text-[16px] text-[#FFFFFF]'>Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 mt-[20px] '>
                                <div className='flex justify-around px-[120px] '>
                                    <img src={item.img} alt='img' style={{width:'100px'}}/>
                                    <img src={image} alt='img' style={{width:'100px'}}/>
                                    <img src={image} alt='img' style={{width:'100px'}}/>
                                </div>
                                <div className='flex flex-row '>
                                        <div className='mr-[10px]'>
                                            <img src={user} alt='user'/>
                                        </div>
                                        <div className='w-[280px]'>
                                            <p>Alex Morningstar</p>
                                            <p>Contrary to popular belief</p>
                                            <p className='break-all'>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin</p>
                                        </div>
                                        <div>
                                            <i className="text-[#1565C0] fa fa-star-o" aria-hidden="true"></i>
                                            <i className="text-[#1565C0] fa fa-star-o" aria-hidden="true"></i>
                                            <i className="text-[#1565C0] fa fa-star-o" aria-hidden="true"></i>
                                            <i className="text-[#1565C0] fa fa-star-o" aria-hidden="true"></i>
                                            <i className="text-[#1565C0] fa fa-star-o" aria-hidden="true"></i>
                                        </div>
                                    </div>
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
            
            <Footer/>
        </>
    )
}

export default ProductDetail
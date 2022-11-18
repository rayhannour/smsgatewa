import React, { useState, useRef, useEffect } from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { Carousel } from 'primereact/carousel';
import CustomerService from '../../service/CustomerService';
console.log("TopCostumers component");
const carouselResponsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];

export const TopCostumers = () => {
    const [customerCarousel, setCustomerCarousel] = useState([]);
    useEffect(() => {
        const customerService = new CustomerService();

        

        setCustomerCarousel([
            { user: '9,673 Users', value: '$8,362,478', image: 'armoirie' },
            { user: '9,395 Users', value: '$7,927,105', image: 'justice' },
            { user: '7,813 Users', value: '$6,471,594', image: 'gopro' },
            { user: '7,613 Users', value: '$5,697,883', image: 'north' },
            { user: '98,673 Users', value: '$7,653,311', image: 'mc' },
            { user: '5,645 Users', value: '$4,567,823', image: 'dell' },
            { user: '5,153 Users', value: '$5,342,678', image: 'wwf' },
            { user: '4,338 Users', value: '$5,867,391', image: 'bmw' },
            { user: '4,170 Users', value: '$4,647,233', image: 'pepsi' },
            { user: '3,765 Users', value: '$4,123,876', image: 'netflix' },
            { user: '3,490 Users', value: '$3,688,362', image: 'deloitte' },
            { user: '2,976 Users', value: '$3,978,478', image: 'pg' },
        ]);
    }, [])













   
    const itemTemplate = (customer) => {
        return (
            <div className="card mr-4">
                <div className="customer-item-content">
                    <div className="mb-6">
                        <img src={'assets/layout/images/dashboard/' + customer.image + '.png'} alt={customer.image} className="product-image" />
                    </div>
                    <div>
                        <h4>{customer.user}</h4>
                        <h5 className="mt-0 mb-3">{customer.value}</h5>
                    </div>
                </div>
            </div>
        )
    }

    return (

        <>
         <div className="col-12 widget-customer-carousel">
                    <h6>Top customers</h6>
                    <Carousel value={customerCarousel} numVisible={4} numScroll={1}  responsiveOptions={carouselResponsiveOptions} circular itemTemplate={itemTemplate} />
                </div>
        </>

    )


}

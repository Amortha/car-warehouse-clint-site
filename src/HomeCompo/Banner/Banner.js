import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-75"
                        src="http://demo.joomsky.com/car-manager/demo/wp-content/uploads/jsvehiclemanager_data/data/vehicle/vehicle_16/lw_vehicleimage2.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-75"
                        src="http://demo.joomsky.com/car-manager/demo/wp-content/uploads/jsvehiclemanager_data/data/vehicle/vehicle_5/lw_vehicleimage1.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-75"
                        src="http://demo.joomsky.com/car-manager/demo/wp-content/uploads/jsvehiclemanager_data/data/vehicle/vehicle_4/m_vehicleimage2.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel> 
        </>
    );
};

export default Banner;
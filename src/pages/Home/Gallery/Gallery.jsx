import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Gallery = () => {
    useTitle('Home')
    return (
        <div className='my-10'>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://media.istockphoto.com/id/1363867603/photo/toy-car.jpg?b=1&s=170667a&w=0&k=20&c=2jM5S-LYyQUezLRZnLnJHL0pJBRHWHdUKWFiYf3fbjM=" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://media.istockphoto.com/id/182176558/photo/teal-toy-car-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=ZP6bLpEaBuf2I30YmxW-p-hZ0CDKp6Xk27srV1yB8g4=" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://media.istockphoto.com/id/1319191546/photo/toy-retro-car-convertible-in-pattern-on-orange-background-one-car-turned-on-its-side.jpg?b=1&s=170667a&w=0&k=20&c=4kRHeCvbnrHzmL0h7fQFzdhsIlHqXRFrSD3wT2zAMTE=" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://media.istockphoto.com/id/1365482501/photo/small-toy-car-crash-accident-image.jpg?b=1&s=170667a&w=0&k=20&c=XwRnWy9aTQd27Rd-SpxF2qwcgC-jsTnRqfx6H2ZNUwc=" alt=""  />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://media.istockphoto.com/id/1024366752/photo/red-toy-car-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=fruDDTOFbc6zDsqUoftbi3G78GkkSrE5ewPnij72jU4=" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://media.istockphoto.com/id/1316414554/photo/colorful-toy-cars-top-view-on-a-yellow-background-with-copy-space.jpg?b=1&s=170667a&w=0&k=20&c=rOpJA4NMFQ2Rxkz89CS_ZP3souvC9Cl9__W-CuOzSzI=" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://media.istockphoto.com/id/1410043516/photo/three-small-rolling-toy-cars-on-blue-background.jpg?b=1&s=170667a&w=0&k=20&c=Wm7tsg-z1d2hmDr8HBW_zDx39povjKz1vSf54wL5UNA=" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://media.istockphoto.com/id/1024140432/photo/sports-car-toy-car-model-on-a-colourful-background-traveling-and-transport-concept.jpg?b=1&s=170667a&w=0&k=20&c=1YK2DftD5dsB8a7pISGxatUV6hKOGsDe4v205uHQOcs=" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://media.istockphoto.com/id/92398896/photo/toy-model-sixties-car.jpg?b=1&s=170667a&w=0&k=20&c=-udg67201I4l-pZ4AOBMPtBs9zdEQ-EjsQcMFZuETSo=" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://media.istockphoto.com/id/1435864071/photo/orange-taxi-toy.jpg?s=612x612&w=0&k=20&c=Ot1I-xIu2AJQWw98vWW-vRPt4KPdPMulIIGkCEBXN64=" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://media.istockphoto.com/id/1430629604/photo/sustainable-4-wheel-delivery-cargo-e-bike.jpg?s=612x612&w=0&k=20&c=ZZZSyjpL7Ia8J3Udpp-FroB-a6Iola3iL6uWekc9PzU=" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://media.istockphoto.com/id/185283149/photo/red-toy-car.jpg?s=612x612&w=0&k=20&c=vnn6YD6I6BLT5g9uwF9StyU6KYVSCd9mIMcfOZXCHC4=" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Gallery;
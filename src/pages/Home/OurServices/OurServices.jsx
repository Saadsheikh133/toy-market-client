import img from '../../../assets/images/download (1).jpeg'
import img2 from '../../../assets/images/download (2).jpeg'
import img3 from '../../../assets/images/download.jpeg'
import img4 from '../../../assets/images/images (1).png'

const OurServices = () => {
    return (
        <div className='bg-slate-100 py-20'>
            <h2 className="text-7xl font-bold text-center my-10">Our Services</h2>
            <div className='lg:flex gap-4 text-center px-10 text-xl leading-relaxed '>
                <div className='px-4'>
                    <h2 className="text-4xl font-bold my-4">Football</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptatum deleniti iusto, praesentium excepturi quasi,</p>
                    <img className='border-t-8 my-6 rounded-b-full mx-auto border-orange-600' src={img} alt="" />
                    <h1 className='text-7xl font-extrabold my-4 text-slate-300 hover:text-orange-500'>01</h1>
                </div>
                <div className='px-4'>
                    <h1 className='text-7xl font-extrabold my-4 text-slate-300 hover:text-orange-500'>02</h1>
                    <img className='border-t-8 mx-auto my-6 rounded-b-full border-orange-600' src={img2} alt="" />
                    <h2 className="text-4xl font-bold my-4">Basketball</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptatum deleniti iusto, praesentium excepturi quasi,</p>
                </div>
                <div className='px-4'>
                    <h2 className="text-4xl font-bold my-4">Protect Legs</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptatum deleniti iusto, praesentium excepturi quasi,</p>
                    <img className='border-b-8 my-6 rounded-t-full mx-auto border-orange-600' src={img3} alt="" />
                    <h1 className='text-7xl font-extrabold my-4 text-slate-300 hover:text-orange-500'>03</h1>
                </div>
                <div className='px-4'>
                    <h1 className='text-7xl font-extrabold my-4 text-slate-300 hover:text-orange-500'>04</h1>
                    <img className='border-t-8 my-6 rounded-b-full mx-auto border-orange-600' src={img4} alt="" />
                    <h2 className="text-4xl font-bold my-4">Great Solutions</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptatum deleniti iusto, praesentium excepturi quasi,</p>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
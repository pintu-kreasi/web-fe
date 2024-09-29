import { useEffect, useState } from 'react';
import banner1 from '../../assets/images/banner1.jpeg';
import banner2 from '../../assets/images/banner2.jpeg';
import banner3 from '../../assets/images/banner3.jpeg';
import banner4 from '../../assets/images/banner4.jpeg';
import banner5 from '../../assets/images/banner5.jpeg';
import banner6 from '../../assets/images/banner6.jpeg';

export default function SectionBanner() {
  const tiemout = 800;
  const images = [banner1, banner2, banner3, banner4, banner5, banner6];
  const [imageItem, setImageItem] = useState([]);
  
  const infiniteHide = () => {
    // check
    let items = document.getElementsByClassName('image-item');
    if (imageItem.length == 0) {
      const arrItems = [].slice.call(items);
      setImageItem(arrItems);
      return;
    }
    for (let i = 0; i < items.length; i++) {
      let nextShowItem = i+1;

      if (items[i].classList == undefined) continue;
      if (items[i].classList.contains('opacity-100')) {
        if (nextShowItem == images.length) nextShowItem = 0;
        items[i].classList.remove('opacity-100');
        items[i].classList.add('opacity-0');
        items[nextShowItem].classList.remove('opacity-0');
        items[nextShowItem].classList.add('opacity-100');

        setTimeout(() => {
          infiniteHide();
        }, tiemout);
        break;
      }
    }
  }

  useEffect(() => {
    infiniteHide();
  }, [imageItem])

  return (
    <div className="sectionBanner overflow-hidden">
      <div className='relative h-screen w-screen listImage'>
        {
          images.map((image, index) => 
            <img 
              key={"banner-"+index} 
              src={image} 
              className={`absolute w-full h-full image-item image-item-${index+1} ${(index == 0)?"opacity-100":"opacity-0"}`} 
            />
          )
        }
        <div className='cover relative w-screen h-screen z-10 bg-black opacity-80'></div>
      </div>
      <div className='text text-white absolute bottom-10 z-20 w-2/4 bg-black p-4'>
        <p className='text-2xl'>Are you looking for an experienced web consultant to provide strategic solutions and optimize your business?"</p>
        <button className='bg-gray-200 text-black p-2 mt-3 rounded-md'>Start Your Project</button>
      </div>
    </div>
  )
}
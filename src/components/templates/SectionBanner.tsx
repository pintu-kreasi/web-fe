import banner1 from '../../assets/images/banner1.jpeg';
import banner2 from '../../assets/images/banner2.jpeg';
import banner3 from '../../assets/images/banner3.jpeg';
import banner4 from '../../assets/images/banner4.jpeg';
import banner5 from '../../assets/images/banner5.jpeg';
import banner6 from '../../assets/images/banner6.jpeg';

export default function SectionBanner() {
  const images = [banner1, banner2, banner3, banner4, banner5, banner6]
  return (
    <div className="sectionBanner">
      <div className='listImages'>
        {
          images.map((image) => 
            <img src={image} />
          )
        }
      </div>
      <div className='text'>
        <p>Are you looking for an experienced web consultant to provide strategic solutions and optimize your business?"</p>
        <button>Start Your Project</button>
      </div>
    </div>
  )
}
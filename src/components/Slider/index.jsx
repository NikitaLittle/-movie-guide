import { Swiper } from 'swiper/react';
import { Pagination, Grid, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import './index.css';

function Slider({ children, rowsCount }) {
  return (
    <Swiper
      modules={[Pagination, Grid, Keyboard]}
      pagination={{
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      }}
      simulateTouch={true}
      wrapperTag='ul'
      spaceBetween={32}
      slidesPerGroup={4}
      slidesPerView={4}
      grid={{ fill: 'row', rows: rowsCount }}
      height={'10px'}
      keyboard={{ enabled: true, onlyInViewport: false }}>
      {children}
    </Swiper>
  );
}

export default Slider;

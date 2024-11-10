import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Grid, EffectFade, EffectCoverflow, EffectCube, EffectFlip, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/grid';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-flip';
import 'swiper/css/keyboard';

export function swiper(el, options = {}) {
    return new Swiper(el, options);
}

import { AnimacionCard, DisenoCard, RedesCard } from '@/ui/servicios-cards';
import Carousel from 'react-bootstrap/Carousel';

function CarouselServicios() {
return (
    <Carousel style={{ height: "240px"}}>
        <Carousel.Item>
            <DisenoCard/>
        </Carousel.Item>

        <Carousel.Item>
            <AnimacionCard/>
            {/* <Carousel.Caption></Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
            <RedesCard/>
            {/* <Carousel.Caption></Carousel.Caption> */}
        </Carousel.Item>
    </Carousel>
);
}

export default CarouselServicios;
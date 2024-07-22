import { AnimacionCard, DisenoCard, RedesCard } from '@/ui/servicios-cards';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const ResponsiveWrapCel = styled.div`
@media (min-width: 420px) {
display:none
}
`
const ResponsiveWrapTablet = styled.div`
display:none;
@media (min-width: 420px) {
display:initial;
display: flex;
padding-top: 20px;
}
`
const CarouselConteiner = styled.div`
@media (min-width: 850px) {
display: none;
}
`
function CarouselServicios() {
return (
<CarouselConteiner>
    <ResponsiveWrapCel>
        <Carousel style={{ height: "240px"}}>
            <Carousel.Item>
                <DisenoCard/>
            </Carousel.Item>

            <Carousel.Item>
                <AnimacionCard/>
            </Carousel.Item>

            <Carousel.Item>
                <RedesCard/>
            </Carousel.Item>
        </Carousel>
    </ResponsiveWrapCel>
    <ResponsiveWrapTablet>
        <DisenoCard/>
        <AnimacionCard/>
        <RedesCard/>
    </ResponsiveWrapTablet>
</CarouselConteiner>
);
}

export default CarouselServicios;
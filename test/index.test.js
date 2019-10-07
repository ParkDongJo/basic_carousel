
// import our library
import Carousel from './../lib/lib.module';

test('carousel test sample', () => {
    Carousel.init({url:'test', selector:'div'});
    Carousel.html();
});
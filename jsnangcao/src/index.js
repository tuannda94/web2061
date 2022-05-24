import Navigo from '../node_modules/navigo';
// import Navigo from 'navigo';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import 'bootstrap/dist/css/bootstrap.min.css';

// Khởi tạo đối tượng router
const router = new Navigo('/', {linksSelector: 'a'});

function render (content) {
    document.querySelector('#header').innerHTML = Header.render();
    document.querySelector('#content').innerHTML = content;
    document.querySelector('#footer').innerHTML = Footer.render();
}

router.on({
    '/': () => render(Home.render()),
    '/about': () => render(About.render()),
    '/news': () => render(News.render()),
});
router.resolve();

// render();

// --------------------------------


// arrow function: const ten_ham = () => {};
const arrowRender = () => {
    document.querySelector('#header').innerHTML = '<div>Header</div>';
    document.querySelector('#content').innerHTML = '<div>Content</div>';
    document.querySelector('#footer').innerHTML = '<div>Footer</div>';
};

function sum(a, b) {
    return a+b;
}; // cú pháp thông thường
const sum1 = (a, b) => {
    return a+b;
}; // arrow function có return
const sum2 = (a, b) => a+b; // nếu chỉ có return

const display = a => console.log(a); // nếu chỉ có 1 tham số

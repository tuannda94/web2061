import Header from './components/Header';
import Footer from './components/Footer';
// import bootstrap;
import 'bootstrap/dist/css/bootstrap.min.css';

function render () {
    document.querySelector('#header').innerHTML = '<button class="btn btn-primary">Test</button>';

    // document.querySelector('#header').innerHTML = Header.render();
    document.querySelector('#content').innerHTML = '<div>Content</div>';
    document.querySelector('#footer').innerHTML = Footer.render();
}

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

render();

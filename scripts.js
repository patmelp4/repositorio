const root = document.querySelector(':root');

const bgSwitch = () => {
    root.style.setProperty( '--body-bg', 'rgb(255, 170, 170)' );
}

const h1Switch = () => {
    root.style.setProperty( '--h1-color', '#999999' );
}
function loadLandingPage() {
  const root = document.querySelector('#content');
  const fragment = document.createDocumentFragment();
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const li1Text = document.createTextNode('Sushitown');
  const span1 = document.createElement('span');
  span1.className = 'material-symbols-outlined logo';
  span1.textContent = 'set_meal';
  const li2 = document.createElement('li');
  li2.textContent = 'Menu';
  const li3 = document.createElement('li');
  li3.textContent = 'Contact';

  fragment.appendChild(nav);
  nav.appendChild(ul);
  ul.appendChild(li1);
  li1.prepend(span1);
  li1.appendChild(li1Text);
  ul.appendChild(li2);
  ul.appendChild(li3);

  root.appendChild(fragment);

  const main = document.createElement('main');
  main.classList.add('hero-ctn');

  const div1 = document.createElement('div');
  div1.classList.add('hero-ctn-txt');
  main.appendChild(div1);

  const h1 = document.createElement('h1');
  h1.textContent = 'Welcome to ';
  div1.appendChild(h1);

  const span2 = document.createElement('span');
  span2.classList.add('red-text');
  span2.textContent = 'SushiTown';
  h1.appendChild(span2);

  const para1 = document.createElement('p');
  para1.textContent = 'We know fish. We know fresh';
  div1.appendChild(para1);

  const para2 = document.createElement('p');
  para2.textContent = 'Check out our menu!';
  div1.appendChild(para2);

  const div2 = document.createElement('div');
  div2.classList.add('hero-ctn-img');
  main.appendChild(div2);

  const heroImg = document.createElement('img');
  heroImg.src = '/img/sushi-hero.jpg';
  heroImg.alt = 'Delicious sushi'
  div2.appendChild(heroImg);

  const div3 = document.createElement('div');
  div3.classList.add('landing-triple-bg');

  const div4 = document.createElement('div');
  div4.classList.add('landing-triple-grid');
  div3.appendChild(div4);

  const img1 = document.createElement('img');
  img1.src = '/img/fishing.jpg';
  img1.alt = 'Fishing on a boat';
  div4.appendChild(img1);

  const img2 = document.createElement('img');
  img2.src = '/img/ice-mountains.jpg';
  img2.alt = 'Ice mountains';
  div4.appendChild(img2);

  const img3 = document.createElement('img');
  img3.src = '/img/sushi-prep.jpg';
  img3.alt = 'Sushi prep';
  div4.appendChild(img3);

  const tPara1 = document.createElement('p');
  tPara1.textContent = 'Caught daily';
  div4.appendChild(tPara1);

  const tPara2 = document.createElement('p');
  tPara2.textContent = 'Never frozen';
  div4.appendChild(tPara2);

  const tPara3 = document.createElement('p');
  tPara3.textContent = 'Served fresh';
  div4.appendChild(tPara3);

  root.appendChild(main);
  root.appendChild(div3);

}

loadLandingPage();

{
  /* 
      </main>
      <div class="landing-triple-bg">
        <div class="landing-triple-grid">
          <img src="/img/fishing.jpg" alt="Fishing on a boat">
          <img src="/img/ice-mountains.jpg" alt="Ice mountains">
          <img src="/img/sushi-prep.jpg" alt="Sushi prep">
          <p>Caught daily</p>
          <p>Never frozen</p>
          <p>Served fresh</p>
        </div>
      </div> */
}

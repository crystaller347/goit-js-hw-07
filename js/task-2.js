const htmlString = `<li class="list-item">
    <img
      src="https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260"
      alt="White and Black Long Fur Cat"
    />
  </li>
  <li class="list-item">
    <img
      src="https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260"
      alt="Orange and White Koi Fish Near Yellow Koi Fish"
    />
  </li>
  <li class="list-item">
    <img
      src="https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260"
      alt="Group of Horses Running"
    />
  </li>`;
const galleryList = document.querySelector("ul.gallery");
galleryList.innerHTML = htmlString;
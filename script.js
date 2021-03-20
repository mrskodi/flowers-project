const flowers = [
  {
    id: 101,
    title: 'Colorful Bouquet',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, reprehenderit ullam. Possimus provident architecto quisquam deleniti repellendus recusandae praesentium dignissimos.',
    price: 19.99,
    category: 'mixed',
    img: 'images/MixedAssortment1.jpg'
  },
  {
    id: 102,
    title: 'Mixed assortment',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, reprehenderit ullam. Possimus provident architecto quisquam deleniti repelle!',
    price: 29.99,
    category: 'mixed',
    img: 'images/MixedAssortment2.jpg'
  },
  {
    id: 103,
    title: 'Beauty at its peak!',
    desc: 'Amet consectetur adipisicing elit. Accusamus, reprehenderit ullam. Possimus provident architecto quisquam deleniti repellendus recusandae praesentium dignissimos.',
    price: 25.49,
    category: 'mixed',
    img: 'images/MixedAssortment3.jpg'
  },
  {
    id: 104,
    title: 'Treat to the eyes!',
    desc: 'Sit amet consectetur adipisicing elit. Accusamus, reprehenderit ullam. Possimus provident architecto quisquam deleniti repellendus recusandae praesentium dignissimos.',
    price: 39.99,
    category: 'mixed',
    img: 'images/MixedAssortment4.jpg'
  },
  {
    id: 105,
    title: 'Wonderful assortment',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, reprehenderit ullam. Possimus provident architecto quisquam deleniti repellendus recusandae praesentium dignissimos.',
    price: 25.99,
    category: 'mixed',
    img: 'images/MixedAssortment5.jpg'
  },
  {
    id: 106,
    title: 'Gorgeous!',
    desc: 'Lorem ipsum elit. Accusamus, reprehenderit ullam. Possimus provident architecto quisquam deleniti repellendus recusandae praesentium dignissimos.',
    price: 39.99,
    category: 'mixed',
    img: 'images/MixedAssortment6.jpg'
  },
  {
    id: 107,
    title: 'Reds and Oranges',
    desc: 'Lorem ipsum dolorsimus provident architecto quisquam deleniti repellendus recusandae praesentium dignissimos.',
    price: 19.99,
    category: 'redOrange',
    img: 'images/RedOrange1.jpg'
  },
  {
    id: 108,
    title: 'Lovely Reds!',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, reprehenderit ullam. Andae praesentium dignissimos.',
    price: 39.99,
    category: 'redOrange',
    img: 'images/RedOrange2.jpg'
  },
  {
    id: 109,
    title: 'RedOrange',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, reprehenderit ullam. Possimus provident architecto quisquam deleniti repellendus recusandae praesentium dignissimos.',
    price: 19.99,
    category: 'redOrange',
    img: 'images/RedOrange3.jpg'
  },
  {
    id: 110,
    title: 'Lovely Reds!',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, reprehenderit ullam. Possimus provident architecto quisquam deleniti repellendus recusandae praesentium dignissimos.',
    price: 19.99,
    category: 'redOrange',
    img: 'images/RedOrange4.jpg'
  },
  {
    id: 111,
    title: 'Mixed assortment',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, reprehenderit ullam. Possimus provident architecto quisquam deleniti repellendus recusandae praesentium dignissimos.',
    price: 19.99,
    category: 'tulips',
    img: 'images/Tulips1.jpg'
  },
  {
    id: 112,
    title: 'tulips',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, reprehenderit ullam. Possimus provident architecto quisquam deleniti repellendus recusandae praesentium dignissimos.',
    price: 19.99,
    category: 'tulips',
    img: 'images/Tulips2.jpg'
  },
  {
    id: 113,
    title: 'Tulips',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, reprehenderit cusandae praesentium dignissimos.',
    price: 19.99,
    category: 'tulips',
    img: 'images/Tulips3.jpg'
  },
  {
    id: 114,
    title: 'Tulips Galore!',
    desc: 'Lorem ipsum dolullam. Possimus provident architecto quisquam deleniti repellendus recusandae praesentium dignissimos.',
    price: 19.99,
    category: 'tulips',
    img: 'images/Tulips4.jpg'
  },
  {
    id: 115,
    title: 'White',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, reprehenderit ullam. Possimus provident architecto quisquam deleniti repelle!',
    price: 29.99,
    category: 'white',
    img: 'images/White1.jpg'
  },
  {
    id: 116,
    title: 'White beauty!',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, reprehenderit ullam. Possimus provident architecto quisquam deleniti repelle!',
    price: 29.99,
    category: 'white',
    img: 'images/White2.jpg'
  },
];

const itemsContainer = document.querySelector('.items-container');

const filterDiv = document.querySelector('.filter');
const categories = flowers.reduce(function(list, currItem) {
  if(!list.includes(currItem.category)) {
    list.push(currItem.category);
  }
  return list;
}, ['showAll']);

// Document onLoad populate data
window.addEventListener('DOMContentLoaded', () => {
  displayFlowers(flowers);

  // load the buttons dynamically
  let categoryButtons = categories.map((category) => {
    return `<button class="btn btn-all" data-type="${category}">
              ${category}
            </button>`
  }).join('');
  filterDiv.innerHTML = categoryButtons;
  const btns = filterDiv.querySelectorAll('.btn');
  console.log(btns);

  btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const btnType = (e.currentTarget.dataset.type);
    if(btnType === 'showAll') {
      displayFlowers(flowers);
    } else {
      // You know the btn ShowAll was not clicked.
      // We know what that some other button is
      // Do a filter here
      const filteredFlowers = flowers.filter(flower => {
        return flower.category === btnType;
      });
        displayFlowers(filteredFlowers);
      }
    })
  })
});




// Looping the buttons and adding event listener

function displayFlowers(flowerList) {
  
  let dressedHtmlFlower = flowerList.map((flower) => {
    return `<article class="flower">
              <div class="flower-img">
                <img src=${flower.img} alt=${flower.title}>
              </div>
              <div class="flower-details">
                <h4 class="flower-title">${flower.title}</h4>
                <p class="flower-price">$ ${flower.price}</p>
                <p class="flower-desc">${flower.desc}</p>
              </div>
            </article>`
  }).join('');
  itemsContainer.innerHTML = dressedHtmlFlower;
}
const blog={
  {
    id: 0,
    image: 'images/discover/elon-taiwan.jpeg',
    title: 'Was Taiwan For sale? Check this out!',
    subtitle: 'Discover',
  },
  {
    id: 1,
    image: 'images/discover/images/discover/Discover Blog (2)/th.jpeg',
    title: 'Royal Family faces a major blow as they lose right to famous Scotland property',
    subtitle: 'Discover',
  },
  {
    id: 2,
    image: '',
    title: '',
    subtitle: '',
  },
  {
    id: 3,
    image: '',
    title: '',
    subtitle: '',
  },
  {
    id: 4,
    image: '',
    title: '',
    subtitle: '',
  },
  {
    id: 5,
    image: '',
    title: '',
    subtitle: '',
  },
  {
    id: 6,
    image: '',
    title: '',
    subtitle: '',
  },
  {
    id: 7,
    image: '',
    title: '',
    subtitle: '',
  },
  {
    id: 8,
    image: '',
    title: '',
    subtitle: '',
  },
  {
    id: 9,
    image: '',
    title: '',
    subtitle: '',
    bloglink: '',
  },
  {
    id: 10,
    image: '',
    title: '',
    subtitle: '',
    bloglink: '',
  },
}
const categories = [...new Set(blog.map((item)=> {return item}))]
document.getElementById('searchBlog').addEventListener('keyup', (e)=>{
  const searchData = e.target.value.toLowerCase();
  const filterData = categories.filter((item)=> {
    return(
      item.title.toLowerCase().includes(searchData)
    )
  })
  displayItem(filterData)
});

const displayItem = (items)=> {
  document.getElementById('root').innerHTML=items.map((item)=>{
    var {image, title, subtitle} = item;
    return(
      `<article>
        <section class="about">
          <figure class="about-banner">
            <img src=${image} class="w-100">
          </figure>
          <div class="about-content section-content>
            <p class="section-subtitle">${subtitle}</p>
            <h2 class="h3 section-title">${title}</h2>
            <div class="btn-group">
              <a href="${bloglink}"><button class="btn btn-primary">Read More</button></a>
            </div>
          </div>
        </section>
      </article>`
    )
  }).join('')
};
displayItem(categories);
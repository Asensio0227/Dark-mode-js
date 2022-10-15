console.log(articles);
console.log(moment);

const toggleBtn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles');

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
})

const displayArticles = articles.map(({ id, date, length, snippet, title }) => {
  const formatDate = moment(date).format('MMMM Do YYYY')
  return `<article class="post" data-id="${id}">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${formatDate}</span>
            <span>${length} min read</span>
          </div>
          <p>${snippet}</p>
        </article>`
}).join('');


articlesContainer.innerHTML = displayArticles;

import './CategoryGrid.css';
import { Link } from 'react-router-dom';

const CategoryGrid = () => {
  const categories = [
    { title: 'Rackets', sub: 'BADMINTON', img: '/racket.png' },
    { title: 'Bags', sub: 'BADMINTON', img: '/bags.png' },
    { title: 'Shoes', sub: 'BADMINTON', img: '/shoes.png' },
    { title: 'Apparel', sub: 'BADMINTON', img: '/racket.png' },
    { title: 'Shuttlecocks', sub: 'BADMINTON', img: '/bags.png' },
    { title: 'Accessories', sub: 'BADMINTON', img: '/shoes.png' }
  ];

  return (
    <section className="category-section-v2">
      <h2 className="section-title-v2">Top Categories</h2>
      <div className="category-grid-v2">
        {categories.map((cat, index) => (
          <Link to={`/shop`} key={index} className="category-card-v2">
            <div className="category-image-v2">
              <img src={cat.img} alt={cat.title} />
            </div>
            <div className="category-info-v2">
              <span>{cat.sub}</span>
              <h3>{cat.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;

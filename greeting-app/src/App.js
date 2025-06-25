import './App.css';
import ShoppingList from './ShoppingList';
import OrderStatus from './OrderStatus';

const myItems = [
  { name: 'Bread', image: '/images/bread.jpg' },
  { name: 'Apple', image: '/images/apple.jpg' },
  { name: 'Carrots', image: '/images/carrots.jpg' }
];

const orders = [
  {
    orderId: '101',
    status: 'Processing',
    image: '/images/gear.jpg'
  },
  {
    orderId: '102',
    status: 'In Transit',
    image: '/images/van.jpg'
  },
  {
    orderId: '103',
    status: 'Delivered',
    image: '/images/packages.jpg'
  }
];

function App() {
  return (
    <div className="App">
      <h2 style={{ textAlign: 'center' }}>Hello, Liga!</h2>

      <div className="shopping-wrapper">
        <ShoppingList items={myItems} />
      </div>

      <div className="order-wrapper">
        {orders.map((order, index) => (
          <OrderStatus
            key={index}
            orderId={order.orderId}
            status={order.status}
            image={order.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;







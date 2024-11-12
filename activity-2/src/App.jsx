import './App.css'
import Input from './Component/Input'
import Card from './Component/Card';
import Alert from './Component/Alert';
import Rating from './Component/Ratings';

const App = () => {



  return (
    <>
      <div className="containerOne">
        <Input type="text" label="First Name" placeholder="Enter your first name" />
        <Input type="text" label="Last Name" placeholder="Enter your last name" />
        <Input type="email" label="Email" placeholder="Enter your email address" />
        <Input type="password" label="Password" placeholder="Enter your secure password" />
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className="container">
        <div className='container-card'>
          <Card
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSajKS_ggTNNYI7CR9E1k97BnKM84A3BHxyDQ&s.jpg"
            title="Basic Tee"
            price="35"
            alt="Basic Tee"
          />
          <Rating value={4} maximumValue={5} />
        </div>
        <div className='container-card'>
          <Card
            imageUrl="https://5.imimg.com/data5/YB/QU/MY-24671135/blank-t-shirt-250x250.jpg"
            title="Basic White Tee"
            price="35"
            alt="Basic White Tee"
          />
          <Rating value={2} maximumValue={5} />
        </div>

        <div className='container-card'>
          <Card
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR3DsG5qrXMBwGXzssThS7PrSt4fhRnvhMCw&s.jpg"
            title="Basic Charcoal Tee"
            price="35"
            alt="Basic Charcoal Tee"
          />
          <Rating value={3} maximumValue={5} />
        </div>

        <div className='container-card'>
          <Card
            imageUrl="https://media.istockphoto.com/id/920620304/photo/white-t-shirt-in-dark-green-polka-dots-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=tw-YCkJvat7o3OOsLGwFq3Bb4uyIFCPiqNC_-9lmmXA="
            title="Artwork Dots Tee"
            price="45"
            alt="Artwork Dots Tee"
          />
          <Rating value={0} maximumValue={5} />
        </div>
      </div>

      <br />
      <br />
      <div className="container-alert">
        <Alert title="Successfully uploaded" type="success" />
        <Alert title="Attention needed" type="warning" message="Kabahan kana!" />
        <Alert title="Error encountered" type="error" message="Ikaw yung mali!" />
      </div>


    </>
  )
}

export default App

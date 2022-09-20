import '../App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import Header from './streams/Header'
// const Pageone = () => {
//   return (
//     <>
//       <div>Page One</div>
//       <Link to="/Pagetwo" >Navigate to Page Two</Link>
//     </>
//   );
// }
// const Pagetwo = () => {
//   return (<><div>Page Two</div><button>Click me</button>
//     <Link to="/" >Navigate to Page One</Link>
//   </>
//   );
// }

function App() {
  return (
    <div className="ui container">

      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;

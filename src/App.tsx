import { BrowserRouter as Router } from 'react-router-dom';
import { Btn, Link } from '@/cmps/Els';
import { FieldSelect } from './cmps/Form';

const opts = [
  {
    val: 'opt1',
    str: 'Option Number one',
  },
  {
    val: 'opt2',
    str: 'Option Number Two',
  },
];

function App() {
  return (
    <div className="min-h-screen justify-center items-center">
      <div className="flex flex-column justify-center gap-3 m-10">
        <h1 className="text-3xl font-bold text-green-600">Btn</h1>
        <div>
          <Btn variant="primary" size="sm">
            primary sm
          </Btn>
        </div>
        <div>
          <Btn variant="primary" size="md">
            primary md
          </Btn>
        </div>
        <div>
          <Btn variant="primary" size="lg">
            primary lg
          </Btn>
        </div>
        <div>
          <Btn variant="secondary" size="sm">
            secondary sm
          </Btn>
        </div>
        <div>
          <Btn variant="secondary" size="md">
            secondary md
          </Btn>
        </div>
        <div>
          <Btn variant="secondary" size="lg">
            secondary lg
          </Btn>
        </div>
      </div>
      <div className="flex flex-column justify-center gap-3 m-10">
        <h1 className="text-3xl font-bold text-green-600">Links</h1>
        <Router>
          <Link to="https://tertle.io">Some link</Link>
        </Router>
      </div>
      <div className="flex justify-items-center">
        <FieldSelect label="Some label" opts={opts}></FieldSelect>
      </div>
    </div>
  );
}

export default App;

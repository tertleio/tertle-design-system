import { BrowserRouter as Router } from 'react-router-dom';
import { Btn, Link } from '@/cmps/Els';
import { Dropdown, List } from './cmps/Form';

const opts = [
  {
    label: 'Option Number one',
    value: 'opt1',
  },
  {
    label: 'Option Number Two',
    value: 'opt2',
  },
];

function App() {
  return (
    <div className="min-h-screen justify-center items-center">
      <div className="flex flex-column justify-center gap-3 m-1">
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
        <Dropdown name="selectKey" label="Some label" opts={opts} />
      </div>
      <div className="flex justify-items-center">
        <label className="text-green-500">Some section label</label>
        <List type="radio" name="inputKey" value="1" label="Radio-1-label" />
        <List type="radio" name="inputKey" value="2" label="Radio-2-label" />
      </div>
    </div>
  );
}

export default App;

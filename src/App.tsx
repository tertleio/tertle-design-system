import { Btn } from './cmps/Els/Btn';

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
    </div>
  );
}

export default App;

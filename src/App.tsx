import { Btn } from './cmps/Els/Btn';

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="text-3xl font-bold text-green-600">Test View</h1>
      <Btn className="custom-test-class">Big ol' button!</Btn>
    </div>
  );
}

export default App;

import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Btn, Link } from '@/cmps/Els';
import { Form, Dropdown, List, Text, Textarea } from '@/cmps/Form';
import { Container } from '@/cmps/Container';

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
  const [text, setText] = useState('');
  const [textarea, setTextarea] = useState('');

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log('handling submit');

    return false;
  }

  return (
    <>
      <div className="m-1 flex justify-center gap-3">
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
      <div className="flex-column m-10 flex justify-center gap-3">
        <h1 className="text-3xl font-bold text-green-600">Links</h1>
        <Router>
          <Link to="https://tertle.io">Some link</Link>
        </Router>
      </div>

      <div className="mx-auto max-w-xl">
        <Container>
          <Form id="formId" onSubmit={handleSubmit}>
            <div className="flex justify-items-center">
              <Dropdown name="selectKey" opts={opts} />
            </div>
            <div className="flex-initial justify-items-center">
              <List
                type="radio"
                name="inputKey"
                value="1"
                label="Radio-1-label"
              />
              <List
                type="radio"
                name="inputKey"
                value="2"
                label="Radio-2-label"
              />
              <List
                className="p-10"
                type="radio"
                name="inputKey"
                value="3"
                label="Radio-3-label thats long long long long long long long long long long long long long and even more long long smoke a bong"
              />
            </div>
            <div className="flex">
              <Text name="textFieldKey" value={text} cb={setText} />
              <Textarea
                name="textareaFieldKey"
                value={textarea}
                rows={10}
                cols={30}
                cb={setTextarea}
              />
            </div>
            <Btn type="submit">Submit</Btn>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default App;

import { useState, useEffect } from 'react';
import fetchSim from '@/utils/fetchSim';

// Components
import { BrowserRouter as Router } from 'react-router-dom';
import { Button, Link } from '@/cmps/Els';
import { Form, Fieldset, Dropdown, Choice, Text, Textarea } from '@/cmps/Form';
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
  const [darkTheme, setDarkTheme] = useState<boolean | null>(null);
  const [dummyData, setDummyData] = useState<Object>({});

  useEffect(() => {
    // initial render state
    if (darkTheme === null) {
      const localTheme = localStorage.getItem('theme');
      if (localTheme) {
        setDarkTheme(localTheme === 'dark' ? true : false);
      } else {
        const prefersDark = '(prefers-color-scheme: dark)';
        const isSysDark = window.matchMedia(prefersDark).matches;
        setDarkTheme(isSysDark);
      }
    }

    // user override - subsequent renders
    if (darkTheme === true) {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
      return;
    }

    if (darkTheme === false) {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    }
  }, [darkTheme]);

  useEffect(() => {
    fetchSim().then((data) => setDummyData(data));
  }, []);

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log('handling submit');

    return false;
  }

  return (
    <>
      <Fieldset legend="Toggle darkTheme mode">
        <Choice
          name="darkTheme"
          type="checkbox"
          checked={darkTheme ? true : false}
          onChange={() => setDarkTheme((isDark) => !isDark)}
          label="Dark mode on"
        />
      </Fieldset>
      <h1 className="flex justify-center text-3xl font-bold text-green-600">
        Btns
      </h1>
      <div className="w-100 m-auto flex max-w-5xl flex-wrap gap-2">
        <Button variant="primary" size="sm">
          primary sm
        </Button>
        <Button variant="primary" size="md">
          primary md
        </Button>
        <Button variant="primary" size="lg">
          primary lg
        </Button>
        <Button variant="secondary" size="sm">
          secondary sm
        </Button>
        <Button variant="secondary" size="md">
          secondary md
        </Button>
        <Button variant="secondary" size="lg">
          secondary lg
        </Button>
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
            <Fieldset
              legend="Some dropdown question"
              className="flex justify-items-center"
            >
              <Dropdown name="selectKey" opts={opts} />
            </Fieldset>

            <Fieldset
              legend="Some radio question?"
              className="flex-initial justify-items-center"
            >
              <Choice
                name="inputKey"
                type="radio"
                value="1"
                label="Radio-1-label"
              />
              <Choice
                name="inputKey"
                type="radio"
                value="2"
                label="Radio-2-label"
              />
              <Choice
                className="p-10"
                name="inputKey"
                type="radio"
                value="3"
                label="Radio-3-label thats long long long long long long long long long long long long long and even more long long smoke a bong"
              />
            </Fieldset>

            <Fieldset legend="Checkbox questions">
              <Choice
                name="inputKey"
                type="checkbox"
                value="c1"
                label="Checkbox 1"
              />
              <Choice
                name="inputKey"
                type="checkbox"
                value="c2"
                label="Checkbox 2"
              />
              <Choice
                name="inputKey"
                type="checkbox"
                value="c3"
                label="Checkbox 3"
              />
            </Fieldset>

            <Fieldset legend="Some text and text question?" className="flex">
              <Text name="textFieldKey" value={text} cb={setText} />
              <Textarea
                name="textareaFieldKey"
                value={textarea}
                rows={10}
                cols={30}
                cb={setTextarea}
              />
            </Fieldset>

            <Button type="submit">Submit</Button>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default App;

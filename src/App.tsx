import { useState, useEffect } from 'react';
import fetchSim from '@/utils/fetchSim';

// Components
import { Container } from '@/cmps/Container';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button, Link } from '@/cmps/Els';
import { Form, Fieldset, Dropdown, Choice, Text, Textarea } from '@/cmps/Form';
import { Profile } from '@/features/profile';

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
  const [dummyData, setDummyData] = useState<any>({});

  function handleChange(e: any) {
    const { name, value } = e.target;
    setDummyData({ ...dummyData, [name]: value });
  }

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
      <Fieldset legend="Toggle darkTheme mode">
        <Choice
          name="darkTheme"
          type="checkbox"
          checked={darkTheme ? true : false}
          onChange={() => setDarkTheme((isDark) => !isDark)}
          label="Dark mode on"
        />
      </Fieldset>
      <Profile />

      <h1 className="text-green-600 flex justify-center text-3xl font-bold">
        Btns
      </h1>
      <div className="flex-column m-10 flex justify-center gap-3">
        <h1 className="text-green-600 text-3xl font-bold">Links</h1>
        <Router>
          <Link to="https://tertle.io">Some link</Link>
        </Router>
      </div>

      <div className="mx-auto max-w-xl">
        <Container className="p-7">
          <Form id="formId" onSubmit={handleSubmit}>
            <Fieldset
              legend="Some dropdown question"
              className="flex justify-items-center"
            >
              <Dropdown name="selectKey" opts={opts} />
            </Fieldset>

            <Fieldset
              legend="Would you consider yourself technical?"
              className="flex-initial justify-items-center"
            >
              <Choice
                name="isTechnical"
                id="yes-technical"
                value={1}
                type="radio"
                label="Yes, I can build the product"
                checked={dummyData?.isTechnical == 1 ? true : false}
                onChange={handleChange}
              />
              <Choice
                name="isTechnical"
                id="no-technical"
                value={2}
                type="radio"
                label="No, I need help"
                checked={dummyData?.isTechnical == 2 ? true : false}
                onChange={handleChange}
              />
              <Choice
                name="isTechnical"
                id="some-answer"
                value={3}
                type="radio"
                label="Some answer that is super long long long long long long long long long long long long long and even more long long smoke a bong"
                checked={dummyData?.isTechnical == 3 ? true : false}
                onChange={handleChange}
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

            <Fieldset legend="Idea URL">
              <Text
                name="ideaUrl"
                value={dummyData?.ideaUrl || ''}
                onChange={handleChange}
              />
            </Fieldset>
            <Fieldset legend="What is your idea about?">
              <Textarea
                name="ideaPitch"
                value={textarea}
                onChange={(e) => setTextarea(e.target.value)}
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

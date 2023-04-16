import { useState, useEffect } from 'react';
import clsx from 'clsx';
import useTheme from '@/hooks/useTheme';
import fetchSim from '@/hooks/useFetch';
import useFetch from '@/hooks/useFetch';

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

const pid = '1';

function App() {
  // const { isLoading, data } = useFetch(pid);
  const [text, setText] = useState('');
  const [textarea, setTextarea] = useState('');
  const [darkTheme, setDarkTheme] = useTheme(null);
  const [dummyData, setDummyData] = useState<any>({});

  // useEffect(() => {
  //   if (data) setDummyData(data);
  // }, [isLoading, data]);
  // if (isLoading) return <h1 className="m-5 flex justify-center">Loading...</h1>;

  function handleChange(e: any) {
    const { name, value } = e.target;
    setDummyData({ ...dummyData, [name]: value });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log('handling submit');

    return false;
  }

  return (
    <>
      <Fieldset className="mx-5">
        <Choice
          name="darkTheme"
          type="checkbox"
          checked={darkTheme ? true : false}
          onChange={() => setDarkTheme((isDark) => !isDark)}
          label="Dark mode on"
        />
      </Fieldset>
      <Profile />

      <div className="flex-column m-10 flex justify-center gap-3">
        <h1 className="text-green-600 text-3xl font-bold">Links</h1>
        <Router>
          <Link to="https://tertle.io">Some link</Link>
        </Router>
      </div>

      <div className="mx-auto max-w-xl">
        <Container className="p-7">
          <Form
            id="formId"
            className={clsx('flex flex-col gap-6')}
            onSubmit={handleSubmit}
          >
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
                checked={true}
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

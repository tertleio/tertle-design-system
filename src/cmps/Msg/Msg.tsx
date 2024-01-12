import { useContext } from 'react';
import { clsx } from '@/utils/classes';
import { z } from 'zod';
import PromptContext from '@/stores/PromptContext';

import { Button } from '@/cmps/Core';
import { Form } from '@/cmps/form/Core/Form';
import { Fieldset, Textarea, Text, Choice } from '@/cmps/form/Fields';

import { UpdateAnswerData } from '@/features/match/api/updateAnswer';

type MsgProps = {
  formId?: string;
  withDefaultMsg: boolean;
  msg: {
    useDefaultMsg: 'true' | 'false';
    defaultMsg: string;
    customMsg: string;
  };
  booking: {
    useBooking: 'true' | 'false';
    bookingLink: string;
  };
  confirmText?: string;
  onConfirm: (values: UpdateAnswerData) => void;
};

const introSchema = z.object({
  msg: z
    .object({
      useDefaultMsg: z.literal('true').or(z.literal('false')),
      defaultMsg: z.string().optional(),
      customMsg: z.string().optional(),
    })
    .refine(
      (data) => {
        // if useDefaultt msg is true, defaultMsg must be defined
        // if its not, custom message must be defined

        if (data.useDefaultMsg === 'true') {
          return z.string().nonempty().safeParse(data.defaultMsg).success;
        } else if (data.useDefaultMsg === 'false') {
          return z.string().nonempty().safeParse(data.customMsg).success;
        }
      },
      {
        message: 'Write a message',
        // path: ['msg'],
      }
    ),
  booking: z
    .object({
      useBooking: z.literal('true').or(z.literal('false')),
      bookingLink: z.string().optional(),
    })
    .refine(
      (data) => {
        if (data.useBooking === 'false') return true;
        else if (data.useBooking === 'true') {
          return z.string().url().safeParse(data.bookingLink).success;
        }
      },
      {
        message: 'Invalid URL',
        path: ['bookingLink'],
      }
    ),
});

const Msg = (props: MsgProps) => {
  const setPrompt = useContext(PromptContext);
  const {
    formId = 'update-intro',
    withDefaultMsg = false,
    msg,
    booking,
    confirmText = 'Confirm',
    onConfirm,
  } = props;

  return (
    <>
      <Form<MsgProps, typeof introSchema>
        id={formId}
        schema={introSchema}
        onSubmit={async (values) => {
          if (onConfirm) {
            const {
              useDefaultMsg = 'false',
              defaultMsg,
              customMsg,
            } = values.msg;
            const { useBooking, bookingLink } = values.booking;

            onConfirm({
              answer: true,
              msg: useDefaultMsg === 'true' ? defaultMsg : customMsg,
              bookingLink: bookingLink || null,
              useBooking: useBooking === 'true' ? true : false,
              useDefaultMsg: useDefaultMsg === 'true' ? true : false,
            });
          }
          setPrompt({
            msg: 'Sent 👍',
            color: 'green',
          });
        }}
        className="flex flex-col gap-3"
        options={{
          defaultValues: {
            msg: {
              useDefaultMsg: msg?.useDefaultMsg,
              defaultMsg: msg?.defaultMsg,
              customMsg: msg?.customMsg,
            },
            booking: {
              useBooking: booking.useBooking,
              bookingLink: booking.bookingLink,
            },
          },
        }}
      >
        {({ formId, methods: m }) => (
          <>
            <div>
              <Fieldset
                legend="Message"
                variant="row"
                error={
                  m.formState.errors.msg?.useDefaultMsg ||
                  m.formState.errors.msg?.root
                }
              >
                {withDefaultMsg && (
                  <>
                    <Choice
                      label="Saved"
                      constantValue="true"
                      type="radio"
                      registration={m.register('msg.useDefaultMsg')}
                      isError={
                        m.formState.errors.msg?.useDefaultMsg !== undefined
                      }
                    />
                    <Choice
                      label="Custom"
                      constantValue="false"
                      type="radio"
                      registration={m.register('msg.useDefaultMsg')}
                      isError={
                        m.formState.errors.msg?.useDefaultMsg !== undefined
                      }
                    />
                  </>
                )}
              </Fieldset>
              <Textarea
                placeholder="Write a message for reuse..."
                registration={m.register('msg.defaultMsg')}
                className={clsx(
                  m.watch('msg.useDefaultMsg') !== 'true' && 'hidden'
                )}
              />
              <Textarea
                placeholder="Write a custom message..."
                registration={m.register('msg.customMsg')}
                className={clsx(
                  m.watch('msg.useDefaultMsg') === 'true' && 'hidden'
                )}
              />
            </div>

            <Fieldset
              legend="Use booking link?"
              error={
                m.formState.errors.booking?.bookingLink ||
                m.formState.errors.booking?.useBooking
              }
            >
              <Choice
                label="Yes"
                constantValue="true"
                type="radio"
                registration={m.register('booking.useBooking')}
                isError={m.formState.errors.booking?.useBooking !== undefined}
              />
              <Choice
                label="No"
                constantValue="false"
                type="radio"
                registration={m.register('booking.useBooking')}
                isError={m.formState.errors.booking?.useBooking !== undefined}
              />
              {m.watch('booking.useBooking') === 'true' && (
                <Text
                  placeholder="e.g https://calendly.com/your-link..."
                  registration={m.register('booking.bookingLink')}
                />
              )}
            </Fieldset>

            <Button
              id={formId}
              type="submit"
              variant="primary"
              size="lg"
              color="green"
            >
              {confirmText}
            </Button>
          </>
        )}
      </Form>
    </>
  );
};

export { Msg };

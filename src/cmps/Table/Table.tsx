import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

type TableCol<Entry> = {
  title: string;
  field: keyof Entry;
  Cell?({ entry }: { entry: Entry }): React.ReactElement;
};

type TableProps<Entry> = {
  data: Entry[];
  cols: TableCol<Entry>[];
  selectedId?: string | number | undefined;
};

const Table = <Entry extends { id: string | number }>({
  data,
  cols,
  selectedId,
}: TableProps<Entry>) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <table className="table-auto text-left text-sm border-separate border-spacing-y-[1px]">
        <thead>
          <tr className="text-gray-500 font-primary text-sm">
            {cols.map((col, i) => (
              <th
                key={col.title + i}
                scope="col"
                className="pb-2 [&:first-child]:pl-3.5 [&:last-child]:pr-3.5"
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((entry, entryIdx) => (
            <tr
              key={entry.id || entryIdx}
              onClick={() => entry.discloseUrl && navigate(entry.discloseUrl)}
              // prettier-ignore
              className={clsx(
                  'cursor-pointer hover:text-black  hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-white',
                  entry?.id == selectedId ? 'bg-gray-200 text-black dark:bg-gray-800 dark:text-white  pointer-events-none' :'odd:bg-gray-100 dark:odd:bg-gray-900',
                )}
            >
              {cols.map(({ Cell, title, field }, colIdx) => (
                <td
                  key={title + colIdx}
                  className={clsx(
                    'py-[0.5em] [&:first-child]:rounded-l-lg [&:last-child]:rounded-r-lg [&:first-child]:pl-3 [&:last-child]:pr-3 whitespace-nowrap border-spacing-1'
                  )}
                >
                  {Cell ? <Cell entry={entry} /> : entry[field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { Table, type TableProps };

import ContactRow from '../components/cards/ContactRow';

/* ---------------------------------------------------------------
   Dummy data for UI only.
   Replace with fetch('/contactRequests') when ready.
-----------------------------------------------------------------*/
const contacts = [
  {
    id: 1,
    name: 'Rahul Sharma',
    email: 'rahul@example.com',
    message: 'Hey Alish, loved your portfolio! Are you available for a freelance dashboard…',
    date: '2025-07-10',
    status: 'new',
  },
  {
    id: 2,
    name: 'Maya Verma',
    email: 'maya.v@example.com',
    message: 'We’re organising a tech meetup in Hisar. Would you like to be a speaker?',
    date: '2025-07-08',
    status: 'read',
  },
  {
    id: 3,
    name: 'John Lee',
    email: 'john.l@example.com',
    message: 'Looking for a React developer for a short-term gig. Please share your rates.',
    date: '2025-07-05',
    status: 'read',
  },
];

export default function Contact() {
  return (
    <section className="space-y-6">
      {/* header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Contact Requests</h2>
        {/* placeholder for future search / filter buttons */}
      </div>

      {/* table */}
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left"></th>
              <th className="px-4 py-3 text-left font-medium text-gray-600 dark:text-gray-300">
                Sender
              </th>
              <th className="px-4 py-3 text-left hidden md:table-cell font-medium text-gray-600 dark:text-gray-300">
                Message
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-600 dark:text-gray-300">
                Date
              </th>
              <th className="px-4 py-3 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <ContactRow key={c.id} {...c} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Customer {
  id: number;
  name: string;
  surname: string;
  email: string;
  gender: string;
  password: string;
  localDate: string;
}

const Page = () => {
  const [users, setUsers] = useState<Customer[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://distinguished-happiness-production.up.railway.app/admin/getUsers/');
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data: Customer[] = await response.json();
        setUsers(data);
        setError(null);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch users.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => router.back()}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded shadow transition duration-200"
        >
          ← Back
        </button>
        <h1 className="text-3xl font-bold text-gray-800 text-center w-full -ml-10">Users List</h1>
      </div>

      {loading && <p className="text-center text-gray-500">Loading...</p>}

      {error && (
        <p className="text-center text-red-500 mb-4">
          Error: {error}
        </p>
      )}

      <div className="bg-white shadow-xl rounded-lg overflow-x-auto">
        {users.length > 0 ? (
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 font-semibold">
              <tr>
                <th className="py-3 px-6">ID</th>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Surname</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">Gender</th>
                <th className="py-3 px-6">Date Joined</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr
                  key={user.id}
                  className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}
                >
                  <td className="py-2 px-6">{user.id}</td>
                  <td className="py-2 px-6">{user.name}</td>
                  <td className="py-2 px-6">{user.surname}</td>
                  <td className="py-2 px-6">{user.email}</td>
                  <td className="py-2 px-6">{user.gender}</td>
                  <td className="py-2 px-6">{user.localDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          !loading && <p className="text-center text-gray-500 p-4">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default Page;

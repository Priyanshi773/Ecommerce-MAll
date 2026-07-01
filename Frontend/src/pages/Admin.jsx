import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    const user = JSON.parse(localStorage.getItem("user"));

    // 🔥 FETCH USERS
    useEffect(() => {
        axios.get("http://localhost:3000/api/admin/users")
            .then((res) => {
                setUsers(res.data.users || res.data || []);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // 🔥 LOGOUT
    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.href = "/LoginPage";
    };

    // 🔥 ACCESS CONTROL
    if (user?.role !== "admin") {
        return (
            <div className="h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold text-red-500">
                    Access Denied 🚫
                </h1>
            </div>
        );
    }

    // 🔥 FILTER USERS
    const filteredUsers = users.filter((u) =>
        (u.email || "").toLowerCase().includes(search.toLowerCase())
    );

    return (

        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">

            <div className="max-w-5xl mx-auto">

                {/* HEADER */}
                <div className="flex justify-between items-center mb-8">

                    <div>
                        <h1 className="text-4xl font-bold text-gray-800">
                            Admin Dashboard
                        </h1>

                        <p className="text-gray-500">
                            Manage your system users
                        </p>
                    </div>

                    <div className="flex gap-3 items-center">

                        <div className="bg-white shadow px-4 py-2 rounded-lg">
                            <p className="text-xs text-gray-500">Logged in as</p>
                            <p className="font-semibold">{user?.email}</p>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                        >
                            Logout
                        </button>

                    </div>

                </div>

                {/* STATS */}
                <div className="mb-6">
                    <p className="text-gray-700 font-medium">
                        Total Users: {users.length}
                    </p>
                </div>

                {/* SEARCH */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search users by email..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full p-3 border rounded-lg shadow-sm"
                    />
                </div>

                {/* USERS LIST */}
                <div className="bg-white rounded-2xl shadow-lg p-6">

                    <h2 className="text-2xl font-semibold mb-6">
                        Users List
                    </h2>

                    <div className="grid gap-4">

                        {
                            filteredUsers.length > 0 ? (
                                filteredUsers.map((userItem) => (

                                    <div
                                        key={userItem._id}
                                        className="flex justify-between items-center p-5 border rounded-xl bg-gray-50 hover:shadow-md transition"
                                    >

                                        <div>
                                            <h3 className="text-lg font-semibold">
                                                {userItem.username || userItem.name}
                                            </h3>

                                            <p className="text-gray-500">
                                                {userItem.email}
                                            </p>
                                        </div>

                                        <span className="px-4 py-1 text-sm rounded-full bg-green-100 text-green-700">
                                            User
                                        </span>

                                    </div>

                                ))
                            ) : (
                                <p className="text-gray-500">
                                    No users found
                                </p>
                            )
                        }

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Admin;
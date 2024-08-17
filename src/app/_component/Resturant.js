"use client";
import React, { useState } from "react";

const Resturant = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await fetch("/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      // Check if the response is not empty
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Attempt to parse JSON only if there's content
      const text = await response.text(); // Read the response as text first
      const result = text ? JSON.parse(text) : {}; // Parse only if not empty

      console.log(result);
      // Add logic here to handle the response or display a success message
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit} // Corrected: Pass the event object to handleSubmit
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Add Restaurant</h2>
        <input
          type="text"
          placeholder="Restaurant Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mb-4 w-full rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-4 w-full rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4 w-full rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700 transition"
        >
          Add Restaurant
        </button>
      </form>
    </div>
  );
};

export default Resturant;

"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";

const SearchBar = ({ type }: { type: "onSubmit" | "onChange" }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [category, setCategory] = useState("");
  const [debouncedCategory, setDebouncedCategory] = useState(""); // New state for debounced value
  const [isSearching, setIsSearching] = useState(false); // Optional state to track search status

  // Sync the category state with the search params when the component mounts
  useEffect(() => {
    const initialCategory = searchParams.get("category") || "";
    setCategory(initialCategory);
  }, [searchParams]);

  // Debounce the category input and update after a delay
  useEffect(() => {
    if (type === "onChange") {
      const delay = 250; // Set the delay time in milliseconds
      const timeoutId = setTimeout(() => {
        setDebouncedCategory(category); // Update the debounced category after the delay
      }, delay);

      // Cleanup timeout on category change or component unmount
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [category, type]); // Only debounce if type is onChange

  // Update the query parameter when the debounced category changes
  useEffect(() => {
    if (debouncedCategory !== "") {
      const params = new URLSearchParams(searchParams.toString());
      if (debouncedCategory) {
        params.set("category", debouncedCategory); // Add or update the category param
      } else {
        params.delete("category"); // Remove the category param if empty
      }
      router.push(`?${params.toString()}`); // Update the URL with the new params
    }
  }, [debouncedCategory, searchParams, router]); // Trigger search after debounce delay

  // Handle change event on the input field
  const handleChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory); // Update the category state immediately
  };

  // Handle form submission (search trigger)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (category.length === 0) return;
    // Update the URL with the current category (even without debounce)
    const params = new URLSearchParams(searchParams.toString());
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    router.push(`/blog?${params.toString()}`); // Update the URL with the new params
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          className="search-bar"
          type="search"
          value={category}
          name="category"
          onChange={handleChange}
          placeholder="Search..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit(e);
            }
          }}
        />
        {type === "onSubmit" && (
          <button type="submit" className="search-button">
            <p>
              <IoMdSearch />
            </p>
          </button>
        )}
      </form>
      {/* Optionally display a loading message or spinner */}
      {isSearching && <div>Searching...</div>}
    </div>
  );
};

export default SearchBar;

import { createContext, useContext, useState } from "react";
//import { filterReducer } from "../reducer/filterReducer";
import { useProducts } from "./productsContext";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const { productsData } = useProducts();

  const [filters, setFilters] = useState({
    checkBox_category: [],
    searchText: "",
    radio_discount: "",
    rating: 5,
    sortBy: null,
    includeOutOfStock: true,
    price_in_range: 5000,
  });

  const handleSearchText = (searchTextValue) => {
    setFilters({ ...filters, searchText: searchTextValue });
  };
  const handlePrice = (sortByValue) => {
    setFilters({ ...filters, sortBy: sortByValue });
  };
  const handleRating = (ratingValue) => {
    setFilters({ ...filters, rating: ratingValue });
  };
  const handleOutOfStock = (e) => {
    setFilters({ ...filters, includeOutOfStock: e.target.checked });
  };
  const handleCategoryFilter = (event) => {
    event.target.checked
      ? setFilters({
          ...filters,
          checkBox_category: [...filters.checkBox_category, event.target.value],
        })
      : setFilters({
          ...filters,
          checkBox_category: filters.checkBox_category.filter(
            (item) => item !== event.target.value
          ),
        });
  };
  const handleDiscount = (discountValue) => {
    setFilters({ ...filters, radio_discount: Number(discountValue) });
  };
  const handleSlider = (event) => {
    setFilters({ ...filters, price_in_range: Number(event.target.value) });
  };
  console.log(filters);
  const clearFilters = () => {
    setFilters({
      checkBox_category: [],
      searchText: "",
      radio_discount: "",
      rating: 5,
      sortBy: null,
      includeOutOfStock: true,
      price_in_range: 5000,
    });
  };

  // Search Filters on product data
  const searchedFilterData =
    filters?.searchText?.length > 0
      ? productsData.filter(({ name }) =>
          name.toLowerCase().includes(filters.searchText.toLocaleLowerCase())
        )
      : productsData;
  //category filter
  const checkBoxCategoryFilterData =
    filters?.checkBox_category?.length > 0
      ? searchedFilterData.filter((product) =>
          filters.checkBox_category.includes(product.category)
        )
      : searchedFilterData;
  // discount filter
  const discountFilterData =
    filters?.radio_discount > 0
      ? checkBoxCategoryFilterData.filter(
          (product) => product.discount > filters.radio_discount
        )
      : checkBoxCategoryFilterData;

  // rating filter
  const ratingFilterData =
    filters?.rating !== 5
      ? discountFilterData.filter((product) => product.rating > filters.rating)
      : discountFilterData;

  //Stock filter
  const stockFilterData = filters.includeOutOfStock
    ? ratingFilterData
    : ratingFilterData.filter((product) => !product.outOfStock);

  // sort filter
  const sortedFilterData =
    filters?.sortBy !== null
      ? stockFilterData.sort((a, b) =>
          filters.sortBy === "low_to_high"
            ? a.price - b.price
            : b.price - a.price
        )
      : stockFilterData;

  // price slider filter
  const finalFilterData =
    filters?.price_in_range > 0
      ? sortedFilterData.filter(
          (product) => product.price <= Number(filters.price_in_range)
        )
      : sortedFilterData;
  console.log(finalFilterData);
  return (
    <>
      <FilterContext.Provider
        value={{
          filters,
          handlePrice,
          handleRating,
          handleOutOfStock,
          handleCategoryFilter,
          handleDiscount,
          handleSearchText,
          clearFilters,
          handleSlider,
          finalFilterData,
        }}>
        {children}
      </FilterContext.Provider>
    </>
  );
};

export const useFilters = () => useContext(FilterContext);

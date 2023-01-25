import React from "react";

const FilterSection = ({ colors, sizes, categories }: any) => {
  return (
    <div className="filter_section_wrapper container">
      <div className="search_container row d-flex my-4">
        <input
          type="email"
          className="col form-control form_select_filter"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
        <button
          type="button"
          className="col-2 btn filter_search_button">
          Search
        </button>
      </div>

      <div className="drop_select_row d-flex row gap-2">
        <div className="col p-0 category_select_drop">
          <select
            className="form-select form_select_filter"
            aria-label="Category Select">
            <option
              className="form_select_filter_option "
              selected>
              ---Category---
            </option>
            {categories &&
              categories.map((category: any, index: any) => (
                <option
                  key={index}
                  value={category.url}>
                  {category.name}
                </option>
              ))}
          </select>
        </div>

        <div className="col p-0 color_select_drop">
          <select
            className="form-select form_select_filter "
            aria-label="Price Select ">
            <option selected> ---Colors---</option>
            {colors &&
              colors.map((color: any, index: any) => (
                <option
                  key={index}
                  value={color.name}>
                  {color.name}
                </option>
              ))}
          </select>
        </div>

        <div className="col p-0 size_select_drop">
          <select
            className="form-select form_select_filter"
            aria-label="Size Select ">
            <option selected> ---Sizes---</option>
            {sizes &&
              sizes.map((size: any, index: any) => (
                <option
                  key={index}
                  value="1">
                  {size.name}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;

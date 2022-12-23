import React from "react";
import Image from "next/image";
import styles from "../styles/modules/SingleProduct.module.css";

const SingleProductSection = ({ singleProduct, singleCategoryUrl }: any) => {
  return (
    <div>
      {singleProduct && (
        <div className="row py-5 text_color_blue">
          <div className="col-12 col-lg-6">
            <div className={`${styles.single_product_image_div} overflow-hidden rounded-2`}>
              <Image
                src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}/${singleProduct.image}`}
                layout="fill"
                objectFit="scale-down"
                alt="img"
              />
            </div>
          </div>

          <div className="col-12 col-lg-6 pt-3 mt-lg-0">
            <h3>Name of Product</h3>
            <div className="d-flex h6 py-2">
              Category : <span className="text_color_yellow"> &nbsp; {singleCategoryUrl}</span>
            </div>
            <div className="d-flex h6"> rating | 7 Reviews</div>

            <p className="py-2 h6">
              SKU : <span className="text_color_yellow">Any</span>{" "}
            </p>
            <p>{singleProduct.description}</p>
            <br />

            <div className="size_buttons d-flex gap-3 d-flex align-content-center pb-3">
              <p className="d-flex align-items-center h5">SIZE :</p>

              {singleProduct &&
                singleProduct.size &&
                singleProduct.size[0].split(",").map((size: any, index: any) => (
                  <div
                    key={index}
                    className="">
                    <input
                      type="radio"
                      className={`${styles.radio_button} btn-check `}
                      name="options-outlined"
                      id={`btn${index}`}
                      autoComplete="off"
                      checked
                    />
                    <label
                      className={`${styles.radio_button_label} btn btn-outline-success`}
                      htmlFor={`btn${index}`}>
                      {size}
                    </label>
                  </div>
                ))}
            </div>
            <p className="mb-3">
              <span className="h6 cursor_pointer">Colors :{singleProduct && singleProduct.color && singleProduct.color[0].split(",").map((color: any, index: any) => <span>&nbsp; &nbsp; {color}</span>)}</span>
            </p>

            <p>
              <span className="h6 cursor_pointer">Material</span> :&nbsp; <span className="cursor_pointer">Metal</span> &nbsp; &nbsp; <span className="cursor_pointer">Resin</span> &nbsp;&nbsp; <span className="cursor_pointer ">Leather</span> &nbsp;&nbsp; <span className="cursor_pointer">Plastic</span> &nbsp;&nbsp; <span className="cursor_pointer">Slag</span> &nbsp; <span>Fiver</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductSection;

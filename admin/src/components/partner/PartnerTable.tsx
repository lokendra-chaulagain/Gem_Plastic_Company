import * as React from "react";
import Link from "next/link";
import { MdDelete } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
import Image from "next/image";

export default function PartnerTable({ deletePartner, partners ,currentCount}: any) {
  return (
    <>
      <div className="customCard mt-2 mb-2">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Partner Name</th>
              <th scope="col">Image</th>
              <th scope="col">Short Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {partners &&
              partners.map((partner: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{currentCount - 5 + index + 1}</th>
                  <td>{partner.title}</td>
                  <td>
                    <a
                      className="d-flex "
                      href={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}${partner.image}`}>
                      ​
                      <div className="banner_table_image_div">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}${partner.image}`}
                          quality={50}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-1"
                          alt="myimage"
                        />
                      </div>
                    </a>
                  </td>
                  <td>{partner.subtitle}</td>
                  <td>
                    <div className="d-flex ">
                      <Link href={`/partner/${partner._id}`}>
                        <div className="d-flex align-items-center">
                          <AiTwotoneEdit className="edit_button_icon" />
                        </div>
                      </Link>

                      <MdDelete
                        className="delete_button_icon"
                        onClick={() => deletePartner(partner._id)}
                        aria-label="delete"
                      />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

import React, { use } from "react";
import Layout from "../../components/Layout";
import { useGetAllFormQuery } from "@/queries/generated";

function Contact() {
  const { data } = useGetAllFormQuery();
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Contact Information
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">number</th>
                <th className="py-2 px-4 border-b">email</th>
                <th className="py-2 px-4 border-b">person</th>
              </tr>
            </thead>
            <tbody>
              {data?.getAllForm?.data?.map((formData, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-gray-100 text-center hover:bg-gray-50"
                      : "bg-white text-center hover:bg-gray-50"
                  }
                >
                  <td className="py-2 px-4 border-b">
                    {formData?.date
                      ? new Date(parseInt(formData?.date))?.toDateString()
                      : null}
                  </td>
                  <td className="py-2 px-4 border-b">{formData?.number}</td>
                  <td className="py-2 px-4 border-b">{formData?.email}</td>
                  <td className="py-2 px-4 border-b">{formData?.person}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;

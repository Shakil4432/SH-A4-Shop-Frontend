import { Button, Col, Row } from "antd";
import { FieldValues } from "react-hook-form";

import { useParams } from "react-router-dom";
import { useGetBookByIdQuery, useUpdateBookMutation } from "../redux/features/bookManagement/bookApi";
import BSForm from "../components/form/BSForm";
import BSInput from "../components/form/BSInput";


const UpdateBook = () => {
  const { id } = useParams();
  const { data: bookData, isLoading } = useGetBookByIdQuery(id);
  const [updateBook, { data, error }] = useUpdateBookMutation();

  console.log(data);
  console.log(error);

  // Handle form submission
  const onSubmit = async (formData: FieldValues) => {
    console.log(formData);
    updateBook({ id, ...formData });
  };

  // If loading, show nothing
  if (isLoading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[#e7995e] p-8 rounded-lg shadow-md w-[600px]">
        <h1 className="px-8 mb-4 text-center font-bold text-[#2c3e50] text-2xl w-full">
          Update Book Form
        </h1>
        <Row justify="center">
          <Col span={24}>
            <BSForm onSubmit={onSubmit} defaultValues={bookData?.data}>
              <Row gutter={8}>
                <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                  <BSInput type="text" name="name" label="Name" />
                </Col>
                <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                  <BSInput type="text" name="brand" label="Brand" />
                </Col>
                <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                  <BSInput type="number" name="price" label="Price" />
                </Col>
                <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                  <BSInput type="text" name="model" label="Model" />
                </Col>
                <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                  <BSInput type="number" name="stock" label="Stock" />
                </Col>
              </Row>
              <div className="flex justify-center mt-4">
                <Button type="default" htmlType="submit">
                  Update Book
                </Button>
              </div>
            </BSForm>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UpdateBook;

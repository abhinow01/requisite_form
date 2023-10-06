import { Button, Flex, Box } from "@chakra-ui/react";
import React from "react";
import FormInput from "../../components/formComponents/FormInput";
import FormSelect from "../../components/formComponents/FormSelect";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PageNumbers } from "@src/app/interface/home (1)";
import { IJobDetails } from "../../interface/forms";
import { genderOptions, urgencyOptions } from "./constants";

const JobDetailsForm: React.FC<{
  handleTab: (n: PageNumbers) => void;
}> = ({ handleTab }) => {
  const {
    handleChange,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    values,
    isValid, // Add isValid to check if the form is valid
  } = useFormik<IJobDetails>({
    initialValues: {
      jobTitle: "",
      jobDetails: "",
      jobLocation: "",
    },
    validationSchema: Yup.object().shape({
      jobTitle: Yup.string().required("Job Title is required"),
      jobDetails: Yup.string().required("Job Details is required"),
      jobLocation: Yup.string().required("Job Location is required"),
      jobPosition: Yup.string().required("Job position is required"),
    }),
    onSubmit: (values) => {
      if (isValid) {
        handleTab(2); // Move to the next step only if the form is valid
      }
    },
  });

  return (
    <Box width="100%" as="form" onSubmit={handleSubmit}>
      <Flex w="100%" justify="flex-end" mt="4rem" gap="20px">
        <Button
          colorScheme="gray"
          type="button"
          onClick={() => handleTab(0)}
        >
          Previous
        </Button>
        <Button colorScheme="red" type="submit">
          Next
        </Button>
      </Flex>
    </Box>
  );
};

export default JobDetailsForm;

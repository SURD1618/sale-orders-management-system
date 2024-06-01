import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Input,
  FormLabel,
  FormControl,
  FormErrorMessage,
  Button,
  Select,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SaleOrderForm({
  onSubmit,
  customers,
  products,
  defaultValues,
  isReadOnly,
  isCreating,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm({
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) {
      Object.keys(defaultValues).forEach((key) => {
        setValue(key, defaultValues[key]);
      });
    }
  }, [defaultValues, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.customer_id} isReadOnly={isReadOnly}>
        <FormLabel htmlFor="customer_id">Customer</FormLabel>
        <Select
          id="customer_id"
          {...register("customer_id", { required: "Customer ID is required" })}
          isReadOnly={isReadOnly}
        >
          <option value="">Select customer</option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </Select>
        <FormErrorMessage>
          {errors.customer_id && errors.customer_id.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.invoice_no}>
        <FormLabel htmlFor="invoice_no">Invoice No</FormLabel>
        <Input
          id="invoice_no"
          placeholder="Enter invoice number"
          {...register("invoice_no", { required: "Invoice No is required" })}
          isReadOnly={isReadOnly}
        />
        <FormErrorMessage>
          {errors.invoice_no && errors.invoice_no.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.invoice_date}>
        <FormLabel htmlFor="invoice_date">Invoice Date</FormLabel>
        <Controller
          control={control}
          name="invoice_date"
          render={({ field }) => (
            <DatePicker
              id="invoice_date"
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              disabled={isReadOnly}
            />
          )}
        />
        <FormErrorMessage>
          {errors.invoice_date && errors.invoice_date.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl mt={4} isInvalid={errors.items}>
        <FormLabel>Products</FormLabel>
        {products.map((product) => (
          <div key={product.id}>
            <label>
              <input
                type="checkbox"
                value={product.id}
                {...register(`items.${product.id}.product_id`)}
                disabled={isReadOnly}
              />
              {product.name}
            </label>
            <Input
              type="number"
              placeholder="Quantity"
              {...register(`items.${product.id}.quantity`)}
              isReadOnly={isReadOnly}
            />
          </div>
        ))}
      </FormControl>

      {!isReadOnly && (
        <Button mt={4} colorScheme="blue" type="submit" isLoading={isCreating}>
          {defaultValues ? "Update" : "Create"}
        </Button>
      )}
    </form>
  );
}

export default SaleOrderForm;

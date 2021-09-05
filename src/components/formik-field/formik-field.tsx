import { useField } from "formik";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";

const fieldProps = {
  fullWidth: true,
  InputLabelProps: { shrink: true },
  variant: "outlined" as TextFieldProps["variant"],
};

interface IFormikFieldProps extends Omit<TextFieldProps, "onChange"> {
  name: string;
  readonly?: boolean;
}

export const FormikField: React.FC<IFormikFieldProps> = ({
  name,
  readonly,
  ...props
}) => {
  const [{ onBlur, onChange }, { error, touched, value }] = useField(name);

  const hasError = touched && !!error;

  return (
    <TextField
      {...fieldProps}
      {...props}
      aria-readonly={readonly || props["aria-readonly"]}
      error={hasError}
      helperText={hasError && error}
      name={name}
      onBlur={(event) => {
        if (readonly) {
          return;
        }

        onBlur(event);
      }}
      onChange={(event) => {
        if (readonly) {
          return;
        }

        onChange(event);
      }}
      value={value}
    />
  );
};

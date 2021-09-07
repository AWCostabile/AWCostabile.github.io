import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { useLanguage } from "common/hooks/use-language";
import { useField } from "formik";

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
  const { strings } = useLanguage();

  const hasError = touched && !!error;
  const label = strings.labels[name];
  const placeholder = strings.placeholder[name];

  return (
    <TextField
      {...fieldProps}
      {...props}
      aria-readonly={readonly || props["aria-readonly"]}
      error={hasError}
      label={typeof label === "string" ? label : props.label}
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
      placeholder={
        typeof placeholder === "string" ? placeholder : props.placeholder
      }
      value={value}
    />
  );
};

import { FormHelperText, TableCell, TextField } from '@mui/material';

type Props = {
  label: string;
  filter: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchCell({ label, filter }: Props) {
  return (
    <TableCell>
      <TextField
        label={`Search by ${label}`}
        variant="filled"
        size="small"
        type="search"
        onChange={filter}
        sx={{ marginBottom: '10px' }}
      />

      <FormHelperText sx={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>
        {label}
      </FormHelperText>
    </TableCell>
  );
}

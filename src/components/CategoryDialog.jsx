import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button
} from "@mui/material";

function CategoryDialog({ open, onClose, onSave, editData }) {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (editData) {
      setName(editData.name);
      setImage(editData.image);
    } else {
      setName("");
      setImage("");
    }
  }, [editData, open]);

  return (
    <Dialog open={open} onClose={onClose}>

      <DialogTitle>
        {editData ? "Edit Category" : "Add Category"}
      </DialogTitle>

      <DialogContent>

        <TextField
          fullWidth
          label="Category Name"
          value={name}
          sx={{ mt: 1 }}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          fullWidth
          label="Image URL"
          value={image}
          sx={{ mt: 2 }}
          onChange={(e) => setImage(e.target.value)}
        />

      </DialogContent>

      <DialogActions>

        <Button onClick={onClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={() => onSave({ name, image })}
        >
          Save
        </Button>

      </DialogActions>

    </Dialog>
  );
}

export default CategoryDialog;
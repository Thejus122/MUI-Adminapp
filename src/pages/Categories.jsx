import { useEffect, useState } from "react";
import API from "../api/axios";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import CategoryDialog from "../components/CategoryDialog";

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const loadData = () => {
    API.get("/categories").then((res) => setCategories(res.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSave = async (data) => {
    const payload = {
      name: data.name,
      image: data.image || "https://placeimg.com/640/480/any",
    };

    if (editData) {
      await API.put(`/categories/${editData.id}`, payload);
    } else {
      await API.post("/categories", payload);
    }

    setOpen(false);
    setEditData(null);
    loadData();
  };

  const handleEdit = (cat) => {
    setEditData(cat);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/categories/${id}`);
    } catch (error) {
      console.log("Fake API delete not supported, removing locally");
    }

    setCategories((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Topbar />

        <Box sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Categories
          </Typography>

          <Button
            variant="contained"
            sx={{ mb: 2 }}
            onClick={() => {
              setEditData(null);
              setOpen(true);
            }}
          >
            Add Category
          </Button>

          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {categories.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell>{c.name}</TableCell>

                    <TableCell>
                      <img src={c.image} width="50" alt="" />
                    </TableCell>

                    <TableCell>
                      <IconButton color="primary" onClick={() => handleEdit(c)}>
                        <EditIcon />
                      </IconButton>

                      <IconButton
                        color="error"
                        onClick={() => handleDelete(c.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Box>

        <CategoryDialog
          open={open}
          onClose={() => {
            setOpen(false);
            setEditData(null);
          }}
          onSave={handleSave}
          editData={editData}
        />
      </div>
    </div>
  );
}

export default Categories;

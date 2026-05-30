import { useEffect, useState } from "react";
import API from "../api/axios";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
  Box,
} from "@mui/material";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products?offset=0&limit=10").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Topbar />

        <Box sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Products
          </Typography>

          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Image</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {products.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell>{p.title}</TableCell>
                    <TableCell>{p.price}</TableCell>
                    <TableCell>
                      <img src={p.images[0]} width="50" alt="" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Box>
      </div>
    </div>
  );
}

export default Products;

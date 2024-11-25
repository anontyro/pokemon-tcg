import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<
    { id: number; userName: string; email: string }[]
  >([]);

  useEffect(() => {
    (window as any).api.getUsers().then((users: any[]) => {
      setUsers(users);
      console.log("users table", users);
    });
  }, []);
  return (
    <Paper>
      <Box>
        <Typography>Test Home Page</Typography>
      </Box>
    </Paper>
  );
};

export default HomePage;

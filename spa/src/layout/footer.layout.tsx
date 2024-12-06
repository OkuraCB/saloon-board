import { useTheme } from "@mui/material";

export const Footer = () => {
  const theme = useTheme();

  const footerStyles: React.CSSProperties = {
    color: theme.palette.text.secondary,
    textAlign: "center",
    padding: "10px 0",
    width: "100%", // Ensure the footer stretches to the full width
  };

  return (
    <footer style={footerStyles}>
      <p>&copy; 2024 Arthur Illa. Todos os direitos reservados.</p>
    </footer>
  );
};

import { Box } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => (
  <Box
    textAlign="center"
    p="5"
    color="gray.600"
    borderTop="1px"
    borderColor="gray.100"
  >
    2021 RealEstates, Inc. Design by{" "}
    <Link
      href="https://brandon-wanambisi-655ef.web.app"
      color="blue.400"
      target="_blank"
    >
      SiBrand Technologies
    </Link>
  </Box>
);

export default Footer;

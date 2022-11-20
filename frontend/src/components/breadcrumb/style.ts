import Breadcrumbs from "@mui/material/Breadcrumbs";
import styled from "styled-components";

export const BreadcrumbsContainer = styled(Breadcrumbs)`
  position: absolute;
  top: 10px;
  left: 10px;
  height: 50px;
  padding: 10px;

  .MuiBreadcrumbs-separator {
    color: #f2f2f2;
  }

  li, p {
    color: #f2f2f2;
    transition: all 0.3s ease-in-out;
  }

  li:hover, p:hover {
    color: #2d2a2e;
  }
  `;
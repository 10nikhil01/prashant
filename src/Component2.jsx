import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";

function Component2() {
  return (
    <Box
      sx={{
        bgcolor: "#f8f8f8",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ mt: 6, fontSize: "2rem" }}>
        OUR{" "}
        <Typography
          component="span"
          sx={{ color: "#0588bc", fontSize: "2rem" }}
        >
          {" "}
          R.O.C.K.E.T.{" "}
        </Typography>
        PROCESS
      </Typography>
      <Grid container spacing={2} sx={{ px: 15, mt: 2 }}>
        <Grid item md={4}>
          <Card sx={{ px: 2, py: 3, bgcolor: "#0588bc", color: "#fff" }}>
            <Typography sx={{ pb: 1, fontSize: "1.6rem", fontWeight: "600" }}>
              Research
            </Typography>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo a nulla, est dolorum ipsam delectus, perspiciatis
              veritatis molestiae soluta dolore tempora sapiente deleniti
              eligendi. Ab?
            </Typography>
            <Typography sx={{ py: 1 }}>
              -In-depth Competitor Analysis
            </Typography>
            <Typography sx={{ py: 1 }}>-Site and Server Analysis</Typography>
            <Typography sx={{ py: 1 }}>-Analysis 200+ On-Site SEO </Typography>
            <Typography sx={{ pb: 4 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              corporis corrupti quae! Voluptatum, aspernatur repellat!
            </Typography>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ px: 2, py: 3, boxShadow: "none" }}>
            <Typography sx={{ fontSize: "1.6rem", fontWeight: "600", pb: 1 }}>
              Optimize
            </Typography>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo a nulla, est dolorum ipsam delectus, perspiciatis
              veritatis molestiae soluta dolore tempora sapiente deleniti
              eligendi. Ab?
            </Typography>
            <Typography sx={{ py: 1 }}>
              -In-depth Competitor Analysis
            </Typography>
            <Typography sx={{ py: 1 }}>-Site and Server Analysis</Typography>
            <Typography sx={{ py: 1 }}>-Analysis 200+ On-Site SEO </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              impedit, quia totam culpa rerum tempore accusantium asperiores
              optio voluptatum eaque ratione incidunt, soluta debitis dolorem
              fugiat sed corrupti, rem quibusdam!
            </Typography>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ px: 2, py: 3, boxShadow: "none" }}>
            <Typography sx={{ fontSize: "1.6rem", fontWeight: "600", pb: 1 }}>
              Content
            </Typography>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo a nulla, est dolorum ipsam delectus, perspiciatis
              veritatis molestiae soluta dolore tempora sapiente deleniti
              eligendi. Ab?
            </Typography>
            <Typography sx={{ py: 1 }}>
              -In-depth Competitor Analysis
            </Typography>
            <Typography sx={{ py: 1 }}>-Site and Server Analysis</Typography>
            <Typography sx={{ py: 1 }}>-Analysis 200+ On-Site SEO </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              impedit, quia totam culpa rerum tempore accusantium asperiores
              optio voluptatum eaque ratione incidunt, soluta debitis dolorem
              fugiat sed corrupti, rem quibusdam!
            </Typography>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ px: 2, py: 3, boxShadow: "none" }}>
            <Typography sx={{ fontSize: "1.6rem", fontWeight: "600", pb: 1 }}>
              Keywords
            </Typography>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo a nulla, est dolorum ipsam delectus, perspiciatis
              veritatis molestiae soluta dolore tempora sapiente deleniti
              eligendi. Ab?
            </Typography>
            <Typography sx={{ py: 1 }}>
              -In-depth Competitor Analysis
            </Typography>
            <Typography sx={{ py: 1 }}>-Site and Server Analysis</Typography>
            <Typography sx={{ py: 1 }}>-Analysis 200+ On-Site SEO </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              impedit, quia totam culpa rerum tempore accusantium asperiores
              optio voluptatum eaque ratione incidunt, soluta debitis dolorem
              fugiat sed corrupti, rem quibusdam!
            </Typography>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ px: 2, py: 3, boxShadow: "none" }}>
            <Typography sx={{ fontSize: "1.6rem", fontWeight: "600", pb: 1 }}>
              Earned Media & Links
            </Typography>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo a nulla, est dolorum ipsam delectus, perspiciatis
              veritatis molestiae soluta dolore tempora sapiente deleniti
              eligendi. Ab?
            </Typography>
            <Typography sx={{ py: 1 }}>
              -In-depth Competitor Analysis
            </Typography>
            <Typography sx={{ py: 1 }}>-Site and Server Analysis</Typography>
            <Typography sx={{ py: 1 }}>-Analysis 200+ On-Site SEO </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              impedit, quia totam culpa rerum tempore accusantium asperiores
              optio voluptatum eaque ratione incidunt, soluta debitis dolorem
              fugiat sed corrupti, rem quibusdam!
            </Typography>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ px: 2, py: 3, boxShadow: "none" }}>
            <Typography sx={{ fontSize: "1.6rem", fontWeight: "600", pb: 1 }}>
              Testing
            </Typography>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo a nulla, est dolorum ipsam delectus, perspiciatis
              veritatis molestiae soluta dolore tempora sapiente deleniti
              eligendi. Ab?
            </Typography>
            <Typography sx={{ py: 1 }}>
              -In-depth Competitor Analysis
            </Typography>
            <Typography sx={{ py: 1 }}>-Site and Server Analysis</Typography>
            <Typography sx={{ py: 1 }}>-Analysis 200+ On-Site SEO </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              impedit, quia totam culpa rerum tempore accusantium asperiores
              optio voluptatum eaque ratione incidunt, soluta debitis dolorem
              fugiat sed corrupti, rem quibusdam!
            </Typography>
          </Card>
        </Grid>
     
      </Grid>
    </Box>
  );
}

export default Component2;

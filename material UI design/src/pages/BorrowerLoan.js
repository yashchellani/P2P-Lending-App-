import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../components/customer/borrower-list-results';
import { CustomerListToolbar } from '../components/customer/borrower-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { lenders } from '../__mocks__/BorrowerLoans';

const Customers = () => ( //This is the lenders page - Only the borrowers will be able to see this 
  <>
    <Head>
      <title>
        Lenders
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar />
        <Box sx={{ mt: 3 }}>
          <CustomerListResults customers={lenders} />
        </Box>
      </Container>
    </Box>
  </>
);
Customers.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Customers;
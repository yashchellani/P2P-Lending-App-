import { useEffect } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
import { Cog as CogIcon } from '../icons/cog';
import { Lock as LockIcon } from '../icons/lock';
import { Selector as SelectorIcon } from '../icons/selector';
import { ShoppingBag as ShoppingBagIcon } from '../icons/shopping-bag';
import { User as UserIcon } from '../icons/user';
import { UserAdd as UserAddIcon } from '../icons/user-add';
import { Users as UsersIcon } from '../icons/users';
import { XCircle as XCircleIcon } from '../icons/x-circle';
import { Logo } from './logo';
import { NavItem } from './nav-item';

var userType = 'default';
if (typeof window !== 'undefined') {
  userType = localStorage.getItem('userType');
}
var items = [];
if (userType == 'borrower') {
  items = [
    {
      href: '/',
      icon: (<ChartBarIcon fontSize="small" />),
      title: 'Dashboard'
    },

    {
      href: '/account',
      icon: (<UserIcon fontSize="small" />),
      title: 'Account'
    },
    {
      href: '/applyLoan',
      icon: (<CogIcon fontSize="small" />),
      title: 'New Loan'
    },
  
    {
      href: '/matchedLenders',
      icon: (<XCircleIcon fontSize="small" />),
      title: 'Find Lenders'
    },
    {
      href: '/products',
      icon: (<UserIcon fontSize="small" />),
      title: 'FAQ'
    },
    {
      href: '/logout',
      icon: (<LockIcon fontSize="small" />),
      title: 'Logout'
    }
  ];
}
else if (userType == "lender"){
  items = [
    {
      href: '/',
      icon: (<ChartBarIcon fontSize="small" />),
      title: 'Dashboard'
    },
    // {
    //   href: '/customers',
    //   icon: (<UsersIcon fontSize="small" />),
    //   title: 'Borrowers'
    // },
    // {
    //   href: '/products',
    //   icon: (<ShoppingBagIcon fontSize="small" />),
    //   title: 'Products'
    // },
    {
      href: '/account',
      icon: (<UserIcon fontSize="small" />),
      title: 'Account'
    },
    {
      href: '/updateLenderProfile',
      icon: (<CogIcon fontSize="small" />),
      title: 'Update Lender Profile'
    },
   
    // {
    //   href: '/BorrowerLoan',
    //   icon: (<UserAddIcon fontSize="small" />),
    //   title: 'Borrower Loan page'
    // },
  
    {
      href: '/matchedBorrowers',
      icon: (<XCircleIcon fontSize="small" />),
      title: 'Find Borrowers'
    },
    {
      href: '/products',
      icon: (<UserIcon fontSize="small" />),
      title: 'FAQ'
    },
    {
      href: '/logout',
      icon: (<LockIcon fontSize="small" />),
      title: 'Logout'
    }
  ];
}
else{
  items = [
  {
    href: '/',
    icon: (<ChartBarIcon fontSize="small" />),
    title: 'Dashboard'
  },
  // {
  //   href: '/customers',
  //   icon: (<UsersIcon fontSize="small" />),
  //   title: 'Borrowers'
  // },
  {
    href: '/products',
    icon: (<ShoppingBagIcon fontSize="small" />),
    title: 'Products'
  },
  {
    href: '/account',
    icon: (<UserIcon fontSize="small" />),
    title: 'Account'
  },
  {
    href: '/applyLoan',
    icon: (<CogIcon fontSize="small" />),
    title: 'New Loan'
  },
  {
    href: '/updateLenderProfile',
    icon: (<CogIcon fontSize="small" />),
    title: 'Update Lender Profile'
  },
 
  // {
  //   href: '/BorrowerLoan',
  //   icon: (<UserAddIcon fontSize="small" />),
  //   title: 'Borrower Loan page'
  // },
  {
    href: '/matchedLenders',
    icon: (<XCircleIcon fontSize="small" />),
    title: 'Find Lenders'
  },
  {
    href: '/matchedBorrowers',
    icon: (<XCircleIcon fontSize="small" />),
    title: 'Find Borrowers'
  },
  {
    href: '/products',
    icon: (<UserIcon fontSize="small" />),
    title: 'FAQ'
  },
  {
    href: '/logout',
    icon: (<LockIcon fontSize="small" />),
    title: 'Logout'
  }

];
}

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  
  if (typeof window !== 'undefined') {
    if (localStorage.getItem("active") == null) {
      alert("Please log in.");
      router.push("/login");
    }
  }

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <NextLink
              href="/"
              passHref
            >
              <a>
                <Logo
                  sx={{
                    height: 42,
                    width: 42
                  }}
                />
              </a>
            </NextLink>
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                px: 3,
                py: '11px',
                borderRadius: 1
              }}
            >
              <div>
                <Typography
                  color="inherit"
                  variant="subtitle1"
                >
                  MoneyMate
                </Typography>
                <Typography
                  color="neutral.400"
                  variant="body2"
                >
                  {userType}
                       
                   </Typography>
              </div>
              <SelectorIcon
                sx={{
                  color: 'neutral.500',
                  width: 14,
                  height: 14
                }}
              />
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 3
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: '#2D3748' }} />
        <Box
          sx={{
            px: 2,
            py: 3
          }}
        >
          <Typography
            color="neutral.100"
            variant="subtitle2"
          >
            Have feedback about the app?
          </Typography>
          <Typography
            color="neutral.500"
            variant="body2"
          >
            Click on the link below to submit!
          </Typography>
          <Box
            sx={{
              display: 'flex',
              mt: 2,
              mx: 'auto',
              width: '160px',
              '& img': {
                width: '100%'
              }
            }}
          >
            <img
              alt="Go to pro"
              src="/static/images/sidebar_pro.png"
            />
          </Box>
          <NextLink
            href="https://forms.gle/t1SDNR2WDsy5rM3t8"
            passHref
          >
            <Button
              color="secondary"
              component="a"
              endIcon={(<OpenInNewIcon />)}
              fullWidth
              sx={{ mt: 2 }}
              variant="contained"
            >
              Feedback
            </Button>
          </NextLink>
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};

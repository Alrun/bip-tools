import React from 'react';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Divider from '@mui/material/Divider';
import Typography from '../../ui/Typography/Typography';
import ButtonCopy from '../ButtonCopy/ButtonCopy';
import ButtonQrCode from '../ButtonQrCode/ButtonQrCode';
import Button from '../../ui/Button/Button';
import AddressSkeletonGrid from './AddressSkeletonGrid';
import AddressSkeletonRow from './AddressSkeletonRow';

const AddressList = ({ list, onShowMore, length }: any) => {
    const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
    const xlUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('xl'));
    const showBalance = false;

    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {lgUp ? (
                <TableContainer>
                    <Table size="small" sx={{ minWidth: 650 }} aria-label="simple table" padding="none">
                        <TableHead>
                            <TableRow>
                                {xlUp ? (
                                    <>
                                        <TableCell sx={{ pr: 6 }}>Path</TableCell>
                                        <TableCell align="right" sx={{ pr: 8 }}>
                                            Address
                                        </TableCell>
                                    </>
                                ) : (
                                    <TableCell sx={{ pr: 6 }}>Path / Address</TableCell>
                                )}
                                {showBalance && (
                                    <TableCell align="right" sx={{ pr: 6 }}>
                                        Balance
                                    </TableCell>
                                )}
                                {xlUp ? (
                                    <>
                                        <TableCell align="right" sx={{ pr: 8 }}>
                                            Public key
                                        </TableCell>
                                        <TableCell align="right" sx={{ pr: 1 }}>
                                            Private key
                                        </TableCell>
                                    </>
                                ) : (
                                    <>
                                        <TableCell sx={{ width: '100%' }} />
                                        <TableCell align="right" sx={{ pr: 1 }}>
                                            Keys
                                        </TableCell>
                                    </>
                                )}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {isLoaded
                                ? list.map((row: any) => (
                                      <TableRow
                                          key={row.path}
                                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                      >
                                          {xlUp ? (
                                              <>
                                                  <TableCell scope="row" sx={{ pr: 6 }}>
                                                      <Typography variant="smRegular">{row.path}</Typography>
                                                  </TableCell>
                                                  <TableCell align="right" sx={{ pr: 6 }}>
                                                      <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                                                          <Typography sx={{ fontFamily: '"Roboto Mono", monospace' }}>
                                                              {row.address}
                                                          </Typography>
                                                          <ButtonCopy text={row.address} />
                                                          <ButtonQrCode title="Address" text={row.address} />
                                                      </Box>
                                                  </TableCell>
                                              </>
                                          ) : (
                                              <TableCell scope="row" sx={{ pr: 6 }}>
                                                  <Typography
                                                      component="div"
                                                      variant="smRegular"
                                                      sx={{ mr: 3, pt: 1.5 }}
                                                  >
                                                      {row.path}
                                                  </Typography>

                                                  <Box sx={{ display: 'inline-flex', alignItems: 'center', pt: 1.5 }}>
                                                      <Typography
                                                          sx={{
                                                              mr: 1,
                                                              fontFamily: '"Roboto Mono", monospace'
                                                          }}
                                                      >
                                                          {row.address}
                                                      </Typography>
                                                      <ButtonCopy text={row.address} />
                                                      <ButtonQrCode title="Address" text={row.address} />
                                                  </Box>
                                              </TableCell>
                                          )}
                                          {showBalance && (
                                              <TableCell align="right" sx={{ pr: 6, pt: { lg: 8, xl: 0 } }}>
                                                  <Typography>0</Typography>
                                              </TableCell>
                                          )}
                                          {xlUp ? (
                                              <>
                                                  <TableCell align="right" sx={{ pr: 6 }}>
                                                      <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                                                          <Typography
                                                              variant="smRegular"
                                                              sx={{ fontFamily: '"Roboto Mono", monospace', mr: 1 }}
                                                          >
                                                              {row.publicKey}
                                                          </Typography>
                                                          <ButtonCopy text={row.publicKey} />
                                                          <ButtonQrCode title="Public key" text={row.publicKey} />
                                                      </Box>
                                                  </TableCell>
                                                  <TableCell align="right">
                                                      <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                                                          <Typography
                                                              sx={{
                                                                  fontFamily: '"Roboto Mono", monospace',
                                                                  mr: 1
                                                              }}
                                                          >
                                                              {row.privateKey}
                                                          </Typography>
                                                          <ButtonCopy text={row.privateKey} />
                                                          <ButtonQrCode title="Private key" text={row.privateKey} />
                                                      </Box>
                                                  </TableCell>
                                              </>
                                          ) : (
                                              <>
                                                  <TableCell align="right" sx={{ width: '100%', pr: 6 }}>
                                                      <Box>
                                                          <Box sx={{}}>
                                                              <Typography
                                                                  variant="smRegular"
                                                                  sx={{
                                                                      mr: 1,
                                                                      color: (theme) =>
                                                                          theme.palette.mode === 'dark'
                                                                              ? theme.palette.secondary.dark
                                                                              : theme.palette.secondary.light
                                                                  }}
                                                              >
                                                                  Public key
                                                              </Typography>
                                                          </Box>
                                                          <Box sx={{ pt: { lg: 2, xl: 0 } }}>
                                                              <Typography
                                                                  sx={{
                                                                      mr: 1,
                                                                      color: (theme) =>
                                                                          theme.palette.mode === 'dark'
                                                                              ? theme.palette.secondary.dark
                                                                              : theme.palette.secondary.light
                                                                  }}
                                                              >
                                                                  Private key
                                                              </Typography>
                                                          </Box>
                                                      </Box>
                                                  </TableCell>
                                                  <TableCell align="right" sx={{}}>
                                                      <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                                                          <Typography
                                                              variant="smRegular"
                                                              sx={{ fontFamily: '"Roboto Mono", monospace', mr: 1 }}
                                                          >
                                                              {row.publicKey}
                                                          </Typography>
                                                          <ButtonCopy text={row.publicKey} />
                                                          <ButtonQrCode title="Public key" text={row.publicKey} />
                                                      </Box>
                                                      <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                                                          <Typography
                                                              sx={{
                                                                  fontFamily: '"Roboto Mono", monospace',
                                                                  mr: 1
                                                              }}
                                                          >
                                                              {row.privateKey}
                                                          </Typography>
                                                          <ButtonCopy text={row.privateKey} />
                                                          <ButtonQrCode title="Private key" text={row.privateKey} />
                                                      </Box>
                                                  </TableCell>
                                              </>
                                          )}
                                      </TableRow>
                                  ))
                                : Array(Math.ceil(length / 2))
                                      .fill('')
                                      .map((_, idx) => (
                                          // eslint-disable-next-line react/no-array-index-key
                                          <AddressSkeletonRow key={idx} xlUp={xlUp} showBalance={showBalance} />
                                      ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <Box>
                    {isLoaded ? (
                        list.map((row: any) => (
                            <Box key={row.path} sx={{ mb: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 0 }}>
                                    <Typography
                                        variant="smBold"
                                        sx={{
                                            mr: 2,
                                            color: (theme) =>
                                                theme.palette.mode === 'dark'
                                                    ? theme.palette.secondary.dark
                                                    : theme.palette.secondary.light
                                        }}
                                    >
                                        Path:
                                    </Typography>
                                    <Typography variant="smRegular" sx={{ wordBreak: 'break-word' }}>
                                        {row.path}
                                    </Typography>
                                </Box>

                                <Grid container sx={{ mb: 0 }} alignItems="center">
                                    <Grid item>
                                        <Typography
                                            sx={{
                                                mr: 2,
                                                color: (theme) =>
                                                    theme.palette.mode === 'dark'
                                                        ? theme.palette.secondary.dark
                                                        : theme.palette.secondary.light,
                                                fontWeight: (theme) => theme.typography.fontWeightMedium
                                            }}
                                        >
                                            Address:
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            sx={{
                                                fontFamily: '"Roboto Mono", monospace',
                                                wordBreak: 'break-word',
                                                mr: 2
                                            }}
                                        >
                                            {row.address}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <ButtonCopy text={row.address} />
                                            <ButtonQrCode title="Address" text={row.address} />
                                        </Box>
                                    </Grid>
                                </Grid>

                                {showBalance && (
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 0 }}>
                                        <Typography
                                            sx={{
                                                mr: 2,
                                                fontWeight: (theme) => theme.typography.fontWeightMedium
                                            }}
                                        >
                                            Balance:
                                        </Typography>
                                        <Typography sx={{ wordBreak: 'break-word' }}>0</Typography>
                                    </Box>
                                )}

                                <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 0, mt: 2 }}>
                                    <Typography
                                        variant="smBold"
                                        sx={{
                                            mr: 2,
                                            color: (theme) =>
                                                theme.palette.mode === 'dark'
                                                    ? theme.palette.secondary.dark
                                                    : theme.palette.secondary.light
                                        }}
                                    >
                                        Keys
                                    </Typography>
                                </Box>

                                <Grid container sx={{ mb: 0 }} alignItems="center">
                                    <Grid item>
                                        <Typography
                                            sx={{
                                                mr: 2,
                                                fontWeight: (theme) => theme.typography.fontWeightMedium,
                                                color: (theme) =>
                                                    theme.palette.mode === 'dark'
                                                        ? theme.palette.secondary.dark
                                                        : theme.palette.secondary.light
                                            }}
                                        >
                                            Public:
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            sx={{
                                                fontFamily: '"Roboto Mono", monospace',
                                                wordBreak: 'break-word',
                                                mr: 2
                                            }}
                                        >
                                            {row.publicKey}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <ButtonCopy text={row.publicKey} />
                                            <ButtonQrCode title="Public key" text={row.publicKey} />
                                        </Box>
                                    </Grid>
                                </Grid>

                                <Grid container sx={{ mb: 0 }} alignItems="center">
                                    <Grid item>
                                        <Typography
                                            sx={{
                                                mr: 2,
                                                fontWeight: (theme) => theme.typography.fontWeightMedium,
                                                color: (theme) =>
                                                    theme.palette.mode === 'dark'
                                                        ? theme.palette.secondary.dark
                                                        : theme.palette.secondary.light
                                            }}
                                        >
                                            Private:
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            sx={{
                                                fontFamily: '"Roboto Mono", monospace',
                                                wordBreak: 'break-word',
                                                mr: 2
                                            }}
                                        >
                                            {row.privateKey}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <ButtonCopy text={row.privateKey} />
                                            <ButtonQrCode title="Public key" text={row.publicKey} />
                                        </Box>
                                    </Grid>
                                </Grid>

                                <Divider sx={{ pt: 2 }} />
                            </Box>
                        ))
                    ) : (
                        <Box>
                            {Array(Math.ceil(length / 2))
                                .fill('')
                                .map((_, idx) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <AddressSkeletonGrid key={idx} showBalance={showBalance} />
                                ))}
                        </Box>
                    )}
                </Box>
            )}
            {list.length && (
                <Box sx={{ textAlign: 'center' }} onClick={onShowMore}>
                    <Button variant="text">Show next 20</Button>
                </Box>
            )}
        </>
    );
};

export default React.memo(AddressList);

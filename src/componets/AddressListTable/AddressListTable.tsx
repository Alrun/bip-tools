import React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '../../ui/Typography/Typography';
import ButtonCopy from '../ButtonCopy/ButtonCopy';
import ButtonQrCode from '../ButtonQrCode/ButtonQrCode';
import AddressListTableSkeleton from './AddressListTableSkeleton';
import { AddressListTableProps } from './AddressListTable.d';

const AddressListTable = ({ length, list, isLoaded, showBalances, xlUp }: AddressListTableProps) => (
    <TableContainer>
        <Table size="small" sx={{ minWidth: 650 }} aria-label="addresses-table" padding="none">
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
                    {showBalances && (
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
                          <TableRow key={row.path} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
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
                                      <Typography component="div" variant="smRegular" sx={{ mr: 3, pt: 1.5 }}>
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
                              {showBalances && (
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
                                                          whiteSpace: 'nowrap',
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
                                                          whiteSpace: 'nowrap',
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
                    : Array(length)
                          .fill('')
                          .map((_, idx) => (
                              // eslint-disable-next-line react/no-array-index-key
                              <AddressListTableSkeleton key={idx} xlUp={xlUp} showBalances={showBalances} />
                          ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default AddressListTable;

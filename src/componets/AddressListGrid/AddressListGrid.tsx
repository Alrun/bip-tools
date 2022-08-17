import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '../../ui/Typography/Typography';
import ButtonCopy from '../ButtonCopy/ButtonCopy';
import ButtonQrCode from '../ButtonQrCode/ButtonQrCode';
import AddressListGridSkeleton from './AddressListGridSkeleton';
import { AddressListGridProps } from './AddressListGrid.d';

const AddressListGrid = ({ list, showBalances, isLoaded, length }: AddressListGridProps) => (
    <Box>
        {isLoaded
            ? list.map((row: any) => (
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

                      {showBalances && (
                          <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 0 }}>
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
            : Array(length)
                  .fill('')
                  .map((_, idx) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <AddressListGridSkeleton key={idx} showBalances={showBalances} />
                  ))}
    </Box>
);

export default AddressListGrid;

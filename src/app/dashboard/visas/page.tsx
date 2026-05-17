'use client';
import React, { useState } from 'react';
import {
  Box, Typography, Button, Card, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Chip, IconButton, Tabs, Tab,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const visaData = [
  { id: 1, name: 'أحمد محمد عبدالله', passport: 'A1234567', submissionDate: '2026-02-10', status: 'مقبولة', mofaNumber: 'MOFA-889900' },
  { id: 2, name: 'فاطمة علي حسن', passport: 'A7654321', submissionDate: '2026-02-12', status: 'قيد المعالجة', mofaNumber: '-' },
  { id: 3, name: 'سارة إبراهيم الدوسري', passport: 'C3456789', submissionDate: '2026-02-05', status: 'مرفوضة', mofaNumber: '-' },
];

export default function VisasPage() {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          إدارة التأشيرات
        </Typography>
        <Button variant="contained" startIcon={<DownloadIcon />}>
          تصدير للقنصلية (CSV)
        </Button>
      </Box>

      <Card sx={{ boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)} sx={{ px: 2 }}>
            <Tab label="الكل" sx={{ fontWeight: 'bold' }} />
            <Tab label="قيد المعالجة" sx={{ fontWeight: 'bold' }} />
            <Tab label="المقبولة" sx={{ fontWeight: 'bold' }} />
            <Tab label="المرفوضة" sx={{ fontWeight: 'bold' }} />
          </Tabs>
        </Box>
        
        <TableContainer>
          <Table>
            <TableHead sx={{ bgcolor: 'rgba(0,0,0,0.02)' }}>
              <TableRow>
                {['الاسم', 'رقم الجواز', 'تاريخ التقديم', 'رقم MOFA', 'الحالة', 'إجراء'].map((h) => (
                  <TableCell key={h} sx={{ fontWeight: 'bold' }} align={h === 'إجراء' ? 'right' : 'inherit'}>{h}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {visaData.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.passport}</TableCell>
                  <TableCell>{row.submissionDate}</TableCell>
                  <TableCell sx={{ fontFamily: 'monospace' }}>{row.mofaNumber}</TableCell>
                  <TableCell>
                    <Chip
                      label={row.status}
                      size="small"
                      color={row.status === 'مقبولة' ? 'success' : row.status === 'مرفوضة' ? 'error' : 'warning'}
                      sx={{ fontWeight: 'bold' }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton color="success" size="small" disabled={row.status === 'مقبولة'}><CheckCircleIcon /></IconButton>
                    <IconButton color="error" size="small" disabled={row.status === 'مرفوضة'}><HighlightOffIcon /></IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
}

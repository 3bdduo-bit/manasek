'use client';
import React from 'react';
import {
  Box, Typography, Button, Grid, Card, CardContent, Chip,
  LinearProgress, Avatar, AvatarGroup, IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const groupsData = [
  { id: 1, name: 'عمرة رمضان - مجموعة أ', type: 'عمرة', pilgrimsCount: 45, maxCount: 50, departure: '2026-03-01', return: '2026-03-15', status: 'مفتوح للتسجيل' },
  { id: 2, name: 'حج 1445 - VIP', type: 'حج', pilgrimsCount: 20, maxCount: 20, departure: '2026-05-20', return: '2026-06-10', status: 'مكتمل' },
  { id: 3, name: 'عمرة شوال - اقتصادي', type: 'عمرة', pilgrimsCount: 12, maxCount: 45, departure: '2026-04-05', return: '2026-04-15', status: 'مفتوح للتسجيل' },
];

export default function GroupsPage() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          المجموعات والرحلات
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />}>
          إنشاء مجموعة
        </Button>
      </Box>

      <Grid container spacing={3}>
        {groupsData.map((group) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={group.id}>
            <Card sx={{ height: '100%', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)', position: 'relative' }}>
              <IconButton sx={{ position: 'absolute', top: 8, left: 8 }}>
                <MoreVertIcon />
              </IconButton>
              <CardContent>
                <Chip label={group.type} size="small" color={group.type === 'حج' ? 'primary' : 'secondary'} sx={{ mb: 2, fontWeight: 'bold' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {group.name}
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary', mb: 3 }}>
                  <FlightTakeoffIcon fontSize="small" />
                  <Typography variant="body2">{group.departure} — {group.return}</Typography>
                </Box>

                <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    الحجاج المسجلين: {group.pilgrimsCount} / {group.maxCount}
                  </Typography>
                  <Chip label={group.status} size="small" color={group.status === 'مكتمل' ? 'success' : 'default'} />
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={(group.pilgrimsCount / group.maxCount) * 100} 
                  sx={{ height: 8, borderRadius: 4, mb: 3 }}
                  color={group.pilgrimsCount === group.maxCount ? 'success' : 'primary'}
                />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <AvatarGroup max={4} sx={{ '& .MuiAvatar-root': { width: 30, height: 30, fontSize: '0.8rem' } }}>
                    <Avatar alt="Remy Sharp" src="" />
                    <Avatar alt="Travis Howard" src="" />
                    <Avatar alt="Cindy Baker" src="" />
                    <Avatar alt="Agnes Walker" src="" />
                    <Avatar alt="Trevor Henderson" src="" />
                  </AvatarGroup>
                  <Button size="small" variant="outlined">إدارة</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

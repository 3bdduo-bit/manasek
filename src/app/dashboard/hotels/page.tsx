'use client';
import React from 'react';
import {
  Box, Typography, Button, Grid, Card, CardContent, CardMedia,
  Rating, Chip, Divider,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const hotelsData = [
  { id: 1, name: 'فندق سويس أوتيل المقام مكة', city: 'مكة المكرمة', stars: 5, distance: '100m', roomsAvailable: 15, totalRooms: 50, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'فندق دار التقوى', city: 'المدينة المنورة', stars: 5, distance: '50m', roomsAvailable: 5, totalRooms: 30, image: 'https://images.unsplash.com/photo-1582719478250-c894e4dc240e?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'أبراج الكسوة', city: 'مكة المكرمة', stars: 3, distance: '900m', roomsAvailable: 120, totalRooms: 200, image: 'https://images.unsplash.com/photo-1542314831-c6a4d14d8c85?auto=format&fit=crop&q=80&w=400' },
];

export default function HotelsPage() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          الفنادق والغرف
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />}>
          إضافة فندق
        </Button>
      </Box>

      <Grid container spacing={4}>
        {hotelsData.map((hotel) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={hotel.id}>
            <Card sx={{ height: '100%', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={hotel.image}
                alt={hotel.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{hotel.name}</Typography>
                  <Chip label={hotel.city} size="small" color={hotel.city === 'مكة المكرمة' ? 'primary' : 'secondary'} />
                </Box>
                
                <Rating value={hotel.stars} readOnly size="small" sx={{ mb: 2 }} />
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary', mb: 2 }}>
                  <LocationOnIcon fontSize="small" />
                  <Typography variant="body2">البعد عن الحرم: {hotel.distance}</Typography>
                </Box>

                <Divider sx={{ my: 2 }} />
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    الغرف المتاحة: {hotel.roomsAvailable} / {hotel.totalRooms}
                  </Typography>
                  <Button size="small" variant="outlined">توزيع الغرف</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

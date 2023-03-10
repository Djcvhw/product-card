import React, { useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import CardAccordion from '../../components/CardAccordion';

import type { Product } from '../../store/models/products';
import type { RootState, Dispatch } from '../../store';

type Props = {}

const ProductCard: FC<Props> = () => {

  const product: Product | null = useSelector((state: RootState) => state.products.product);
  const loading: boolean = useSelector((state: RootState) => state.products.loadingProduct);
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    
    dispatch.products.getProduct('id');

  }, []);

  return <Box>
    {product && <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        height={800}
        image={product.image}
      />
      <Box>
        <CardHeader 
          title={product.name}
        />
        <CardContent>
          <CardAccordion description={product.description} attributes={product.attributes}/>
        </CardContent>
      </Box>
    </Card>}
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  </Box>
}

export default ProductCard;